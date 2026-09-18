# Fusion case script

`JanusCase` rebuilds the ergogen case as a native Fusion design instead of an STL:
real sketches (lines, arcs, circles) and extrudes, with every height as a user parameter.

## Use

1. Run `npm run build` so `output/outlines` contains the ergogen outline DXFs (including the `_`-prefixed debug ones).
2. In Fusion: **Utilities → Add-Ins → Scripts and Add-Ins**, click **+** next to *My Scripts*, choose *Script or add-in from device*, and pick the `fusion/JanusCase` folder.
3. Select **JanusCase** and click **Run**. It opens a new design with:
   - **Case left**: floor + wall − slider cutout + insert standoffs + PCB supports, as in the `case` recipe in `config.yaml`
   - **Case right**: a mirror of the left half
   - **PCB outline** sketch at the height the PCB sits, and a hidden **Keycaps** sketch
4. Change heights under **Modify → Change Parameters** (`floor_thickness`, `wall_height`, `standoff_height`, ...).

Outline shapes (wall thickness, clearance, insert positions) still come from `config.yaml`.
Change them there, rebuild, and run the script again.

The script expects Fusion's default **Z up** orientation. With Y up, the case is built standing on its edge.
