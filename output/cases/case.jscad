function _board_case_clearance_extrude_1_outline_fn(){
    return new CSG.Path2D([[34.6,-159.1],[34.6,-64.1]]).appendArc([40.9,-57.8],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3,-57.8]).appendArc([78.4269848,-57.8012799],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([82.6303949,-57.8860224]).appendArc([82.7232769,-57.8885803],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([120.1004938,-59.1938214]).appendArc([120.2273566,-59.1995322],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([124.425249,-59.43092]).appendArc([124.5179852,-59.4367179],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([143.6709707,-60.7760252]).appendPoint([186.0676871,-63.7406924]).appendArc([191.9128748,-70.4648116],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([186.7384016,-144.4632261]).appendPoint([192.1490437,-156.1425557]).appendPoint([205.7820431,-165.33813]).appendArc([207.4820645,-174.083982],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([192.2160983,-196.7167077]).appendArc([183.401716,-198.3698448],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([167.7008744,-187.474763]).appendPoint([150.7980985,-179.2614934]).appendPoint([134.3354952,-173.9124693]).appendPoint([115.5165404,-170.6785379]).appendPoint([40.4567468,-165.3843875]).appendArc([34.6,-159.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function wall_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[32.6,-159.1],[32.6,-64.1]]).appendArc([40.9,-55.8],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([78.3,-55.8]).appendArc([78.4672974,-55.8016862],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([82.6707075,-55.8864287]).appendArc([82.7930759,-55.8897986],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([120.1702928,-57.1950397]).appendArc([120.3374295,-57.2025635],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([124.5353219,-57.4339513]).appendArc([124.6574982,-57.4415898],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([143.810097,-58.7808701]).appendPoint([186.2072001,-61.7455643]).appendArc([193.9080029,-70.6043246],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([188.7694241,-144.0894247]).appendPoint([193.729488,-154.796143]).appendPoint([206.9004289,-163.6800548]).appendArc([209.1401397,-175.2023678],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([193.8741734,-197.8350935]).appendArc([182.2618994,-200.0132614],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([166.6877029,-189.2060609]).appendPoint([150.0484619,-181.1208462]).appendPoint([133.8546286,-175.8591507]).appendPoint([115.276224,-172.6665565]).appendPoint([40.3160315,-167.3794312]).appendArc([32.6,-159.1],{"radius":8.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[34.6,-159.1],[34.6,-64.1]]).appendArc([40.9,-57.8],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3,-57.8]).appendArc([78.4269848,-57.8012799],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([82.6303949,-57.8860224]).appendArc([82.7232769,-57.8885803],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([120.1004938,-59.1938214]).appendArc([120.2273566,-59.1995322],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([124.425249,-59.43092]).appendArc([124.5179852,-59.4367179],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([143.6709707,-60.7760252]).appendPoint([186.0676871,-63.7406924]).appendArc([191.9128748,-70.4648116],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([186.7384016,-144.4632261]).appendPoint([192.1490437,-156.1425557]).appendPoint([205.7820431,-165.33813]).appendArc([207.4820645,-174.083982],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([192.2160983,-196.7167077]).appendArc([183.401716,-198.3698448],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([167.7008744,-187.474763]).appendPoint([150.7980985,-179.2614934]).appendPoint([134.3354952,-173.9124693]).appendPoint([115.5165404,-170.6785379]).appendPoint([40.4567468,-165.3843875]).appendArc([34.6,-159.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5.6] });
}


function _slider_hole_extrude_2_6_outline_fn(){
    return new CSG.Path2D([[188.3204164,-121.8393603],[190.3155445,-121.9788733]]).appendPoint([190.8735962,-113.9983609]).appendPoint([188.8784681,-113.8588479]).appendPoint([188.3204164,-121.8393603]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.6] });
}


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


function _board_supports_extrude_4_outline_fn(){
    return CAG.circle({"center":[147.6776592,-105.2638879],"radius":2})
.union(
    CAG.circle({"center":[107.468188,-102.8795725],"radius":2})
).union(
    CAG.circle({"center":[67.2,-101.9],"radius":2})
).extrude({ offset: [0, 0, 4] });
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
            
            

                function _case_wall_case_fn() {
                    

                // creating part 0 of case _case_wall
                let _case_wall__part_0 = wall_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _case_wall__part_0_bounds = _case_wall__part_0.getBounds();
                let _case_wall__part_0_x = _case_wall__part_0_bounds[0].x + (_case_wall__part_0_bounds[1].x - _case_wall__part_0_bounds[0].x) / 2
                let _case_wall__part_0_y = _case_wall__part_0_bounds[0].y + (_case_wall__part_0_bounds[1].y - _case_wall__part_0_bounds[0].y) / 2
                _case_wall__part_0 = translate([-_case_wall__part_0_x, -_case_wall__part_0_y, 0], _case_wall__part_0);
                _case_wall__part_0 = rotate([0,0,0], _case_wall__part_0);
                _case_wall__part_0 = translate([_case_wall__part_0_x, _case_wall__part_0_y, 0], _case_wall__part_0);

                _case_wall__part_0 = translate([0,0,0], _case_wall__part_0);
                let result = _case_wall__part_0;
                
            
                    return result;
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
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _case_bottom_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _case_wall_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _slider_cutout_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.subtract(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            

                // creating part 4 of case case
                let case__part_4 = _supports_case_fn();

                // make sure that rotations are relative
                let case__part_4_bounds = case__part_4.getBounds();
                let case__part_4_x = case__part_4_bounds[0].x + (case__part_4_bounds[1].x - case__part_4_bounds[0].x) / 2
                let case__part_4_y = case__part_4_bounds[0].y + (case__part_4_bounds[1].y - case__part_4_bounds[0].y) / 2
                case__part_4 = translate([-case__part_4_x, -case__part_4_y, 0], case__part_4);
                case__part_4 = rotate([0,0,0], case__part_4);
                case__part_4 = translate([case__part_4_x, case__part_4_y, 0], case__part_4);

                case__part_4 = translate([0,0,0], case__part_4);
                result = result.union(case__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        