function inserts_extrude_4_outline_fn(){
    return CAG.circle({"center":[39.9,-160.1],"radius":4.05})
.subtract(
    CAG.circle({"center":[39.9,-160.1],"radius":1.65})
).union(
    CAG.circle({"center":[115.1150838,-165.2274393],"radius":4.05})
.subtract(
    CAG.circle({"center":[115.1150838,-165.2274393],"radius":1.65})
)).union(
    CAG.circle({"center":[187.2630062,-194.5820229],"radius":4.05})
.subtract(
    CAG.circle({"center":[187.2630062,-194.5820229],"radius":1.65})
)).union(
    CAG.circle({"center":[184.8402055,-152.9724317],"radius":4.05})
.subtract(
    CAG.circle({"center":[184.8402055,-152.9724317],"radius":1.65})
)).union(
    CAG.circle({"center":[186.6955418,-69.0975383],"radius":4.05})
.subtract(
    CAG.circle({"center":[186.6955418,-69.0975383],"radius":1.65})
)).union(
    CAG.circle({"center":[39.9,-63.1],"radius":4.05})
.subtract(
    CAG.circle({"center":[39.9,-63.1],"radius":1.65})
)).extrude({ offset: [0, 0, 4] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = inserts_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return _standoffs_case_fn();
            }

        