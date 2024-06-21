function wall_extrude_5_outline_fn(){
    return new CSG.Path2D([[32.6,-159.1],[32.6,-64.1]]).appendArc([40.9,-55.8],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([78.3,-55.8]).appendArc([78.4672974,-55.8016862],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([82.6707075,-55.8864287]).appendArc([82.7930759,-55.8897986],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([120.1702928,-57.1950397]).appendArc([120.3374295,-57.2025635],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([124.5353219,-57.4339513]).appendArc([124.6574982,-57.4415898],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([143.810097,-58.7808701]).appendPoint([186.2072001,-61.7455643]).appendArc([193.9080029,-70.6043246],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([188.7694241,-144.0894247]).appendPoint([193.729488,-154.796143]).appendPoint([206.9004289,-163.6800548]).appendArc([209.1401397,-175.2023678],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([193.8741734,-197.8350935]).appendArc([182.2618994,-200.0132614],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([166.6877029,-189.2060609]).appendPoint([150.0484619,-181.1208462]).appendPoint([133.8546286,-175.8591507]).appendPoint([115.276224,-172.6665565]).appendPoint([40.3160315,-167.3794312]).appendArc([32.6,-159.1],{"radius":8.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[34.6,-159.1],[34.6,-64.1]]).appendArc([40.9,-57.8],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3,-57.8]).appendArc([78.4269848,-57.8012799],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([82.6303949,-57.8860224]).appendArc([82.7232769,-57.8885803],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([120.1004938,-59.1938214]).appendArc([120.2273566,-59.1995322],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([124.425249,-59.43092]).appendArc([124.5179852,-59.4367179],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([143.6709707,-60.7760252]).appendPoint([186.0676871,-63.7406924]).appendArc([191.9128748,-70.4648116],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([186.7384016,-144.4632261]).appendPoint([192.1490437,-156.1425557]).appendPoint([205.7820431,-165.33813]).appendArc([207.4820645,-174.083982],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([192.2160983,-196.7167077]).appendArc([183.401716,-198.3698448],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([167.7008744,-187.474763]).appendPoint([150.7980985,-179.2614934]).appendPoint([134.3354952,-173.9124693]).appendPoint([115.5165404,-170.6785379]).appendPoint([40.4567468,-165.3843875]).appendArc([34.6,-159.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}


function keyplate_extrude_1_outline_fn(){
    return new CSG.Path2D([[34.6,-159.1],[34.6,-64.1]]).appendArc([40.9,-57.8],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3,-57.8]).appendArc([78.4269848,-57.8012799],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([82.6303949,-57.8860224]).appendArc([82.7232769,-57.8885803],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([120.1004938,-59.1938214]).appendArc([120.2273566,-59.1995322],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([124.425249,-59.43092]).appendArc([124.5179852,-59.4367179],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([143.6709707,-60.7760252]).appendPoint([186.0676871,-63.7406924]).appendArc([191.9128748,-70.4648116],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([186.7384016,-144.4632261]).appendPoint([192.1490437,-156.1425557]).appendPoint([205.7820431,-165.33813]).appendArc([207.4820645,-174.083982],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([192.2160983,-196.7167077]).appendArc([183.401716,-198.3698448],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([167.7008744,-187.474763]).appendPoint([150.7980985,-179.2614934]).appendPoint([134.3354952,-173.9124693]).appendPoint([115.5165404,-170.6785379]).appendPoint([40.4567468,-165.3843875]).appendArc([34.6,-159.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[165.5952484,-156.212033],[159.2607853,-169.1996069]]).appendPoint([171.7989622,-175.3148844]).appendPoint([178.1334253,-162.3273105]).appendPoint([165.5952484,-156.212033]).close().innerToCAG()
.union(
    new CSG.Path2D([[61.975,-156.975],[76.425,-156.975]]).appendPoint([76.425,-143.025]).appendPoint([61.975,-143.025]).appendPoint([61.975,-156.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.775,-156.975],[57.225,-156.975]]).appendPoint([57.225,-143.025]).appendPoint([42.775,-143.025]).appendPoint([42.775,-156.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.975,-80.175],[76.425,-80.175]]).appendPoint([76.425,-66.225]).appendPoint([61.975,-66.225]).appendPoint([61.975,-80.175]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.975,-99.375],[76.425,-99.375]]).appendPoint([76.425,-85.425]).appendPoint([61.975,-85.425]).appendPoint([61.975,-99.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.975,-118.575],[76.425,-118.575]]).appendPoint([76.425,-104.625]).appendPoint([61.975,-104.625]).appendPoint([61.975,-118.575]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.975,-137.775],[76.425,-137.775]]).appendPoint([76.425,-123.825]).appendPoint([61.975,-123.825]).appendPoint([61.975,-137.775]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.775,-80.175],[57.225,-80.175]]).appendPoint([57.225,-66.225]).appendPoint([42.775,-66.225]).appendPoint([42.775,-80.175]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.775,-99.375],[57.225,-99.375]]).appendPoint([57.225,-85.425]).appendPoint([42.775,-85.425]).appendPoint([42.775,-99.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.775,-118.575],[57.225,-118.575]]).appendPoint([57.225,-104.625]).appendPoint([42.775,-104.625]).appendPoint([42.775,-118.575]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.775,-137.775],[57.225,-137.775]]).appendPoint([57.225,-123.825]).appendPoint([42.775,-123.825]).appendPoint([42.775,-137.775]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.0045624,-80.9854569],[117.4457598,-81.4897546]]).appendPoint([117.9326078,-67.5482525]).appendPoint([103.4914104,-67.0439548]).appendPoint([103.0045624,-80.9854569]).close().innerToCAG()
).union(
    new CSG.Path2D([[102.3344921,-100.1737608],[116.7756895,-100.6780585]]).appendPoint([117.2625375,-86.7365564]).appendPoint([102.8213401,-86.2322587]).appendPoint([102.3344921,-100.1737608]).close().innerToCAG()
).union(
    new CSG.Path2D([[101.6644218,-119.3620647],[116.1056192,-119.8663624]]).appendPoint([116.5924672,-105.9248603]).appendPoint([102.1512698,-105.4205626]).appendPoint([101.6644218,-119.3620647]).close().innerToCAG()
).union(
    new CSG.Path2D([[100.9943515,-138.5503686],[115.4355489,-139.0546663]]).appendPoint([115.9223969,-125.1131642]).appendPoint([101.4811995,-124.6088665]).appendPoint([100.9943515,-138.5503686]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.8162585,-80.3153866],[98.2574559,-80.8196843]]).appendPoint([98.7443039,-66.8781822]).appendPoint([84.3031065,-66.3738845]).appendPoint([83.8162585,-80.3153866]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.1461882,-99.5036905],[97.5873856,-100.0079882]]).appendPoint([98.0742336,-86.0664861]).appendPoint([83.6330362,-85.5621884]).appendPoint([83.1461882,-99.5036905]).close().innerToCAG()
).union(
    new CSG.Path2D([[82.4761179,-118.6919944],[96.9173153,-119.1962921]]).appendPoint([97.4041633,-105.25479]).appendPoint([82.9629659,-104.7504923]).appendPoint([82.4761179,-118.6919944]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.8060476,-137.8802983],[96.247245,-138.384596]]).appendPoint([96.734093,-124.4430939]).appendPoint([82.2928956,-123.9387962]).appendPoint([81.8060476,-137.8802983]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.1359773,-157.0686022],[95.5771747,-157.5728999]]).appendPoint([96.0640227,-143.6313978]).appendPoint([81.6228253,-143.1271001]).appendPoint([81.1359773,-157.0686022]).close().innerToCAG()
).union(
    new CSG.Path2D([[142.9159222,-152.9110862],[138.4506266,-166.6538529]]).appendPoint([151.717865,-170.96464]).appendPoint([156.1831606,-157.2218733]).appendPoint([142.9159222,-152.9110862]).close().innerToCAG()
).union(
    new CSG.Path2D([[185.3395345,-166.8986071],[177.259197,-178.8782001]]).appendPoint([188.8242711,-186.6789411]).appendPoint([196.9046086,-174.6993481]).appendPoint([185.3395345,-166.8986071]).close().innerToCAG()
).union(
    new CSG.Path2D([[143.9808464,-83.2273312],[158.395647,-84.2353123]]).appendPoint([159.3687498,-70.3192938]).appendPoint([144.9539492,-69.3113127]).appendPoint([143.9808464,-83.2273312]).close().innerToCAG()
).union(
    new CSG.Path2D([[142.6415221,-102.380561],[157.0563227,-103.3885421]]).appendPoint([158.0294255,-89.4725236]).appendPoint([143.6146249,-88.4645425]).appendPoint([142.6415221,-102.380561]).close().innerToCAG()
).union(
    new CSG.Path2D([[141.3021978,-121.5337908],[155.7169984,-122.5417719]]).appendPoint([156.6901012,-108.6257534]).appendPoint([142.2753006,-107.6177723]).appendPoint([141.3021978,-121.5337908]).close().innerToCAG()
).union(
    new CSG.Path2D([[139.9628735,-140.6870206],[154.3776741,-141.6950017]]).appendPoint([155.3507769,-127.7789832]).appendPoint([140.9359763,-126.7710021]).appendPoint([139.9628735,-140.6870206]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.8276166,-81.8880069],[139.2424172,-82.895988]]).appendPoint([140.21552,-68.9799695]).appendPoint([125.8007194,-67.9719884]).appendPoint([124.8276166,-81.8880069]).close().innerToCAG()
).union(
    new CSG.Path2D([[123.4882923,-101.0412367],[137.9030929,-102.0492178]]).appendPoint([138.8761957,-88.1331993]).appendPoint([124.4613951,-87.1252182]).appendPoint([123.4882923,-101.0412367]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.148968,-120.1944665],[136.5637686,-121.2024476]]).appendPoint([137.5368714,-107.2864291]).appendPoint([123.1220708,-106.278448]).appendPoint([122.148968,-120.1944665]).close().innerToCAG()
).union(
    new CSG.Path2D([[120.8096437,-139.3476963],[135.2244443,-140.3556774]]).appendPoint([136.1975471,-126.4396589]).appendPoint([121.7827465,-125.4316778]).appendPoint([120.8096437,-139.3476963]).close().innerToCAG()
).union(
    new CSG.Path2D([[121.2010627,-148.7082955],[118.6918465,-162.9387676]]).appendPoint([132.4299147,-165.3611597]).appendPoint([134.9391309,-151.1306876]).appendPoint([121.2010627,-148.7082955]).close().innerToCAG()
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

        