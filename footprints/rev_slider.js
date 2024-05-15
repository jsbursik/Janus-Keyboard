// This is a modified version of the slider footprint that
// comes with Ergogen. It simply places the fp on both sides
// of the pcb. The only reason to do this is to help cutdown on
// config.yaml length.

module.exports = {
  params: {
    designator: "T", // for Toggle
    from: undefined,
    to: undefined,
  },
  body: (p) => {
    return `
      (module E73:SPDT_C128955 (layer F.Cu) (tstamp 5BF2CC3C)

          ${p.at /* parametric position */}

          ${"" /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
          
          ${"" /* Outline front */}
          (fp_line (start 1.95 -1.35) (end -1.95 -1.35) (layer F.SilkS) (width 0.15))
          (fp_line (start 0 -1.35) (end -3.3 -1.35) (layer F.SilkS) (width 0.15))
          (fp_line (start -3.3 -1.35) (end -3.3 1.5) (layer F.SilkS) (width 0.15))
          (fp_line (start -3.3 1.5) (end 3.3 1.5) (layer F.SilkS) (width 0.15))
          (fp_line (start 3.3 1.5) (end 3.3 -1.35) (layer F.SilkS) (width 0.15))
          (fp_line (start 0 -1.35) (end 3.3 -1.35) (layer F.SilkS) (width 0.15))

          ${"" /* Outline back */}
          (fp_line (start 1.95 -1.35) (end -1.95 -1.35) (layer B.SilkS) (width 0.15))
          (fp_line (start 0 -1.35) (end -3.3 -1.35) (layer B.SilkS) (width 0.15))
          (fp_line (start -3.3 -1.35) (end -3.3 1.5) (layer B.SilkS) (width 0.15))
          (fp_line (start -3.3 1.5) (end 3.3 1.5) (layer B.SilkS) (width 0.15))
          (fp_line (start 3.3 1.5) (end 3.3 -1.35) (layer B.SilkS) (width 0.15))
          (fp_line (start 0 -1.35) (end 3.3 -1.35) (layer B.SilkS) (width 0.15))
          
          ${"" /* extra indicator for the slider */}
          (fp_line (start -1.95 -3.85) (end 1.95 -3.85) (layer Dwgs.User) (width 0.15))
          (fp_line (start 1.95 -3.85) (end 1.95 -1.35) (layer Dwgs.User) (width 0.15))
          (fp_line (start -1.95 -1.35) (end -1.95 -3.85) (layer Dwgs.User) (width 0.15))
          
          ${"" /* bottom cutouts */}
          (pad "" np_thru_hole circle (at 1.5 0) (size 1 1) (drill 0.9) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at -1.5 0) (size 1 1) (drill 0.9) (layers *.Cu *.Mask))

          ${"" /* Front pins */}
          (pad 1 smd rect (at 2.25 2.075 ${p.r}) (size 0.9 1.25) (layers F.Cu F.Paste F.Mask) ${p.from})
          (pad 2 smd rect (at -0.75 2.075 ${p.r}) (size 0.9 1.25) (layers F.Cu F.Paste F.Mask) ${p.to})
          (pad 3 smd rect (at -2.25 2.075 ${p.r}) (size 0.9 1.25) (layers F.Cu F.Paste F.Mask))

          ${"" /* Back pins */}
          (pad 1 smd rect (at -2.25 2.075 ${p.r}) (size 0.9 1.25) (layers B.Cu B.Paste B.Mask) ${p.from})
          (pad 2 smd rect (at 0.75 2.075 ${p.r}) (size 0.9 1.25) (layers B.Cu B.Paste B.Mask) ${p.to})
          (pad 3 smd rect (at 2.25 2.075 ${p.r}) (size 0.9 1.25) (layers B.Cu B.Paste B.Mask))
          
          ${"" /* Front side mounts */}
          (pad "" smd rect (at 3.7 -1.1 ${p.r}) (size 0.9 0.9) (layers F.Cu F.Paste F.Mask))
          (pad "" smd rect (at 3.7 1.1 ${p.r}) (size 0.9 0.9) (layers F.Cu F.Paste F.Mask))
          (pad "" smd rect (at -3.7 1.1 ${p.r}) (size 0.9 0.9) (layers F.Cu F.Paste F.Mask))
          (pad "" smd rect (at -3.7 -1.1 ${p.r}) (size 0.9 0.9) (layers F.Cu F.Paste F.Mask))

          ${"" /* Back side mounts */}
          (pad "" smd rect (at 3.7 -1.1 ${p.r}) (size 0.9 0.9) (layers B.Cu B.Paste B.Mask))
          (pad "" smd rect (at 3.7 1.1 ${p.r}) (size 0.9 0.9) (layers B.Cu B.Paste B.Mask))
          (pad "" smd rect (at -3.7 1.1 ${p.r}) (size 0.9 0.9) (layers B.Cu B.Paste B.Mask))
          (pad "" smd rect (at -3.7 -1.1 ${p.r}) (size 0.9 0.9) (layers B.Cu B.Paste B.Mask))
      )
      `;
  },
};
