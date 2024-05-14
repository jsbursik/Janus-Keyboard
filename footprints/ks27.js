module.exports = {
  params: {
    designator: "S",
    side: "F",
    hotswap: false,
    reverse: false,
    keycaps: false,
    from: undefined,
    to: undefined,
  },
  body: (p) => {
    const standard = `
      (module gateron-ks27 (layer "F.Cu")
      ${p.at /* parametric position */}
      
      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0.1 -8.5 ${p.rot}) (layer "F.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
    
      (fp_text value "ks27" (at 0 8.5 ${p.rot}) (layer "F.SilkS") hide
        (effects (font (size 1 1) (thickness 0.15)))
      )
    
      ${"" /* LED Cutout */}
      (fp_line (start 1.8 -6.3) (end -3.2 -6.3) (layer Dwgs.User) (width 0.12))
      (fp_line (start -3.2 -6.3) (end -3.2 -3.1) (layer Dwgs.User) (width 0.12))
      (fp_line (start 1.8 -6.3) (end 1.8 -3.1) (layer Dwgs.User) (width 0.12))
      (fp_line (start 1.8 -3.1) (end -3.2 -3.1) (layer Dwgs.User) (width 0.12))
    
      ${"" /* corner marks */}
      (fp_line (start -7 -7) (end -7 7) (layer Dwgs.User) (width 0.12))
      (fp_line (start 7 7) (end 7 -7) (layer Dwgs.User) (width 0.12))
      (fp_line (start 7 -7) (end -7 -7) (layer Dwgs.User) (width 0.12))
      (fp_line (start -7 7) (end 7 7) (layer Dwgs.User) (width 0.12))
      (fp_line (start 7.5 7.5) (end 7.5 -7.5) (layer Dwgs.User) (width 0.1))
      (fp_line (start -7.5 -7.5) (end -7.5 7.5) (layer Dwgs.User) (width 0.1))
      (fp_line (start -7.5 7.5) (end 7.5 7.5) (layer Dwgs.User) (width 0.1))
      (fp_line (start 7.5 -7.5) (end -7.5 -7.5) (layer Dwgs.User) (width 0.1))
    
      ${"" /* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 5 5) (drill 5) (layers *.Cu *.Mask))
      `;
    const keycap = `
      ${"" /* keycap marks */}
      (fp_line (start -9.25 -9.25) (end 9.25 -9.25) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.25 -9.25) (end 9.25 9.25) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.25 9.25) (end -9.25 9.25) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9.25 9.25) (end -9.25 -9.25) (layer Dwgs.User) (width 0.15))
      `;
    function pins(def_neg, def_pos, def_side, def_rev) {
      if (p.hotswap && !def_rev) {
        return `
          ${"" /* holes */}
          (pad "" np_thru_hole circle (at ${def_neg}4.4 4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at ${def_pos}2.6 5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          
          ${"" /* net pads */}
          (pad "1" smd rect (at ${def_neg}7.675 4.7 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.from.str})
          (pad "2" smd rect (at ${def_pos}5.875 5.75 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to.str})
        `;
      } else if (p.hotswap && def_rev) {
        return `
          ${"" /* via to help with routing */}
          (pad "1" thru_hole circle (at -7.675 8.382 180) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.from.str})

          ${"" /* holes */}
          (pad "" np_thru_hole circle (at -4.4 4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 2.6 5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at -4.4 -4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 2.6 -5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          
          ${"" /* net pads */}
          (pad "1" smd rect (at -7.675 4.7 ${p.rot}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.from.str})
          (pad "2" smd rect (at 5.875 5.75 ${p.rot}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.to.str})
          (pad "1" smd rect (at -7.675 -4.7 ${p.rot}) (size 2.6 2.6) (layers F.Cu F.Paste F.Mask) ${p.from.str})
          (pad "2" smd rect (at 5.875 -5.75 ${p.rot}) (size 2.6 2.6) (layers F.Cu F.Paste F.Mask) ${p.to.str})
        `;
      } else if (!p.hotswap && !def_rev) {
        return `
            ${"" /* pins */}
            (pad 1 thru_hole circle (at ${def_pos}4.4 4.7) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at ${def_neg}2.6 5.75) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to.str})
          `;
      } else {
        return `
            ${"" /* pins */}
            (pad 1 thru_hole circle (at -4.4 4.7) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at 2.6 5.75) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to.str})
            (pad 1 thru_hole circle (at -4.4 -4.7) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at 2.6 -5.75) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to.str})
          `;
      }
    }
    if (p.reverse) {
      return `
        ${standard}
        ${p.keycaps ? keycap : ""}
        ${pins("", "", "", true)})
        `;
    } else {
      return `
        ${standard}
        ${p.keycaps ? keycap : ""}
        ${pins("-", "", "B", false)})
        `;
    }
  },
};
