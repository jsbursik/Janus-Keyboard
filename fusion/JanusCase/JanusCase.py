"""Build the Janus case in Fusion as a native, parametric solid.

Reads the outline DXFs that `npm run build` (ergogen --debug) writes to
output/outlines and recreates the `case` recipe from config.yaml:

    floor + wall - slider cutout + insert standoffs + PCB supports

Every sketch is real lines/arcs/circles and every height is a user parameter
(Modify > Change Parameters), so the result can be edited like any other
Fusion design. A mirrored right half is added as a second body.
"""

import math
import os
import traceback

import adsk.core
import adsk.fusion

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DEFAULT_OUTLINES = os.path.normpath(os.path.join(SCRIPT_DIR, '..', '..', 'output', 'outlines'))

REQUIRED = ['_board_case_clearance', 'wall', '_slider_hole', 'inserts', '_board_supports']
OPTIONAL = ['board', 'keycaps']

# Heights from the `cases` section of config.yaml.
PARAMETERS = [
    ('floor_thickness', '1 mm', 'Case floor (_case_bottom)'),
    ('wall_height', '5.6 mm', 'Case wall (_case_wall)'),
    ('standoff_height', '4 mm', 'Threaded insert standoffs (_standoffs); PCB rests on these'),
    ('support_height', '4 mm', 'PCB support posts (_supports)'),
    ('slider_cut_bottom', '3 mm', 'Power slider cutout starts here (_slider_cutout shift)'),
    ('slider_cut_height', 'wall_height - slider_cut_bottom', 'Power slider cutout height'),
    ('half_gap', '30 mm', 'Gap between the left half and the mirrored right half'),
]

# Endpoints closer than this (mm) are treated as the same point.
JOIN_TOLERANCE = 1e-3


def read_dxf(path):
    """Return the LINE/ARC/CIRCLE entities from an ergogen DXF (units: mm)."""
    with open(path) as f:
        rows = [row.strip() for row in f.read().splitlines()]

    entities, current, in_entities = [], None, False
    for code, value in zip(rows[0::2], rows[1::2]):
        if code == '0':
            if current is not None:
                entities.append(current)
                current = None
            if value == 'ENDSEC':
                in_entities = False
            elif in_entities:
                if value not in ('LINE', 'ARC', 'CIRCLE'):
                    raise ValueError('{}: unsupported DXF entity {}'.format(os.path.basename(path), value))
                current = {'type': value}
        elif code == '2' and value == 'ENTITIES':
            in_entities = True
        elif current is not None and code in ('10', '20', '11', '21', '40', '50', '51'):
            current[code] = float(value)
    return entities


def arc_points(e):
    """Start point, end point and counter-clockwise sweep (radians) of a DXF ARC."""
    cx, cy, r = e['10'], e['20'], e['40']
    a0, a1 = math.radians(e['50']), math.radians(e['51'])
    sweep = (a1 - a0) % (2 * math.pi) or 2 * math.pi
    return (cx + r * math.cos(a0), cy + r * math.sin(a0)), (cx + r * math.cos(a1), cy + r * math.sin(a1)), sweep


def draw(sketch, entities):
    """Draw DXF entities into a sketch, joining shared endpoints."""
    curves = sketch.sketchCurves
    known = []  # (x, y, SketchPoint) in mm

    def find(x, y):
        for kx, ky, point in known:
            if abs(kx - x) < JOIN_TOLERANCE and abs(ky - y) < JOIN_TOLERANCE:
                return point
        return None

    def point(x, y):
        """An existing sketch point at (x, y), or a new position to create one."""
        return find(x, y) or adsk.core.Point3D.create(x / 10, y / 10, 0)

    def connect(x, y, sketch_point, reused):
        """Record a curve endpoint; tie it to an earlier point there if it wasn't reused."""
        if reused:
            return
        existing = find(x, y)
        if existing is None:
            known.append((x, y, sketch_point))
        else:
            sketch.geometricConstraints.addCoincident(sketch_point, existing)

    sketch.isComputeDeferred = True
    for e in entities:
        if e['type'] == 'CIRCLE':
            curves.sketchCircles.addByCenterRadius(point(e['10'], e['20']), e['40'] / 10)
        elif e['type'] == 'LINE':
            (x0, y0), (x1, y1) = (e['10'], e['20']), (e['11'], e['21'])
            reused0, reused1 = find(x0, y0) is not None, find(x1, y1) is not None
            line = curves.sketchLines.addByTwoPoints(point(x0, y0), point(x1, y1))
            connect(x0, y0, line.startSketchPoint, reused0)
            connect(x1, y1, line.endSketchPoint, reused1)
        else:
            (x0, y0), (x1, y1), sweep = arc_points(e)
            reused0 = find(x0, y0) is not None
            arc = curves.sketchArcs.addByCenterStartSweep(point(e['10'], e['20']), point(x0, y0), sweep)
            connect(x0, y0, arc.startSketchPoint, reused0)
            connect(x1, y1, arc.endSketchPoint, False)
    sketch.isComputeDeferred = False


