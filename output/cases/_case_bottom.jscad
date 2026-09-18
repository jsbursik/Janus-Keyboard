function _board_case_clearance_extrude_1_outline_fn(){
    return new CSG.Path2D([[34.6,-159.1],[34.6,-64.1]]).appendArc([40.9,-57.8],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3,-57.8]).appendArc([78.4269848,-57.8012799],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([82.6303949,-57.8860224]).appendArc([82.7232769,-57.8885803],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([120.1004938,-59.1938214]).appendArc([120.2273566,-59.1995322],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([124.425249,-59.43092]).appendArc([124.5179852,-59.4367179],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([143.6709707,-60.7760252]).appendPoint([186.0676871,-63.7406924]).appendArc([191.9128748,-70.4648116],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([186.7384016,-144.4632261]).appendPoint([192.1490437,-156.1425557]).appendPoint([205.7820431,-165.33813]).appendArc([207.4820645,-174.083982],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([192.2160983,-196.7167077]).appendArc([183.401716,-198.3698448],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([167.7008744,-187.474763]).appendPoint([150.7980985,-179.2614934]).appendPoint([134.3354952,-173.9124693]).appendPoint([115.5165404,-170.6785379]).appendPoint([40.4567468,-165.3843875]).appendArc([34.6,-159.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function _case_bottom_case_fn() {
                    

                // creating part 0 of case _case_bottom
                let _case_bottom__part_0 = _board_case_clearance_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _case_bottom__part_0_bounds = _case_bottom__part_0.getBounds();
                let _case_bottom__part_0_x = _case_bottom__part_0_bounds[0].x + (_case_bottom__part_0_bounds[1].x - _case_bottom__part_0_bounds[0].x) / 2
                let _case_bottom__part_0_y = _case_bottom__part_0_bounds[0].y + (_case_bottom__part_0_bounds[1].y - _case_bottom__part_0_bounds[0].y) / 2
                _case_bottom__part_0 = translate([-_case_bottom__part_0_x, -_case_bottom__part_0_y, 0], _case_bottom__part_0);
                _case_bottom__part_0 = rotate([0,0,0], _case_bottom__part_0);
                _case_bottom__part_0 = translate([_case_bottom__part_0_x, _case_bottom__part_0_y, 0], _case_bottom__part_0);

                _case_bottom__part_0 = translate([0,0,0], _case_bottom__part_0);
                let result = _case_bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return _case_bottom_case_fn();
            }

        