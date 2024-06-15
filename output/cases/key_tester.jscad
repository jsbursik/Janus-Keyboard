function wall_extrude_4_outline_fn(){
    return new CSG.Path2D([[-17.4,-9.1],[-17.4,85.9]]).appendArc([-9.1,94.2],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([25.7774393,94.2]).appendPoint([30.1896171,97.1548624]).appendArc([35.2425184,98.5471595],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([53.417576,97.5946452]).appendPoint([72.5912631,96.5897948]).appendArc([77.1908539,94.9003403],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([79.1323425,93.419334]).appendPoint([94.8655655,92.0428553]).appendPoint([138.2002785,88.2515591]).appendArc([145.7453018,79.2597504],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([139.3250137,5.875523]).appendPoint([144.0974642,-4.9161293]).appendPoint([157.1113536,-14.0285528]).appendArc([159.1496312,-25.5881992],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([143.4909944,-47.95105]).appendArc([131.8418855,-49.9257999],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([116.4592622,-38.8488625]).appendPoint([99.9636611,-30.474484]).appendPoint([83.8641229,-24.9309685]).appendPoint([65.4829715,-21.4409586]).appendPoint([-9.5470689,-17.3879508]).appendArc([-17.4,-9.1],{"radius":8.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-15.4,-9.1],[-15.4,85.9]]).appendArc([-9.1,92.2],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([26.3852853,92.2]).appendPoint([31.3025118,95.4930966]).appendArc([35.1378465,96.5499005],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([53.3129041,95.5973861]).appendPoint([72.4865912,94.5925357]).appendArc([75.9778469,93.3101787],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3803739,91.477483]).appendPoint([94.691254,90.0504659]).appendPoint([138.025967,86.2591697]).appendArc([143.7529124,79.4340619],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([137.2877767,5.5372246]).appendPoint([142.4937625,-6.2347545]).appendPoint([155.9642008,-15.6668569]).appendArc([157.5113271,-24.4410463],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([141.8526903,-46.8038971]).appendArc([133.0105956,-48.3028037],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([117.5024948,-37.1355107]).appendPoint([100.7456342,-28.6284976]).appendPoint([84.3788909,-22.9929759]).appendPoint([65.7245245,-19.451091]).appendPoint([-9.4398209,-15.3908283]).appendArc([-15.4,-9.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
}


function keyplate_extrude_1_outline_fn(){
    return new CSG.Path2D([[-15.4,-9.1],[-15.4,85.9]]).appendArc([-9.1,92.2],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([26.3852853,92.2]).appendPoint([31.3025118,95.4930966]).appendArc([35.1378465,96.5499005],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([53.3129041,95.5973861]).appendPoint([72.4865912,94.5925357]).appendArc([75.9778469,93.3101787],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3803739,91.477483]).appendPoint([94.691254,90.0504659]).appendPoint([138.025967,86.2591697]).appendArc([143.7529124,79.4340619],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([137.2877767,5.5372246]).appendPoint([142.4937625,-6.2347545]).appendPoint([155.9642008,-15.6668569]).appendArc([157.5113271,-24.4410463],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([141.8526903,-46.8038971]).appendArc([133.0105956,-48.3028037],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([117.5024948,-37.1355107]).appendPoint([100.7456342,-28.6284976]).appendPoint([84.3788909,-22.9929759]).appendPoint([65.7245245,-19.451091]).appendPoint([-9.4398209,-15.3908283]).appendArc([-15.4,-9.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[53.9818225,53.9052398],[68.4619507,53.1463685]]).appendPoint([69.1946541,67.127182]).appendPoint([54.7145259,67.8860533]).appendPoint([53.9818225,53.9052398]).close().innerToCAG()
.union(
    new CSG.Path2D([[52.9769721,34.7315527],[67.4571003,33.9726814]]).appendPoint([68.1898037,47.9534949]).appendPoint([53.7096755,48.7123662]).appendPoint([52.9769721,34.7315527]).close().innerToCAG()
).union(
    new CSG.Path2D([[51.9721217,15.5578656],[66.4522499,14.7989943]]).appendPoint([67.1849533,28.7798078]).appendPoint([52.7048251,29.5386791]).appendPoint([51.9721217,15.5578656]).close().innerToCAG()
).union(
    new CSG.Path2D([[35.8129858,74.0837773],[50.293114,73.324906]]).appendPoint([51.0258174,87.3057195]).appendPoint([36.5456892,88.0645908]).appendPoint([35.8129858,74.0837773]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.7935842,-2.6109711],[46.2737124,-3.3698424]]).appendPoint([47.0064158,10.6109711]).appendPoint([32.5262876,11.3698424]).appendPoint([31.7935842,-2.6109711]).close().innerToCAG()
).union(
    new CSG.Path2D([[34.8081354,54.9100902],[49.2882636,54.1512189]]).appendPoint([50.020967,68.1320324]).appendPoint([35.5408388,68.8909037]).appendPoint([34.8081354,54.9100902]).close().innerToCAG()
).union(
    new CSG.Path2D([[54.9866729,73.0789269],[69.4668011,72.3200556]]).appendPoint([70.1995045,86.3008691]).appendPoint([55.7193763,87.0597404]).appendPoint([54.9866729,73.0789269]).close().innerToCAG()
).union(
    new CSG.Path2D([[33.803285,35.7364031],[48.2834132,34.9775318]]).appendPoint([49.0161166,48.9583453]).appendPoint([34.5359884,49.7172166]).appendPoint([33.803285,35.7364031]).close().innerToCAG()
).union(
    new CSG.Path2D([[32.7984346,16.562716],[47.2785628,15.8038447]]).appendPoint([48.0112662,29.7846582]).appendPoint([33.531138,30.5435295]).appendPoint([32.7984346,16.562716]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.6665625,2.4658972],[68.8998321,-11.7676969]]).appendPoint([82.6426127,-14.4390228]).appendPoint([85.4093431,-0.2054287]).appendPoint([71.6665625,2.4658972]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.9318735,-5.8071687],[109.3490112,-18.7267633]]).appendPoint([121.8231025,-25.0826303]).appendPoint([128.4059648,-12.1630357]).appendPoint([115.9318735,-5.8071687]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.3090376,-2.1127636],[88.5882994,-15.822783]]).appendPoint([101.8255594,-20.3807372]).appendPoint([106.5462976,-6.6707178]).appendPoint([93.3090376,-2.1127636]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.95,69.8],[26.45,69.8]]).appendPoint([26.45,83.8]).appendPoint([11.95,83.8]).appendPoint([11.95,69.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.95,50.6],[26.45,50.6]]).appendPoint([26.45,64.6]).appendPoint([11.95,64.6]).appendPoint([11.95,50.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.95,31.4],[26.45,31.4]]).appendPoint([26.45,45.4]).appendPoint([11.95,45.4]).appendPoint([11.95,31.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.95,12.2],[26.45,12.2]]).appendPoint([26.45,26.2]).appendPoint([11.95,26.2]).appendPoint([11.95,12.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.95,-7],[26.45,-7]]).appendPoint([26.45,7]).appendPoint([11.95,7]).appendPoint([11.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,69.8],[7.25,69.8]]).appendPoint([7.25,83.8]).appendPoint([-7.25,83.8]).appendPoint([-7.25,69.8]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,50.6],[7.25,50.6]]).appendPoint([7.25,64.6]).appendPoint([-7.25,64.6]).appendPoint([-7.25,50.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,31.4],[7.25,31.4]]).appendPoint([7.25,45.4]).appendPoint([-7.25,45.4]).appendPoint([-7.25,31.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,12.2],[7.25,12.2]]).appendPoint([7.25,26.2]).appendPoint([-7.25,26.2]).appendPoint([-7.25,12.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,-7],[7.25,-7]]).appendPoint([7.25,7]).appendPoint([-7.25,7]).appendPoint([-7.25,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[135.4914321,-16.8355072],[127.1745737,-28.7132119]]).appendPoint([138.6427023,-36.743282]).appendPoint([146.9595607,-24.8655773]).appendPoint([135.4914321,-16.8355072]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5581929,10.1064748],[105.0030161,8.8427166]]).appendPoint([106.2231965,22.7894424]).appendPoint([91.7783733,24.0532006]).appendPoint([90.5581929,10.1064748]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.4312548,11.7798651],[85.876078,10.5161069]]).appendPoint([87.0962584,24.4628327]).appendPoint([72.6514352,25.7265909]).appendPoint([71.4312548,11.7798651]).close().innerToCAG()
).union(
    new CSG.Path2D([[95.5783638,67.4872894],[110.023187,66.2235312]]).appendPoint([111.2433674,80.170257]).appendPoint([96.7985442,81.4340152]).appendPoint([95.5783638,67.4872894]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.9049735,48.3603512],[108.3497967,47.096593]]).appendPoint([109.5699771,61.0433188]).appendPoint([95.1251539,62.307077]).appendPoint([93.9049735,48.3603512]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.2315832,29.233413],[106.6764064,27.9696548]]).appendPoint([107.8965868,41.9163806]).appendPoint([93.4517636,43.1801388]).appendPoint([92.2315832,29.233413]).close().innerToCAG()
).union(
    new CSG.Path2D([[76.4514257,69.1606797],[90.8962489,67.8969215]]).appendPoint([92.1164293,81.8436473]).appendPoint([77.6716061,83.1074055]).appendPoint([76.4514257,69.1606797]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.7780354,50.0337415],[89.2228586,48.7699833]]).appendPoint([90.443039,62.7167091]).appendPoint([75.9982158,63.9804673]).appendPoint([74.7780354,50.0337415]).close().innerToCAG()
).union(
    new CSG.Path2D([[73.1046451,30.9068033],[87.5494683,29.6430451]]).appendPoint([88.7696487,43.5897709]).appendPoint([74.3248255,44.8535291]).appendPoint([73.1046451,30.9068033]).close().innerToCAG()
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

        