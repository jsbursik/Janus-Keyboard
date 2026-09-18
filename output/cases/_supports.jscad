function _board_supports_extrude_4_outline_fn(){
    return CAG.circle({"center":[147.6776592,-105.2638879],"radius":2})
.union(
    CAG.circle({"center":[107.468188,-102.8795725],"radius":2})
).union(
    CAG.circle({"center":[67.2,-101.9],"radius":2})
).extrude({ offset: [0, 0, 4] });
}




                function _supports_case_fn() {
                    

                // creating part 0 of case _supports
                let _supports__part_0 = _board_supports_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _supports__part_0_bounds = _supports__part_0.getBounds();
                let _supports__part_0_x = _supports__part_0_bounds[0].x + (_supports__part_0_bounds[1].x - _supports__part_0_bounds[0].x) / 2
                let _supports__part_0_y = _supports__part_0_bounds[0].y + (_supports__part_0_bounds[1].y - _supports__part_0_bounds[0].y) / 2
                _supports__part_0 = translate([-_supports__part_0_x, -_supports__part_0_y, 0], _supports__part_0);
                _supports__part_0 = rotate([0,0,0], _supports__part_0);
                _supports__part_0 = translate([_supports__part_0_x, _supports__part_0_y, 0], _supports__part_0);

                _supports__part_0 = translate([0,0,0], _supports__part_0);
                let result = _supports__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return _supports_case_fn();
            }

        