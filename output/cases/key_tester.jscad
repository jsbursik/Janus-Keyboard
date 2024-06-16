function wall_extrude_5_outline_fn(){
    return new CSG.Path2D([[-17.4,-9.1],[-17.4,85.9]]).appendArc([-9.1,94.2],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([28.0715473,94.2]).appendPoint([34.3515733,94.5459681]).appendArc([35.2425184,94.5471595],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([53.417576,93.5946452]).appendPoint([72.3169711,92.6041698]).appendPoint([76.0541339,92.6557506]).appendArc([76.8920735,92.6249571],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([95.022817,91.0387226]).appendPoint([138.3572864,87.2474477]).appendArc([145.9023097,78.255639],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([139.4820216,4.8714116]).appendPoint([144.254472,-5.9202407]).appendPoint([157.2683614,-15.0326642]).appendArc([159.306639,-26.5923106],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([143.6480022,-48.9551614]).appendArc([131.9988933,-50.9299113],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([116.61627,-39.8529739]).appendPoint([100.1206689,-31.4785954]).appendPoint([84.0211307,-25.9350799]).appendPoint([65.5863651,-22.4348902]).appendPoint([-9.6562031,-17.3813428]).appendArc([-17.4,-9.1],{"radius":8.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-15.4,-9.1],[-15.4,85.9]]).appendArc([-9.1,92.2],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([28.1265966,92.2]).appendPoint([34.4615869,92.5489961]).appendArc([35.1378465,92.5499005],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([53.3129041,91.5973861]).appendPoint([72.2783935,90.6034468]).appendPoint([76.0817356,90.6559411]).appendArc([76.717762,90.6325677],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([94.8485055,89.0463332]).appendPoint([138.1829749,85.2550583]).appendArc([143.9099203,78.4299505],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([137.4447846,4.5331132]).appendPoint([142.6507703,-7.2388659]).appendPoint([156.1212085,-16.6709683]).appendArc([157.6683349,-25.4451577],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([142.0096981,-47.8080085]).appendArc([133.1676034,-49.3069151],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([117.6595026,-38.1396221]).appendPoint([100.902642,-29.632609]).appendPoint([84.5358987,-23.9970873]).appendPoint([65.8408372,-20.4474756]).appendPoint([-9.5221783,-15.3858385]).appendArc([-15.4,-9.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}


function keyplate_extrude_1_outline_fn(){
    return new CSG.Path2D([[-15.4,-9.1],[-15.4,85.9]]).appendArc([-9.1,92.2],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([28.1265966,92.2]).appendPoint([34.4615869,92.5489961]).appendArc([35.1378465,92.5499005],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([53.3129041,91.5973861]).appendPoint([72.2783935,90.6034468]).appendPoint([76.0817356,90.6559411]).appendArc([76.717762,90.6325677],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([94.8485055,89.0463332]).appendPoint([138.1829749,85.2550583]).appendArc([143.9099203,78.4299505],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([137.4447846,4.5331132]).appendPoint([142.6507703,-7.2388659]).appendPoint([156.1212085,-16.6709683]).appendArc([157.6683349,-25.4451577],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([142.0096981,-47.8080085]).appendArc([133.1676034,-49.3069151],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([117.6595026,-38.1396221]).appendPoint([100.902642,-29.632609]).appendPoint([84.5358987,-23.9970873]).appendPoint([65.8408372,-20.4474756]).appendPoint([-9.5221783,-15.3858385]).appendArc([-15.4,-9.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[55.11281,69.0973507],[69.3432808,68.3515633]]).appendPoint([70.0733674,82.2824453]).appendPoint([55.8428966,83.0282327]).appendPoint([55.11281,69.0973507]).close().innerToCAG()
.union(
    new CSG.Path2D([[52.0982588,11.5762894],[66.3287296,10.830502]]).appendPoint([67.0588162,24.761384]).appendPoint([52.8283454,25.5071714]).appendPoint([52.0982588,11.5762894]).close().innerToCAG()
).union(
    new CSG.Path2D([[35.9391229,70.1022011],[50.1695937,69.3564137]]).appendPoint([50.8996803,83.2872957]).appendPoint([36.6692095,84.0330831]).appendPoint([35.9391229,70.1022011]).close().innerToCAG()
).union(
    new CSG.Path2D([[33.9294221,31.7548269],[48.1598929,31.0090395]]).appendPoint([48.8899795,44.9399215]).appendPoint([34.6595087,45.6857089]).appendPoint([33.9294221,31.7548269]).close().innerToCAG()
).union(
    new CSG.Path2D([[32.9245717,12.5811398],[47.1550425,11.8353524]]).appendPoint([47.8851291,25.7662344]).appendPoint([33.6546583,26.5120218]).appendPoint([32.9245717,12.5811398]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.9197213,-6.5925473],[46.1501921,-7.3383347]]).appendPoint([46.8802787,6.5925473]).appendPoint([32.6498079,7.3383347]).appendPoint([31.9197213,-6.5925473]).close().innerToCAG()
).union(
    new CSG.Path2D([[34.9342725,50.928514],[49.1647433,50.1827266]]).appendPoint([49.8948299,64.1136086]).appendPoint([35.6643591,64.859396]).appendPoint([34.9342725,50.928514]).close().innerToCAG()
).union(
    new CSG.Path2D([[54.1079596,49.9236636],[68.3384304,49.1778762]]).appendPoint([69.068517,63.1087582]).appendPoint([54.8380462,63.8545456]).appendPoint([54.1079596,49.9236636]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.1031092,30.7499765],[67.33358,30.0041891]]).appendPoint([68.0636666,43.9350711]).appendPoint([53.8331958,44.6808585]).appendPoint([53.1031092,30.7499765]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.0544076,-6.9340057],[109.585043,-19.6308486]]).appendPoint([122.014584,-25.9640161]).appendPoint([128.4839486,-13.2671732]).appendPoint([116.0544076,-6.9340057]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.8242599,1.3343122],[69.1052317,-12.6538751]]).appendPoint([82.7989309,-15.3156606]).appendPoint([85.5179591,-1.3274733]).appendPoint([71.8242599,1.3343122]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.075,50.625],[26.325,50.625]]).appendPoint([26.325,64.575]).appendPoint([12.075,64.575]).appendPoint([12.075,50.625]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.075,12.225],[26.325,12.225]]).appendPoint([26.325,26.175]).appendPoint([12.075,26.175]).appendPoint([12.075,12.225]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.125,50.625],[7.125,50.625]]).appendPoint([7.125,64.575]).appendPoint([-7.125,64.575]).appendPoint([-7.125,50.625]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.125,12.225],[7.125,12.225]]).appendPoint([7.125,26.175]).appendPoint([-7.125,26.175]).appendPoint([-7.125,12.225]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.075,69.825],[26.325,69.825]]).appendPoint([26.325,83.775]).appendPoint([12.075,83.775]).appendPoint([12.075,69.825]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.075,31.425],[26.325,31.425]]).appendPoint([26.325,45.375]).appendPoint([12.075,45.375]).appendPoint([12.075,31.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.075,-6.975],[26.325,-6.975]]).appendPoint([26.325,6.975]).appendPoint([12.075,6.975]).appendPoint([12.075,-6.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.125,69.825],[7.125,69.825]]).appendPoint([7.125,83.775]).appendPoint([-7.125,83.775]).appendPoint([-7.125,69.825]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.125,31.425],[7.125,31.425]]).appendPoint([7.125,45.375]).appendPoint([-7.125,45.375]).appendPoint([-7.125,31.425]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.125,-6.975],[7.125,-6.975]]).appendPoint([7.125,6.975]).appendPoint([-7.125,6.975]).appendPoint([-7.125,-6.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[95.862075,66.4971884],[110.0578494,65.2552191]]).appendPoint([111.273672,79.1521352]).appendPoint([97.0778976,80.3941045]).appendPoint([95.862075,66.4971884]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.8419041,9.1163738],[105.0376785,7.8744045]]).appendPoint([106.2535011,21.7713206]).appendPoint([92.0577267,23.0132899]).appendPoint([90.8419041,9.1163738]).close().innerToCAG()
).union(
    new CSG.Path2D([[76.7351368,68.1705787],[90.9309112,66.9286094]]).appendPoint([92.1467338,80.8255255]).appendPoint([77.9509594,82.0674948]).appendPoint([76.7351368,68.1705787]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.7149659,10.7897641],[85.9107403,9.5477948]]).appendPoint([87.1265629,23.4447109]).appendPoint([72.9307885,24.6866802]).appendPoint([71.7149659,10.7897641]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.1886847,47.3702502],[108.3844591,46.1282809]]).appendPoint([109.6002817,60.025197]).appendPoint([95.4045073,61.2671663]).appendPoint([94.1886847,47.3702502]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.5152944,28.243312],[106.7110688,27.0013427]]).appendPoint([107.9268914,40.8982588]).appendPoint([93.731117,42.1402281]).appendPoint([92.5152944,28.243312]).close().innerToCAG()
).union(
    new CSG.Path2D([[75.0617465,49.0436405],[89.2575209,47.8016712]]).appendPoint([90.4733435,61.6985873]).appendPoint([76.2775691,62.9405566]).appendPoint([75.0617465,49.0436405]).close().innerToCAG()
).union(
    new CSG.Path2D([[73.3883562,29.9167023],[87.5841306,28.674733]]).appendPoint([88.7999532,42.5716491]).appendPoint([74.6041788,43.8136184]).appendPoint([73.3883562,29.9167023]).close().innerToCAG()
).union(
    new CSG.Path2D([[135.5972216,-17.956352],[127.4237574,-29.6292687]]).appendPoint([138.8509284,-37.63066]).appendPoint([147.0243926,-25.9577433]).appendPoint([135.5972216,-17.956352]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.4489873,-3.2432041],[88.8096411,-16.7168438]]).appendPoint([101.9996253,-21.2585195]).appendPoint([106.6389715,-7.7848798]).appendPoint([93.4489873,-3.2432041]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function _case_wall_case_fn() {
                    

                // creating part 0 of case _case_wall
                let _case_wall__part_0 = wall_extrude_5_outline_fn();

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

        