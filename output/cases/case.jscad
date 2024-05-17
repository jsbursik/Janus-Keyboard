function board_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[34.6183119,-162.1049029],[21.2474021,-86.2747058]]).appendArc([27.7366786,-77.0070583],{"radius":8,"clockwise":true,"large":false}).appendPoint([41.7293171,-74.5397785]).appendArc([46.5931334,-71.6513033],{"radius":8,"clockwise":true,"large":false}).appendPoint([60.9870834,-69.1132616]).appendPoint([61.7266805,-67.7343149]).appendArc([67.6632712,-63.5934196],{"radius":8,"clockwise":true,"large":false}).appendPoint([80.7892763,-61.74868]).appendArc([86.5559792,-57.9087399],{"radius":8,"clockwise":true,"large":false}).appendPoint([104.8759385,-55.3340377]).appendArc([108.1500346,-55.5534991],{"radius":8,"clockwise":true,"large":false}).appendPoint([112.8580108,-56.874153]).appendPoint([129.9294827,-55.6803994]).appendArc([133.180295,-56.1277159],{"radius":8,"clockwise":true,"large":false}).appendPoint([137.7846781,-57.7735646]).appendPoint([179.6478364,-57.7735646]).appendArc([187.6478364,-65.7735646],{"radius":8,"clockwise":true,"large":false}).appendPoint([187.6478364,-124.1548549]).appendPoint([202.440998,-136.4994092]).appendArc([204.832919,-145.3778841],{"radius":8,"clockwise":true,"large":false}).appendPoint([195.34186,-171.4543543]).appendArc([185.0881579,-176.2357341],{"radius":8,"clockwise":true,"large":false}).appendPoint([126.2225333,-154.810399]).appendPoint([43.8176831,-168.6059138]).appendArc([34.6183119,-162.1049028],{"radius":8,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function board_xl_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[34.6183119,-162.1049029],[21.2474021,-86.2747058]]).appendArc([27.7366786,-77.0070583],{"radius":8,"clockwise":true,"large":false}).appendPoint([41.7293171,-74.5397785]).appendArc([46.5931334,-71.6513033],{"radius":8,"clockwise":true,"large":false}).appendPoint([60.9870834,-69.1132616]).appendPoint([61.7266805,-67.7343149]).appendArc([67.6632712,-63.5934196],{"radius":8,"clockwise":true,"large":false}).appendPoint([80.7892763,-61.74868]).appendArc([86.5559792,-57.9087399],{"radius":8,"clockwise":true,"large":false}).appendPoint([104.8759385,-55.3340377]).appendArc([108.1500346,-55.5534991],{"radius":8,"clockwise":true,"large":false}).appendPoint([112.8580108,-56.874153]).appendPoint([129.9294827,-55.6803994]).appendArc([133.180295,-56.1277159],{"radius":8,"clockwise":true,"large":false}).appendPoint([137.7846781,-57.7735646]).appendPoint([179.6478364,-57.7735646]).appendArc([187.6478364,-65.7735646],{"radius":8,"clockwise":true,"large":false}).appendPoint([187.6478364,-124.1548549]).appendPoint([202.440998,-136.4994092]).appendArc([204.832919,-145.3778841],{"radius":8,"clockwise":true,"large":false}).appendPoint([195.34186,-171.4543543]).appendArc([185.0881579,-176.2357341],{"radius":8,"clockwise":true,"large":false}).appendPoint([126.2225333,-154.810399]).appendPoint([43.8176831,-168.6059138]).appendArc([34.6183119,-162.1049028],{"radius":8,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[36.5879274,-161.7576065],[23.2170176,-85.9274094]]).appendArc([28.083975,-78.9766738],{"radius":6,"clockwise":true,"large":false}).appendPoint([42.883532,-76.3671125]).appendArc([46.9404298,-73.6209188],{"radius":6,"clockwise":true,"large":false}).appendPoint([62.2906282,-70.9142647]).appendPoint([63.4891744,-68.6796272]).appendArc([67.9416174,-65.5739558],{"radius":6,"clockwise":true,"large":false}).appendPoint([82.1062608,-63.583245]).appendArc([86.8343254,-59.8892761],{"radius":6,"clockwise":true,"large":false}).appendPoint([105.1542847,-57.3145738]).appendArc([107.6098568,-57.4791699],{"radius":6,"clockwise":true,"large":false}).appendPoint([112.6516581,-58.8934663]).appendPoint([130.0689957,-57.6755275]).appendArc([132.5071049,-58.0110149],{"radius":6,"clockwise":true,"large":false}).appendPoint([137.4379676,-59.7735646]).appendPoint([179.6478364,-59.7735646]).appendArc([185.6478364,-65.7735646],{"radius":6,"clockwise":true,"large":false}).appendPoint([185.6478364,-125.0907824]).appendPoint([201.159593,-138.0349876]).appendArc([202.9535337,-144.6938438],{"radius":6,"clockwise":true,"large":false}).appendPoint([193.4624748,-170.770314]).appendArc([185.7721982,-174.3563489],{"radius":6,"clockwise":true,"large":false}).appendPoint([126.4117055,-152.7508965]).appendPoint([43.4874558,-166.6333647]).appendArc([36.5879274,-161.7576065],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function standoffs_extrude_4_outline_fn(){
    return CAG.circle({"center":[41.6856144,-161.8741733],"radius":1.6})
.union(
    CAG.circle({"center":[125.6975091,-147.1700614],"radius":1.6})
).union(
    CAG.circle({"center":[188.4219915,-169.999906],"radius":1.6})
).union(
    CAG.circle({"center":[180.6478364,-127.2735646],"radius":1.6})
).union(
    CAG.circle({"center":[180.6478364,-64.7735646],"radius":1.6})
).union(
    CAG.circle({"center":[96.5509974,-62.5629972],"radius":1.6})
).union(
    CAG.circle({"center":[27.9674082,-84.0743608],"radius":1.6})
).extrude({ offset: [0, 0, 4] });
}


function holes_extrude_4_outline_fn(){
    return CAG.circle({"center":[41.6856144,-161.8741733],"radius":0.75})
.union(
    CAG.circle({"center":[125.6975091,-147.1700614],"radius":0.75})
).union(
    CAG.circle({"center":[188.4219915,-169.999906],"radius":0.75})
).union(
    CAG.circle({"center":[180.6478364,-127.2735646],"radius":0.75})
).union(
    CAG.circle({"center":[180.6478364,-64.7735646],"radius":0.75})
).union(
    CAG.circle({"center":[96.5509974,-62.5629972],"radius":0.75})
).union(
    CAG.circle({"center":[27.9674082,-84.0743608],"radius":0.75})
).extrude({ offset: [0, 0, 4] });
}




                function _xl_bottom_case_fn() {
                    

                // creating part 0 of case _xl_bottom
                let _xl_bottom__part_0 = board_xl_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _xl_bottom__part_0_bounds = _xl_bottom__part_0.getBounds();
                let _xl_bottom__part_0_x = _xl_bottom__part_0_bounds[0].x + (_xl_bottom__part_0_bounds[1].x - _xl_bottom__part_0_bounds[0].x) / 2
                let _xl_bottom__part_0_y = _xl_bottom__part_0_bounds[0].y + (_xl_bottom__part_0_bounds[1].y - _xl_bottom__part_0_bounds[0].y) / 2
                _xl_bottom__part_0 = translate([-_xl_bottom__part_0_x, -_xl_bottom__part_0_y, 0], _xl_bottom__part_0);
                _xl_bottom__part_0 = rotate([0,0,0], _xl_bottom__part_0);
                _xl_bottom__part_0 = translate([_xl_bottom__part_0_x, _xl_bottom__part_0_y, 0], _xl_bottom__part_0);

                _xl_bottom__part_0 = translate([0,0,0], _xl_bottom__part_0);
                let result = _xl_bottom__part_0;
                
            
                    return result;
                }
            
            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _outside_wall_case_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            

                // creating part 1 of case _wall
                let _wall__part_1 = _inside_cut_case_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);
                
            
                    return result;
                }
            
            

                function _outside_wall_case_fn() {
                    

                // creating part 0 of case _outside_wall
                let _outside_wall__part_0 = board_xl_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outside_wall__part_0_bounds = _outside_wall__part_0.getBounds();
                let _outside_wall__part_0_x = _outside_wall__part_0_bounds[0].x + (_outside_wall__part_0_bounds[1].x - _outside_wall__part_0_bounds[0].x) / 2
                let _outside_wall__part_0_y = _outside_wall__part_0_bounds[0].y + (_outside_wall__part_0_bounds[1].y - _outside_wall__part_0_bounds[0].y) / 2
                _outside_wall__part_0 = translate([-_outside_wall__part_0_x, -_outside_wall__part_0_y, 0], _outside_wall__part_0);
                _outside_wall__part_0 = rotate([0,0,0], _outside_wall__part_0);
                _outside_wall__part_0 = translate([_outside_wall__part_0_x, _outside_wall__part_0_y, 0], _outside_wall__part_0);

                _outside_wall__part_0 = translate([0,0,0], _outside_wall__part_0);
                let result = _outside_wall__part_0;
                
            
                    return result;
                }
            
            

                function _inside_cut_case_fn() {
                    

                // creating part 0 of case _inside_cut
                let _inside_cut__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _inside_cut__part_0_bounds = _inside_cut__part_0.getBounds();
                let _inside_cut__part_0_x = _inside_cut__part_0_bounds[0].x + (_inside_cut__part_0_bounds[1].x - _inside_cut__part_0_bounds[0].x) / 2
                let _inside_cut__part_0_y = _inside_cut__part_0_bounds[0].y + (_inside_cut__part_0_bounds[1].y - _inside_cut__part_0_bounds[0].y) / 2
                _inside_cut__part_0 = translate([-_inside_cut__part_0_x, -_inside_cut__part_0_y, 0], _inside_cut__part_0);
                _inside_cut__part_0 = rotate([0,0,0], _inside_cut__part_0);
                _inside_cut__part_0 = translate([_inside_cut__part_0_x, _inside_cut__part_0_y, 0], _inside_cut__part_0);

                _inside_cut__part_0 = translate([0,0,0], _inside_cut__part_0);
                let result = _inside_cut__part_0;
                
            
                    return result;
                }
            
            

                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = _standoff_outer_case_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            

                // creating part 1 of case _standoffs
                let _standoffs__part_1 = _standoff_inner_case_fn();

                // make sure that rotations are relative
                let _standoffs__part_1_bounds = _standoffs__part_1.getBounds();
                let _standoffs__part_1_x = _standoffs__part_1_bounds[0].x + (_standoffs__part_1_bounds[1].x - _standoffs__part_1_bounds[0].x) / 2
                let _standoffs__part_1_y = _standoffs__part_1_bounds[0].y + (_standoffs__part_1_bounds[1].y - _standoffs__part_1_bounds[0].y) / 2
                _standoffs__part_1 = translate([-_standoffs__part_1_x, -_standoffs__part_1_y, 0], _standoffs__part_1);
                _standoffs__part_1 = rotate([0,0,0], _standoffs__part_1);
                _standoffs__part_1 = translate([_standoffs__part_1_x, _standoffs__part_1_y, 0], _standoffs__part_1);

                _standoffs__part_1 = translate([0,0,0], _standoffs__part_1);
                result = result.subtract(_standoffs__part_1);
                
            
                    return result;
                }
            
            

                function _standoff_outer_case_fn() {
                    

                // creating part 0 of case _standoff_outer
                let _standoff_outer__part_0 = standoffs_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoff_outer__part_0_bounds = _standoff_outer__part_0.getBounds();
                let _standoff_outer__part_0_x = _standoff_outer__part_0_bounds[0].x + (_standoff_outer__part_0_bounds[1].x - _standoff_outer__part_0_bounds[0].x) / 2
                let _standoff_outer__part_0_y = _standoff_outer__part_0_bounds[0].y + (_standoff_outer__part_0_bounds[1].y - _standoff_outer__part_0_bounds[0].y) / 2
                _standoff_outer__part_0 = translate([-_standoff_outer__part_0_x, -_standoff_outer__part_0_y, 0], _standoff_outer__part_0);
                _standoff_outer__part_0 = rotate([0,0,0], _standoff_outer__part_0);
                _standoff_outer__part_0 = translate([_standoff_outer__part_0_x, _standoff_outer__part_0_y, 0], _standoff_outer__part_0);

                _standoff_outer__part_0 = translate([0,0,0], _standoff_outer__part_0);
                let result = _standoff_outer__part_0;
                
            
                    return result;
                }
            
            

                function _standoff_inner_case_fn() {
                    

                // creating part 0 of case _standoff_inner
                let _standoff_inner__part_0 = holes_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoff_inner__part_0_bounds = _standoff_inner__part_0.getBounds();
                let _standoff_inner__part_0_x = _standoff_inner__part_0_bounds[0].x + (_standoff_inner__part_0_bounds[1].x - _standoff_inner__part_0_bounds[0].x) / 2
                let _standoff_inner__part_0_y = _standoff_inner__part_0_bounds[0].y + (_standoff_inner__part_0_bounds[1].y - _standoff_inner__part_0_bounds[0].y) / 2
                _standoff_inner__part_0 = translate([-_standoff_inner__part_0_x, -_standoff_inner__part_0_y, 0], _standoff_inner__part_0);
                _standoff_inner__part_0 = rotate([0,0,0], _standoff_inner__part_0);
                _standoff_inner__part_0 = translate([_standoff_inner__part_0_x, _standoff_inner__part_0_y, 0], _standoff_inner__part_0);

                _standoff_inner__part_0 = translate([0,0,0], _standoff_inner__part_0);
                let result = _standoff_inner__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _xl_bottom_case_fn();

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
                let case__part_1 = _wall_case_fn();

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
                let case__part_2 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        