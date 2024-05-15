module.exports = {
  params: {
    designator: "OLED",
    side: "F",
    reverse: false,
    MOSI: { type: "net", value: "MOSI" },
    SCK: { type: "net", value: "SCK" },
    VCC: { type: "net", value: "VCC" },
    GND: { type: "net", value: "GND" },
    CS: { type: "net", value: "CS" },
  },
  body: (p) => {
    let output = `
    (module lib:niceview (layer F.Cu)
    ${p.at /* parametric position */}
  
    ${"" /* footprint reference */}        
    (fp_text reference "${p.ref}" (at 0 -17.27 ${p.rot}) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
    (fp_text value "nice!view" (at 0 14.4 ${p.rot}) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
    
    ${"" /* display footprint */}
    (fp_rect (start -6.35 15.18) (end 6.35 17.78) (layer "F.SilkS") (width 0.12) (fill none))
    (fp_rect (start 7 17.78) (end -6.68 -18.22) (layer "Dwgs.User") (width 0.12) (fill none))
    (fp_rect (start 7 17.78) (end -6.68 -18.22) (layer "F.Fab") (width 0.12) (fill none))
    `;

    if (p.reverse) {
      output += `
      ${"" /* Display pins w/o nets */}
      (pad 1 thru_hole circle (at -5.08 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask))
      (pad 2 thru_hole circle (at -2.54 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask))
      (pad 3 thru_hole circle (at 0 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.VCC.str})
      (pad 4 thru_hole circle (at 2.54 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask))
      (pad 5 thru_hole circle (at 5.08 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask))
      

      ${"" /* Start the jumper pads */}
      (pad "" smd custom (at -5.08 18.6352 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
      )
      (pad "" smd custom (at -5.08 18.6352 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
      )
      
      (pad "" smd custom (at -5.08 19.812 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.MOSI.str}
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
      )
      (pad "" smd custom (at -5.08 19.812 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.CS.str}
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
      )
      
      (pad "" smd custom (at -2.54 18.6352 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
      )
      (pad "" smd custom (at -2.54 18.6352 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
      )
      
      (pad "" smd custom (at -2.54 19.812 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.SCK.str}
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
      )
      (pad "" smd custom (at -2.54 19.812 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.GND.str}
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
      )
      
      
      (pad "" smd custom (at 2.54 18.6352 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
      )
      (pad "" smd custom (at 2.54 18.6352 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
      )
      
      (pad "" smd custom (at 2.54 19.812 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.GND.str}
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
      )
      (pad "" smd custom (at 2.54 19.812 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.SCK.str}
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
      )
      
      
      (pad "" smd custom (at 5.08 18.6352 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
      )
      (pad "" smd custom (at 5.08 18.6352 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
      )
      
      (pad "" smd custom (at 5.08 19.812 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.CS.str}
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
      )
      (pad "" smd custom (at 5.08 19.812 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.MOSI.str}
        (clearance 0) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
      )

      (pad "" thru_hole circle (at -5.08 21.082) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") ${p.MOSI.str})
      (pad "" thru_hole circle (at -2.54 21.082) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") ${p.SCK.str})
      (pad "" thru_hole circle (at 2.54 21.082) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") ${p.GND.str})
      (pad "" thru_hole circle (at 5.08 21.082) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") ${p.CS.str})

      `;
    } else {
      output += `
      ${"" /* Normal pins */}
      (pad 1 thru_hole circle (at -5.08 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.MOSI.str})
      (pad 2 thru_hole circle (at -2.54 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.SCK.str})
      (pad 3 thru_hole circle (at 0 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.VCC.str})
      (pad 4 thru_hole circle (at 2.54 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.GND.str})
      (pad 5 thru_hole circle (at 5.08 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.CS.str})
      `;
    }
    output += `)`;
    return output;
  },
};
