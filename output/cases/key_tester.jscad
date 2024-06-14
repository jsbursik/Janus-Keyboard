function wall_extrude_4_outline_fn(){
    return new CSG.Path2D([[-17.4,-9.1],[-17.4,85.9]]).appendArc([-9.1,94.2],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([25.7774393,94.2]).appendPoint([30.1896171,97.1548624]).appendArc([35.2425184,98.5471595],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([53.417576,97.5946452]).appendPoint([72.5912631,96.5897948]).appendArc([77.1908539,94.9003403],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([79.1323425,93.419334]).appendPoint([94.8655655,92.0428553]).appendPoint([138.2002785,88.2515591]).appendArc([145.7453018,79.2597504],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([139.3250137,5.875523]).appendPoint([144.0974642,-4.9161293]).appendPoint([157.1113536,-14.0285528]).appendArc([159.1496312,-25.5881992],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([143.4909944,-47.95105]).appendArc([131.8418855,-49.9257999],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([116.4592622,-38.8488625]).appendPoint([99.9636611,-30.474484]).appendPoint([83.8641229,-24.9309685]).appendPoint([65.4829715,-21.4409586]).appendPoint([-9.5470689,-17.3879508]).appendArc([-17.4,-9.1],{"radius":8.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-15.4,-9.1],[-15.4,85.9]]).appendArc([-9.1,92.2],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([26.3852853,92.2]).appendPoint([31.3025118,95.4930966]).appendArc([35.1378465,96.5499005],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([53.3129041,95.5973861]).appendPoint([72.4865912,94.5925357]).appendArc([75.9778469,93.3101787],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3803739,91.477483]).appendPoint([94.691254,90.0504659]).appendPoint([138.025967,86.2591697]).appendArc([143.7529124,79.4340619],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([137.2877767,5.5372246]).appendPoint([142.4937625,-6.2347545]).appendPoint([155.9642008,-15.6668569]).appendArc([157.5113271,-24.4410463],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([141.8526903,-46.8038971]).appendArc([133.0105956,-48.3028037],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([117.5024948,-37.1355107]).appendPoint([100.7456342,-28.6284976]).appendPoint([84.3788909,-22.9929759]).appendPoint([65.7245245,-19.451091]).appendPoint([-9.4398209,-15.3908283]).appendArc([-15.4,-9.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
}


function keyplate_extrude_1_outline_fn(){
    return new CSG.Path2D([[-15.1,-9.1],[-15.1,85.9]]).appendArc([-9.1,91.9],{"radius":6,"clockwise":true,"large":false}).appendPoint([26.4764623,91.9]).appendPoint([31.469446,95.2438317]).appendArc([35.1221457,96.2503116],{"radius":6,"clockwise":true,"large":false}).appendPoint([53.2972033,95.2977972]).appendPoint([72.4708904,94.2929468]).appendArc([75.7958958,93.0716544],{"radius":6,"clockwise":true,"large":false}).appendPoint([78.2675787,91.1862054]).appendPoint([94.665351,89.7515862]).appendPoint([137.9998203,85.9603113]).appendArc([143.454054,79.4602086],{"radius":6,"clockwise":true,"large":false}).appendPoint([136.9821912,5.4864799]).appendPoint([142.2532072,-6.4325482]).appendPoint([155.7921278,-15.9126025]).appendArc([157.2655815,-24.2689734],{"radius":6,"clockwise":true,"large":false}).appendPoint([141.6069447,-46.6318242]).appendArc([133.1859021,-48.0593542],{"radius":6,"clockwise":true,"large":false}).appendPoint([117.6589796,-36.8785078]).appendPoint([100.8629297,-28.3515995]).appendPoint([84.456106,-22.7022771]).appendPoint([65.7607575,-19.1526108]).appendPoint([-9.4236389,-15.0912651]).appendArc([-15.1,-9.1],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[71.2234512,2.8067085],[68.3613163,-11.9176992]]).appendPoint([83.085724,-14.7798341]).appendPoint([85.9478589,-0.0554264]).appendPoint([71.2234512,2.8067085]).close().innerToCAG()
.union(
    new CSG.Path2D([[54.7108475,72.5926962],[69.6902905,71.8076568]]).appendPoint([70.4753299,86.7870998]).appendPoint([55.4958869,87.5721392]).appendPoint([54.7108475,72.5926962]).close().innerToCAG()
).union(
    new CSG.Path2D([[35.5371604,73.5975466],[50.5166034,72.8125072]]).appendPoint([51.3016428,87.7919502]).appendPoint([36.3221998,88.5769896]).appendPoint([35.5371604,73.5975466]).close().innerToCAG()
).union(
    new CSG.Path2D([[32.5226092,16.0764853],[47.5020522,15.2914459]]).appendPoint([48.2870916,30.2708889]).appendPoint([33.3076486,31.0559283]).appendPoint([32.5226092,16.0764853]).close().innerToCAG()
).union(
    new CSG.Path2D([[52.7011467,34.245322],[67.6805897,33.4602826]]).appendPoint([68.4656291,48.4397256]).appendPoint([53.4861861,49.224765]).appendPoint([52.7011467,34.245322]).close().innerToCAG()
).union(
    new CSG.Path2D([[51.6962963,15.0716349],[66.6757393,14.2865955]]).appendPoint([67.4607787,29.2660385]).appendPoint([52.4813357,30.0510779]).appendPoint([51.6962963,15.0716349]).close().innerToCAG()
).union(
    new CSG.Path2D([[34.53231,54.4238595],[49.511753,53.6388201]]).appendPoint([50.2967924,68.6182631]).appendPoint([35.3173494,69.4033025]).appendPoint([34.53231,54.4238595]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.5177588,-3.0972018],[46.4972018,-3.8822412]]).appendPoint([47.2822412,11.0972018]).appendPoint([32.3027982,11.8822412]).appendPoint([31.5177588,-3.0972018]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.7059971,53.4190091],[68.6854401,52.6339697]]).appendPoint([69.4704795,67.6134127]).appendPoint([54.4910365,68.3984521]).appendPoint([53.7059971,53.4190091]).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5274596,35.2501724],[48.5069026,34.465133]]).appendPoint([49.291942,49.444576]).appendPoint([34.312499,50.2296154]).appendPoint([33.5274596,35.2501724]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.7,69.3],[26.7,69.3]]).appendPoint([26.7,84.3]).appendPoint([11.7,84.3]).appendPoint([11.7,69.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.7,50.1],[26.7,50.1]]).appendPoint([26.7,65.1]).appendPoint([11.7,65.1]).appendPoint([11.7,50.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.7,30.9],[26.7,30.9]]).appendPoint([26.7,45.9]).appendPoint([11.7,45.9]).appendPoint([11.7,30.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.7,11.7],[26.7,11.7]]).appendPoint([26.7,26.7]).appendPoint([11.7,26.7]).appendPoint([11.7,11.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.7,-7.5],[26.7,-7.5]]).appendPoint([26.7,7.5]).appendPoint([11.7,7.5]).appendPoint([11.7,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,69.3],[7.5,69.3]]).appendPoint([7.5,84.3]).appendPoint([-7.5,84.3]).appendPoint([-7.5,69.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,50.1],[7.5,50.1]]).appendPoint([7.5,65.1]).appendPoint([-7.5,65.1]).appendPoint([-7.5,50.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,30.9],[7.5,30.9]]).appendPoint([7.5,45.9]).appendPoint([-7.5,45.9]).appendPoint([-7.5,30.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,11.7],[7.5,11.7]]).appendPoint([7.5,26.7]).appendPoint([-7.5,26.7]).appendPoint([-7.5,11.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,-7.5],[7.5,-7.5]]).appendPoint([7.5,7.5]).appendPoint([-7.5,7.5]).appendPoint([-7.5,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[135.2252501,-16.343931],[126.6216036,-28.6312117]]).appendPoint([138.9088843,-37.2348582]).appendPoint([147.5125308,-24.9475775]).appendPoint([135.2252501,-16.343931]).close().innerToCAG()
).union(
    new CSG.Path2D([[95.2857373,67.010981],[110.2286578,65.7036449]]).appendPoint([111.5359939,80.6465654]).appendPoint([96.5930734,81.9539015]).appendPoint([95.2857373,67.010981]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.612347,47.8840428],[108.5552675,46.5767067]]).appendPoint([109.8626036,61.5196272]).appendPoint([94.9196831,62.8269633]).appendPoint([93.612347,47.8840428]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.9389567,28.7571046],[106.8818772,27.4497685]]).appendPoint([108.1892133,42.392689]).appendPoint([93.2462928,43.7000251]).appendPoint([91.9389567,28.7571046]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.2655664,9.6301664],[105.2084869,8.3228303]]).appendPoint([106.515823,23.2657508]).appendPoint([91.5729025,24.5730869]).appendPoint([90.2655664,9.6301664]).close().innerToCAG()
).union(
    new CSG.Path2D([[76.1587992,68.6843713],[91.1017197,67.3770352]]).appendPoint([92.4090558,82.3199557]).appendPoint([77.4661353,83.6272918]).appendPoint([76.1587992,68.6843713]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.4854089,49.5574331],[89.4283294,48.250097]]).appendPoint([90.7356655,63.1930175]).appendPoint([75.792745,64.5003536]).appendPoint([74.4854089,49.5574331]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.8120186,30.4304949],[87.7549391,29.1231588]]).appendPoint([89.0622752,44.0660793]).appendPoint([74.1193547,45.3734154]).appendPoint([72.8120186,30.4304949]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.1386283,11.3035567],[86.0815488,9.9962206]]).appendPoint([87.3888849,24.9391411]).appendPoint([72.4459644,26.2464772]).appendPoint([71.1386283,11.3035567]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.5998678,-5.3574218],[108.7900103,-18.7225197]]).appendPoint([122.1551082,-25.5323772]).appendPoint([128.9649657,-12.1672793]).appendPoint([115.5998678,-5.3574218]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.9176703,-1.7135999],[88.034148,-15.8963786]]).appendPoint([102.2169267,-20.7799009]).appendPoint([107.100449,-6.5971222]).appendPoint([92.9176703,-1.7135999]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function _case_wall_case_fn() {
                    

                // creating part 0 of case _case_wall
                let _case_wall__part_0 = wall_extrude_4_outline_fn();

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
            
            

                function _case_keyplate_case_fn() {
                    

                // creating part 0 of case _case_keyplate
                let _case_keyplate__part_0 = keyplate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _case_keyplate__part_0_bounds = _case_keyplate__part_0.getBounds();
                let _case_keyplate__part_0_x = _case_keyplate__part_0_bounds[0].x + (_case_keyplate__part_0_bounds[1].x - _case_keyplate__part_0_bounds[0].x) / 2
                let _case_keyplate__part_0_y = _case_keyplate__part_0_bounds[0].y + (_case_keyplate__part_0_bounds[1].y - _case_keyplate__part_0_bounds[0].y) / 2
                _case_keyplate__part_0 = translate([-_case_keyplate__part_0_x, -_case_keyplate__part_0_y, 0], _case_keyplate__part_0);
                _case_keyplate__part_0 = rotate([0,0,0], _case_keyplate__part_0);
                _case_keyplate__part_0 = translate([_case_keyplate__part_0_x, _case_keyplate__part_0_y, 0], _case_keyplate__part_0);

                _case_keyplate__part_0 = translate([0,0,0], _case_keyplate__part_0);
                let result = _case_keyplate__part_0;
                
            
                    return result;
                }
            
            

                function key_tester_case_fn() {
                    

                // creating part 0 of case key_tester
                let key_tester__part_0 = _case_wall_case_fn();

                // make sure that rotations are relative
                let key_tester__part_0_bounds = key_tester__part_0.getBounds();
                let key_tester__part_0_x = key_tester__part_0_bounds[0].x + (key_tester__part_0_bounds[1].x - key_tester__part_0_bounds[0].x) / 2
                let key_tester__part_0_y = key_tester__part_0_bounds[0].y + (key_tester__part_0_bounds[1].y - key_tester__part_0_bounds[0].y) / 2
                key_tester__part_0 = translate([-key_tester__part_0_x, -key_tester__part_0_y, 0], key_tester__part_0);
                key_tester__part_0 = rotate([0,0,0], key_tester__part_0);
                key_tester__part_0 = translate([key_tester__part_0_x, key_tester__part_0_y, 0], key_tester__part_0);

                key_tester__part_0 = translate([0,0,0], key_tester__part_0);
                let result = key_tester__part_0;
                
            

                // creating part 1 of case key_tester
                let key_tester__part_1 = _case_keyplate_case_fn();

                // make sure that rotations are relative
                let key_tester__part_1_bounds = key_tester__part_1.getBounds();
                let key_tester__part_1_x = key_tester__part_1_bounds[0].x + (key_tester__part_1_bounds[1].x - key_tester__part_1_bounds[0].x) / 2
                let key_tester__part_1_y = key_tester__part_1_bounds[0].y + (key_tester__part_1_bounds[1].y - key_tester__part_1_bounds[0].y) / 2
                key_tester__part_1 = translate([-key_tester__part_1_x, -key_tester__part_1_y, 0], key_tester__part_1);
                key_tester__part_1 = rotate([0,0,0], key_tester__part_1);
                key_tester__part_1 = translate([key_tester__part_1_x, key_tester__part_1_y, 0], key_tester__part_1);

                key_tester__part_1 = translate([0,0,0], key_tester__part_1);
                result = result.union(key_tester__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return key_tester_case_fn();
            }

        