function _board_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[34.3228696,-162.1569974],[20.9519598,-86.3268003]]).appendArc([27.6845842,-76.711616],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([41.5667275,-74.2638194]).appendArc([46.541039,-71.355861],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([60.7915517,-68.8431111]).appendPoint([61.4623064,-67.5925181]).appendArc([67.6215193,-63.2963392],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([80.6064213,-61.4714303]).appendArc([86.5142273,-57.6116595],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([104.8341866,-55.0369573]).appendArc([108.2310613,-55.2646485],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([112.8889639,-56.571256]).appendPoint([129.9085557,-55.3811302]).appendArc([133.2812736,-55.845221],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([137.8366844,-57.4735646]).appendPoint([179.6478364,-57.4735646]).appendArc([187.9478364,-65.7735646],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([187.9478364,-124.0144657]).appendPoint([202.6332088,-136.2690724]).appendArc([205.1148268,-145.4804901],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([195.6239841,-171.556366]).appendArc([184.9855519,-176.5176419],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([126.1941575,-155.1193245]).appendPoint([43.8672171,-168.9017961]).appendArc([34.3228696,-162.1569973],{"radius":8.3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function wall_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[34.3228696,-162.1569974],[20.9519598,-86.3268003]]).appendArc([27.6845842,-76.711616],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([41.5667275,-74.2638194]).appendArc([46.541039,-71.355861],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([60.7915517,-68.8431111]).appendPoint([61.4623064,-67.5925181]).appendArc([67.6215193,-63.2963392],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([80.6064213,-61.4714303]).appendArc([86.5142273,-57.6116595],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([104.8341866,-55.0369573]).appendArc([108.2310613,-55.2646485],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([112.8889639,-56.571256]).appendPoint([129.9085557,-55.3811302]).appendArc([133.2812736,-55.845221],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([137.8366844,-57.4735646]).appendPoint([179.6478364,-57.4735646]).appendArc([187.9478364,-65.7735646],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([187.9478364,-124.0144657]).appendPoint([202.6332088,-136.2690724]).appendArc([205.1148268,-145.4804901],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([195.6239841,-171.556366]).appendArc([184.9855519,-176.5176419],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([126.1941575,-155.1193245]).appendPoint([43.8672171,-168.9017961]).appendArc([34.3228696,-162.1569973],{"radius":8.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[36.2924851,-161.809701],[22.9215753,-85.9795039]]).appendArc([28.0318805,-78.6812315],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([42.7012364,-76.0946281]).appendArc([46.8883353,-73.3254765],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([62.0950965,-70.6441142]).appendPoint([63.2248003,-68.5378304]).appendArc([67.8998655,-65.2768754],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([81.8957566,-63.3098812]).appendArc([86.7925735,-59.5921957],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([105.1125328,-57.0174934]).appendArc([107.6908835,-57.1903193],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([112.6826111,-58.5905693]).appendPoint([130.0480687,-57.3762583]).appendArc([132.6080834,-57.72852],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([137.489974,-59.4735646]).appendPoint([179.6478364,-59.4735646]).appendArc([185.9478364,-65.7735646],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([185.9478364,-124.9503932]).appendPoint([201.3518038,-137.8046509]).appendArc([203.2354415,-144.7964499],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([193.7443826,-170.87292]).appendArc([185.6695922,-174.6382567],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([126.3833297,-153.0598219]).appendPoint([43.5369899,-166.929247]).appendArc([36.2924851,-161.8097009],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5.6] });
}


function _slider_hole_extrude_2_6_outline_fn(){
    return new CSG.Path2D([[185.9478364,-118.0235646],[187.9478364,-118.0235646]]).appendPoint([187.9478364,-110.0235646]).appendPoint([185.9478364,-110.0235646]).appendPoint([185.9478364,-118.0235646]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.6] });
}


function inserts_extrude_4_outline_fn(){
    return CAG.circle({"center":[41.6856144,-161.8741733],"radius":4.05})
.subtract(
    CAG.circle({"center":[41.6856144,-161.8741733],"radius":1.65})
).union(
    CAG.circle({"center":[125.6975091,-147.1700614],"radius":4.05})
.subtract(
    CAG.circle({"center":[125.6975091,-147.1700614],"radius":1.65})
)).union(
    CAG.circle({"center":[188.4219915,-169.999906],"radius":4.05})
.subtract(
    CAG.circle({"center":[188.4219915,-169.999906],"radius":1.65})
)).union(
    CAG.circle({"center":[180.6478364,-127.2735646],"radius":4.05})
.subtract(
    CAG.circle({"center":[180.6478364,-127.2735646],"radius":1.65})
)).union(
    CAG.circle({"center":[180.6478364,-64.7735646],"radius":4.05})
.subtract(
    CAG.circle({"center":[180.6478364,-64.7735646],"radius":1.65})
)).union(
    CAG.circle({"center":[96.5509974,-62.5629972],"radius":4.05})
.subtract(
    CAG.circle({"center":[96.5509974,-62.5629972],"radius":1.65})
)).union(
    CAG.circle({"center":[27.9674082,-84.0743608],"radius":4.05})
.subtract(
    CAG.circle({"center":[27.9674082,-84.0743608],"radius":1.65})
)).extrude({ offset: [0, 0, 4] });
}




                function _case_bottom_case_fn() {
                    

                // creating part 0 of case _case_bottom
                let _case_bottom__part_0 = _board_xl_extrude_1_outline_fn();

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
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        