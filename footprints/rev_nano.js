// nice!nano v2
// This footprint is for reversible boards only!!
// The way it works involves soldering jumpers to define what side is active
//
// You must route the jumpers yourself since footprints can't have traces,
// technically I could do custom smd paths to make it work, but the DRC
// wouldn't like any of that and cause errors.

module.exports = {
  params: {
    designator: "MCU",
    orientation: "up",
    RAW: { type: "net", value: "RAW" },
    GND: { type: "net", value: "GND" },
    RST: { type: "net", value: "RST" },
    VCC: { type: "net", value: "VCC" },
    P21: { type: "net", value: "P21" },
    P20: { type: "net", value: "P20" },
    P19: { type: "net", value: "P19" },
    P18: { type: "net", value: "P18" },
    P15: { type: "net", value: "P15" },
    P14: { type: "net", value: "P14" },
    P16: { type: "net", value: "P16" },
    P10: { type: "net", value: "P10" },
    P1: { type: "net", value: "P1" },
    P0: { type: "net", value: "P0" },
    P2: { type: "net", value: "P2" },
    P3: { type: "net", value: "P3" },
    P4: { type: "net", value: "P4" },
    P5: { type: "net", value: "P5" },
    P6: { type: "net", value: "P6" },
    P7: { type: "net", value: "P7" },
    P8: { type: "net", value: "P8" },
    P9: { type: "net", value: "P9" },
  },
  body: (p) => {
    return `
    (module nice!nano_v2 (layer F.Cu)
    ${p.at /* parametric position */}

    ${"" /* Footprint reference */}
    (fp_text reference "${p.ref}" (at 0 -2.54) (layer "F.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.1))))
    (fp_text value "nice!nano_v2" (at 0 0) (layer "F.SilkS") hide (effects (font (size 1 1) (thickness 0.15))))

    ${"" /* nice!nano silk text */}
    (fp_text user "nice!nano" (at 0 13.335 ${p.rot}) (layer "F.SilkS") (effects (font (size 1 1)	(thickness 0.25) (bold yes)) (justify bottom)))
    (fp_text user "nice!nano" (at 0 13.335 ${p.rot}) (layer "B.SilkS") (effects (font (size 1 1)	(thickness 0.25) (bold yes)) (justify bottom mirror)))
    
    ${"" /* Board footprint bounds */}
    (fp_rect (start -8.89 15.245) (end 8.89 -15.245) (stroke (width 0.2) (type default)) (fill none) (layer "F.SilkS"))
    (fp_rect (start -8.89 15.245) (end 8.89 -15.245) (stroke (width 0.2) (type default)) (fill none) (layer "B.SilkS"))

    ${"" /* USB C Port (Note: Re-measure this, seems wrong) */}
    (fp_rect (start -3.81 -19.304) (end 3.81 -14.224) (stroke (width 0.2) (type default)) (fill none) (layer "Dwgs.User"))

    ${"" /* RAW/B+ square pads */}
    (fp_rect (start 6.62 -14.97) (end 8.62 -12.97) (stroke (width 0) (type solid)) (fill solid) (layer "F.Cu"))
    (fp_rect (start -8.62 -14.97) (end -6.62 -12.97) (stroke (width 0) (type solid)) (fill solid) (layer "B.Cu"))
    (fp_rect (start 6.62 -14.97) (end 8.62 -12.97) (stroke (width 0) (type solid)) (fill solid) (layer "F.Mask"))
    (fp_rect (start -8.62 -14.97) (end -6.62 -12.97) (stroke (width 0) (type solid)) (fill solid) (layer "B.Mask"))

    ${"" /* Left-hand thru-holes for nano mount */}
    (pad "" thru_hole circle (at -7.62 -13.97)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 -11.43)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 -8.89)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 -6.35)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 -3.81)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 -1.27)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 1.27)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 3.81)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 6.35)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 8.89)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 11.43)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at -7.62 13.97)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))

    ${"" /* Right-hand thru-holes for nano mount */}
    (pad "" thru_hole circle (at 7.62 -13.97)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 -11.43)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 -8.89)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 -6.35)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 -3.81)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 -1.27)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 1.27)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 3.81)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 6.35)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 8.89)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 11.43)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))
    (pad "" thru_hole circle (at 7.62 13.97)(size 1.7526 1.7526)(drill 1.0922)(layers "*.Cu" "*.Mask"))

    ${"" /* Vias with nets */}
    (pad "P1" thru_hole circle (at -2.62 -13.97)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P1})
    (pad "P0" thru_hole circle (at -2.62 -11.43)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P0})
    (pad "GND" thru_hole circle (at -2.62 -8.89)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.GND})
    (pad "GND" thru_hole circle (at -2.62 -6.35)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.GND})
    (pad "P2" thru_hole circle (at -2.62 -3.81)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P2})
    (pad "P3" thru_hole circle (at -2.62 -1.27)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P3})
    (pad "P4" thru_hole circle (at -2.62 1.27)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P4})
    (pad "P5" thru_hole circle (at -2.62 3.81)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P5})
    (pad "P6" thru_hole circle (at -2.62 6.35)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P6})
    (pad "P7" thru_hole circle (at -2.62 8.89)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P7})
    (pad "P8" thru_hole circle (at -2.62 11.43)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P8})
    (pad "P9" thru_hole circle (at -2.62 13.97)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P9})

    (pad "B+" thru_hole circle (at 2.62 -13.97)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.RAW})
    (pad "GND" thru_hole circle (at 2.62 -11.43)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.GND})
    (pad "RST" thru_hole circle (at 2.62 -8.89)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.RST})
    (pad "VCC" thru_hole circle (at 2.62 -6.35)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.VCC})
    (pad "P21" thru_hole circle (at 2.62 -3.81)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P21})
    (pad "P20" thru_hole circle (at 2.62 -1.27)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P20})
    (pad "P19" thru_hole circle (at 2.62 1.27)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P19})    
    (pad "P18" thru_hole circle (at 2.62 3.81)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P18})
    (pad "P15" thru_hole circle (at 2.62 6.35)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P15})
    (pad "P14" thru_hole circle (at 2.62 8.89)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P14})
    (pad "P16" thru_hole circle (at 2.62 11.43)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P16})
    (pad "P10" thru_hole circle (at 2.62 13.97)(size 0.8 0.8)(drill 0.4)(layers "*.Cu" "*.Mask") ${p.P10})

    ${"" /* Left-hand jumpers (F & B) */}
    (pad "" smd custom (at -5.895 -13.97 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom (at -5.895 -13.97 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom (at -5.895 -11.43 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom (at -5.895 -11.43 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom (at -5.895 -8.89 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom (at -5.895 -8.89 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom (at -5.895 -6.35 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 -6.35 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 -3.81 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 -3.81 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 -1.27 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 -1.27 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 1.27 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 1.27 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 3.81 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 3.81 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 6.35 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 6.35 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 8.89 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 8.89 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 11.43 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 11.43 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 13.97 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -5.895 13.97 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
    (at -4.445 -13.97 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P1})
    (pad "" smd custom
    (at -4.445 -13.97 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.RAW})
    (pad "" smd custom
    (at -4.445 -11.43 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P0})
    (pad "" smd custom
    (at -4.445 -11.43 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.GND})
    (pad "" smd custom
    (at -4.445 -8.89 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.GND})
    (pad "" smd custom
    (at -4.445 -8.89 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.RST})
    (pad "" smd custom
    (at -4.445 -6.35 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.GND})
    (pad "" smd custom
    (at -4.445 -6.35 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.VCC})
    (pad "" smd custom
    (at -4.445 -3.81 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P2})
    (pad "" smd custom
    (at -4.445 -3.81 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P21})
    (pad "" smd custom
    (at -4.445 -1.27 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P3})
    (pad "" smd custom
    (at -4.445 -1.27 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P20})
    (pad "" smd custom
    (at -4.445 1.27 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P4})
    (pad "" smd custom
    (at -4.445 1.27 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P19})
    (pad "" smd custom
    (at -4.445 3.81 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P5})
    (pad "" smd custom
    (at -4.445 3.81 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P18})
    (pad "" smd custom
    (at -4.445 6.35 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P6})
    (pad "" smd custom
    (at -4.445 6.35 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P15})
    (pad "" smd custom
    (at -4.445 8.89 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P7})
    (pad "" smd custom
    (at -4.445 8.89 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P14})
    (pad "" smd custom
    (at -4.445 11.43 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P8})
    (pad "" smd custom
    (at -4.445 11.43 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P16})
    (pad "" smd custom
    (at -4.445 13.97 ${p.rot})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P9})
    (pad "" smd custom
    (at -4.445 13.97 ${p.rot + 180})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
      (gr_poly (pts
          (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P10})

    ${"" /* Right-hand jumpers (F & B) */}
    (pad "" smd custom
      (at 4.445 -13.97 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.RAW})
    (pad "" smd custom
      (at 4.445 -13.97 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P1})
    (pad "" smd custom
      (at 4.445 -11.43 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.GND})
    (pad "" smd custom
      (at 4.445 -11.43 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P0})
    (pad "" smd custom
      (at 4.445 -8.89 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.RST})
    (pad "" smd custom
      (at 4.445 -8.89 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.GND})
    (pad "" smd custom
      (at 4.445 -6.35 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.VCC})
    (pad "" smd custom
      (at 4.445 -6.35 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.GND})
    (pad "" smd custom
      (at 4.445 -3.81 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P21})
    (pad "" smd custom
      (at 4.445 -3.81 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P2})
    (pad "" smd custom
      (at 4.445 -1.27 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P20})
    (pad "" smd custom
      (at 4.445 -1.27 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P3})
    (pad "" smd custom
      (at 4.445 1.27 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P19})
    (pad "" smd custom
      (at 4.445 1.27 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P4})
    (pad "" smd custom
      (at 4.445 3.81 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P18})
    (pad "" smd custom
      (at 4.445 3.81 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P5})
    (pad "" smd custom
      (at 4.445 6.35 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P15})
    (pad "" smd custom
      (at 4.445 6.35 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P6})
    (pad "" smd custom
      (at 4.445 8.89 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P14})
    (pad "" smd custom
      (at 4.445 8.89 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P7})
    (pad "" smd custom
      (at 4.445 11.43 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P16})
    (pad "" smd custom
      (at 4.445 11.43 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P8})
    (pad "" smd custom
      (at 4.445 13.97 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 0.5 0.75) (xy -0.65 0.75) (xy -0.15 0) (xy -0.65 -0.75) (xy 0.5 -0.75))
      (width 0))) ${p.P10})
    (pad "" smd custom
      (at 4.445 13.97 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -0.5 0.75) (xy 0.65 0.75) (xy 0.15 0) (xy 0.65 -0.75) (xy -0.5 -0.75))
      (width 0))) ${p.P9})
    (pad "" smd custom
      (at 5.895 -13.97 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -13.97 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -11.43 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -11.43 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -8.89 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -8.89 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -6.35 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -6.35 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -3.81 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -3.81 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -1.27 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 -1.27 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 1.27 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 1.27 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 3.81 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 3.81 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 6.35 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 6.35 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 8.89 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 8.89 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 11.43 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 11.43 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 13.97 ${p.rot + 180})(size 0.3 0.3)(layers "F.Cu" "F.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy 1 0) (xy 0.5 0.75) (xy -0.5 0.75) (xy -0.5 -0.75) (xy 0.5 -0.75))
      (width 0))))
    (pad "" smd custom
      (at 5.895 13.97 ${p.rot})(size 0.3 0.3)(layers "B.Cu" "B.Mask")
      (zone_connect 0)
      (options (clearance outline)(anchor rect))
      (primitives
        (gr_poly (pts
            (xy -1 0) (xy -0.5 0.75) (xy 0.5 0.75) (xy 0.5 -0.75) (xy -0.5 -0.75))
      (width 0))))

      )
    `;
  },
};