def profiles(sketch, loops=None):
    """Sketch profiles, optionally only those with a given number of loops (2 = rings)."""
    result = adsk.core.ObjectCollection.create()
    for profile in sketch.profiles:
        if loops is None or profile.profileLoops.count == loops:
            result.add(profile)
    if result.count == 0:
        raise RuntimeError('No usable profiles in sketch "{}"'.format(sketch.name))
    return result


def extrude(component, name, profs, height, operation, body=None, start=None):
    extrudes = component.features.extrudeFeatures
    feature_input = extrudes.createInput(profs, operation)
    if start:
        feature_input.startExtent = adsk.fusion.OffsetStartDefinition.create(
            adsk.core.ValueInput.createByString(start))
    feature_input.setDistanceExtent(False, adsk.core.ValueInput.createByString(height))
    if body:
        feature_input.participantBodies = [body]
    feature = extrudes.add(feature_input)
    feature.name = name
    return feature


def outlines_folder(ui):
    folder = DEFAULT_OUTLINES
    while not all(os.path.exists(os.path.join(folder, n + '.dxf')) for n in REQUIRED):
        dialog = ui.createFolderDialog()
        dialog.title = 'Select ergogen output/outlines (run `npm run build` first)'
        if dialog.showDialog() != adsk.core.DialogResults.DialogOK:
            return None
        folder = dialog.folder
    return folder


def run(context):
    ui = None
    try:
        app = adsk.core.Application.get()
        ui = app.userInterface

        folder = outlines_folder(ui)
        if folder is None:
            return
        dxf = {n: read_dxf(os.path.join(folder, n + '.dxf'))
               for n in REQUIRED + OPTIONAL if os.path.exists(os.path.join(folder, n + '.dxf'))}

        app.documents.add(adsk.core.DocumentTypes.FusionDesignDocumentType)
        design = adsk.fusion.Design.cast(app.activeProduct)
        design.designType = adsk.fusion.DesignTypes.ParametricDesignType
        design.fusionUnitsManager.distanceDisplayUnits = adsk.fusion.DistanceUnits.MillimeterDistanceUnits
        root = design.rootComponent

        for name, expression, comment in PARAMETERS:
            design.userParameters.add(name, adsk.core.ValueInput.createByString(expression), 'mm', comment)

        def sketch(name, outline, plane=None):
            s = root.sketches.add(plane or root.xYConstructionPlane)
            s.name = name
            draw(s, dxf[outline])
            return s

        NEW = adsk.fusion.FeatureOperations.NewBodyFeatureOperation
        JOIN = adsk.fusion.FeatureOperations.JoinFeatureOperation
        CUT = adsk.fusion.FeatureOperations.CutFeatureOperation

        floor = extrude(root, 'Floor', profiles(sketch('Floor', '_board_case_clearance')),
                        'floor_thickness', NEW)
        body = floor.bodies.item(0)
        body.name = 'Case left'
        extrude(root, 'Wall', profiles(sketch('Wall', 'wall'), loops=2), 'wall_height', JOIN, body)
        extrude(root, 'Slider cutout', profiles(sketch('Slider cutout', '_slider_hole')),
                'slider_cut_height', CUT, body, start='slider_cut_bottom')
        extrude(root, 'Standoffs', profiles(sketch('Standoffs', 'inserts'), loops=2),
                'standoff_height', JOIN, body)
        extrude(root, 'PCB supports', profiles(sketch('PCB supports', '_board_supports')),
                'support_height', JOIN, body)

        # Reference sketches at the height the PCB sits on the standoffs.
        plane_input = root.constructionPlanes.createInput()
        plane_input.setByOffset(root.xYConstructionPlane, adsk.core.ValueInput.createByString('standoff_height'))
        pcb_plane = root.constructionPlanes.add(plane_input)
        pcb_plane.name = 'PCB bottom'
        pcb_plane.isLightBulbOn = False
        if 'board' in dxf:
            sketch('PCB outline', 'board', pcb_plane)
        if 'keycaps' in dxf:
            sketch('Keycaps', 'keycaps', pcb_plane).isVisible = False

        # Mirrored right half, placed half_gap to the right of the left half.
        right_edge_mm = body.boundingBox.maxPoint.x * 10
        plane_input = root.constructionPlanes.createInput()
        plane_input.setByOffset(root.yZConstructionPlane,
                                adsk.core.ValueInput.createByString('{:.4f} mm + half_gap / 2'.format(right_edge_mm)))
        mirror_plane = root.constructionPlanes.add(plane_input)
        mirror_plane.name = 'Mirror'
        mirror_plane.isLightBulbOn = False
        bodies = adsk.core.ObjectCollection.create()
        bodies.add(body)
        mirror = root.features.mirrorFeatures.add(root.features.mirrorFeatures.createInput(bodies, mirror_plane))
        mirror.name = 'Right half'
        mirror.bodies.item(0).name = 'Case right'

        app.activeViewport.fit()
        ui.messageBox('Janus case built from:\n{}\n\nHeights are under Modify > Change Parameters.'.format(folder))
    except Exception:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))
