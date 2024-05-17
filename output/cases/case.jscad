function _board_xl_extrude_1_outline_fn(){
    return new CSG.Path2D([[33.1411003,-162.3653752],[19.7701905,-86.5351781]]).appendArc([27.4762064,-75.5298467],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([40.9375911,-73.1562412]).appendArc([46.3326612,-70.1740917],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([60.0094249,-67.7625092]).appendPoint([60.4048101,-67.0253307]).appendArc([67.4545115,-62.1080175],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([79.9039604,-60.3583616]).appendArc([86.3472195,-56.4233378],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([104.6671789,-53.8486356]).appendArc([108.555168,-54.1092461],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([113.0127755,-55.3596679]).appendPoint([129.8242172,-54.1840975]).appendArc([133.6851877,-54.7152417],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([138.0447107,-56.2735646]).appendPoint([179.6478364,-56.2735646]).appendArc([189.1478364,-65.7735646],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([189.1478364,-123.4529094]).appendPoint([203.4020518,-135.3477253]).appendArc([206.2424579,-145.8909143],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([196.7517048,-171.966544]).appendArc([184.5751277,-177.6452731],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([126.080654,-156.3550259]).appendPoint([44.0653535,-170.0853256]).appendArc([33.1411002,-162.3653751],{"radius":9.5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function wall_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[33.1411003,-162.3653752],[19.7701905,-86.5351781]]).appendArc([27.4762064,-75.5298467],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([40.9375911,-73.1562412]).appendArc([46.3326612,-70.1740917],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([60.0094249,-67.7625092]).appendPoint([60.4048101,-67.0253307]).appendArc([67.4545115,-62.1080175],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([79.9039604,-60.3583616]).appendArc([86.3472195,-56.4233378],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([104.6671789,-53.8486356]).appendArc([108.555168,-54.1092461],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([113.0127755,-55.3596679]).appendPoint([129.8242172,-54.1840975]).appendArc([133.6851877,-54.7152417],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([138.0447107,-56.2735646]).appendPoint([179.6478364,-56.2735646]).appendArc([189.1478364,-65.7735646],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([189.1478364,-123.4529094]).appendPoint([203.4020518,-135.3477253]).appendArc([206.2424579,-145.8909143],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([196.7517048,-171.966544]).appendArc([184.5751277,-177.6452731],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([126.080654,-156.3550259]).appendPoint([44.0653535,-170.0853256]).appendArc([33.1411002,-162.3653751],{"radius":9.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[35.1107158,-162.0180788],[21.739806,-86.1878817]]).appendArc([27.8235027,-77.4994622],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([42.0057,-74.998758]).appendArc([46.6799575,-72.1437072],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([61.3129697,-69.5635123]).appendPoint([62.167304,-67.970643]).appendArc([67.7328577,-64.0885537],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([81.1014766,-62.2097168]).appendArc([86.6255657,-58.403874],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([104.9455251,-55.8291717]).appendArc([108.0149902,-56.0349168],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([112.8064226,-57.3789813]).appendPoint([129.964361,-56.1791814]).appendArc([133.0119975,-56.5985406],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([137.6980003,-58.2735646]).appendPoint([179.6478364,-58.2735646]).appendArc([187.1478364,-65.7735646],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([187.1478364,-124.3888368]).appendPoint([202.1206468,-136.8833038]).appendArc([204.3630727,-145.206874],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([194.8720137,-171.2833442]).appendArc([185.259168,-175.7658878],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([126.2698262,-154.2955234]).appendPoint([43.7351263,-168.1127765]).appendArc([35.1107158,-162.0180787],{"radius":7.5,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5.6] });
}


function inserts_extrude_4_outline_fn(){
    return CAG.circle({"center":[41.6856144,-161.8741733],"radius":3.05})
.subtract(
    CAG.circle({"center":[41.6856144,-161.8741733],"radius":1.55})
).union(
    CAG.circle({"center":[125.6975091,-147.1700614],"radius":3.05})
.subtract(
    CAG.circle({"center":[125.6975091,-147.1700614],"radius":1.55})
)).union(
    CAG.circle({"center":[188.4219915,-169.999906],"radius":3.05})
.subtract(
    CAG.circle({"center":[188.4219915,-169.999906],"radius":1.55})
)).union(
    CAG.circle({"center":[180.6478364,-127.2735646],"radius":3.05})
.subtract(
    CAG.circle({"center":[180.6478364,-127.2735646],"radius":1.55})
)).union(
    CAG.circle({"center":[180.6478364,-64.7735646],"radius":3.05})
.subtract(
    CAG.circle({"center":[180.6478364,-64.7735646],"radius":1.55})
)).union(
    CAG.circle({"center":[96.5509974,-62.5629972],"radius":3.05})
.subtract(
    CAG.circle({"center":[96.5509974,-62.5629972],"radius":1.55})
)).union(
    CAG.circle({"center":[27.9674082,-84.0743608],"radius":3.05})
.subtract(
    CAG.circle({"center":[27.9674082,-84.0743608],"radius":1.55})
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

        