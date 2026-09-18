function _slider_hole_extrude_2_6_outline_fn(){
    return new CSG.Path2D([[188.3204164,-121.8393603],[190.3155445,-121.9788733]]).appendPoint([190.8735962,-113.9983609]).appendPoint([188.8784681,-113.8588479]).appendPoint([188.3204164,-121.8393603]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.6] });
}




                function _slider_cutout_case_fn() {
                    

                // creating part 0 of case _slider_cutout
                let _slider_cutout__part_0 = _slider_hole_extrude_2_6_outline_fn();

                // make sure that rotations are relative
                let _slider_cutout__part_0_bounds = _slider_cutout__part_0.getBounds();
                let _slider_cutout__part_0_x = _slider_cutout__part_0_bounds[0].x + (_slider_cutout__part_0_bounds[1].x - _slider_cutout__part_0_bounds[0].x) / 2
                let _slider_cutout__part_0_y = _slider_cutout__part_0_bounds[0].y + (_slider_cutout__part_0_bounds[1].y - _slider_cutout__part_0_bounds[0].y) / 2
                _slider_cutout__part_0 = translate([-_slider_cutout__part_0_x, -_slider_cutout__part_0_y, 0], _slider_cutout__part_0);
                _slider_cutout__part_0 = rotate([0,0,0], _slider_cutout__part_0);
                _slider_cutout__part_0 = translate([_slider_cutout__part_0_x, _slider_cutout__part_0_y, 0], _slider_cutout__part_0);

                _slider_cutout__part_0 = translate([0,0,3], _slider_cutout__part_0);
                let result = _slider_cutout__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return _slider_cutout_case_fn();
            }

        