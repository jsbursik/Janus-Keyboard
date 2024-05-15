// This is a modified version of the button footprint that
// comes with Ergogen. It simply places the fp on both sides
// of the pcb. The only reason to do this is to help cutdown on
// config.yaml length.

module.exports = {
  params: {
    designator: "B", // for Button
    from: undefined,
    to: undefined,
  },
  body: (p) => `
  (module E73:SW_TACT_ALPS_SKQGABE010 (layer F.Cu) (tstamp 5BF2CC94)

      (descr "Low-profile SMD Tactile Switch, https://www.e-switch.com/product-catalog/tact/product-lines/tl3342-series-low-profile-smt-tact-switch")
      (tags "SPST Tactile Switch")

      ${p.at /* parametric position */}

      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
      ${"" /* Front outline */}
      (fp_line (start 2.75 1.25) (end 1.25 2.75) (layer F.SilkS) (width 0.15))
      (fp_line (start 2.75 -1.25) (end 1.25 -2.75) (layer F.SilkS) (width 0.15))
      (fp_line (start 2.75 -1.25) (end 2.75 1.25) (layer F.SilkS) (width 0.15))
      (fp_line (start -1.25 2.75) (end 1.25 2.75) (layer F.SilkS) (width 0.15))
      (fp_line (start -1.25 -2.75) (end 1.25 -2.75) (layer F.SilkS) (width 0.15))
      (fp_line (start -2.75 1.25) (end -1.25 2.75) (layer F.SilkS) (width 0.15))
      (fp_line (start -2.75 -1.25) (end -1.25 -2.75) (layer F.SilkS) (width 0.15))
      (fp_line (start -2.75 -1.25) (end -2.75 1.25) (layer F.SilkS) (width 0.15))

      ${"" /* Back outline */}
      (fp_line (start 2.75 1.25) (end 1.25 2.75) (layer B.SilkS) (width 0.15))
      (fp_line (start 2.75 -1.25) (end 1.25 -2.75) (layer B.SilkS) (width 0.15))
      (fp_line (start 2.75 -1.25) (end 2.75 1.25) (layer B.SilkS) (width 0.15))
      (fp_line (start -1.25 2.75) (end 1.25 2.75) (layer B.SilkS) (width 0.15))
      (fp_line (start -1.25 -2.75) (end 1.25 -2.75) (layer B.SilkS) (width 0.15))
      (fp_line (start -2.75 1.25) (end -1.25 2.75) (layer B.SilkS) (width 0.15))
      (fp_line (start -2.75 -1.25) (end -1.25 -2.75) (layer B.SilkS) (width 0.15))
      (fp_line (start -2.75 -1.25) (end -2.75 1.25) (layer B.SilkS) (width 0.15))
      
      ${"" /* Front pins */}
      (pad 1 smd rect (at -3.1 -1.85 ${p.r}) (size 1.8 1.1) (layers F.Cu F.Paste F.Mask) ${p.from})
      (pad 1 smd rect (at 3.1 -1.85 ${p.r}) (size 1.8 1.1) (layers F.Cu F.Paste F.Mask) ${p.from})
      (pad 2 smd rect (at -3.1 1.85 ${p.r}) (size 1.8 1.1) (layers F.Cu F.Paste F.Mask) ${p.to})
      (pad 2 smd rect (at 3.1 1.85 ${p.r}) (size 1.8 1.1) (layers F.Cu F.Paste F.Mask) ${p.to})

      ${"" /* Back pins */}
      (pad 1 smd rect (at -3.1 -1.85 ${p.r}) (size 1.8 1.1) (layers B.Cu B.Paste B.Mask) ${p.from})
      (pad 1 smd rect (at 3.1 -1.85 ${p.r}) (size 1.8 1.1) (layers B.Cu B.Paste B.Mask) ${p.from})
      (pad 2 smd rect (at -3.1 1.85 ${p.r}) (size 1.8 1.1) (layers B.Cu B.Paste B.Mask) ${p.to})
      (pad 2 smd rect (at 3.1 1.85 ${p.r}) (size 1.8 1.1) (layers B.Cu B.Paste B.Mask) ${p.to})
  )
  `,
};
