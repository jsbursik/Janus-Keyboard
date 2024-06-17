function wall_extrude_5_outline_fn(){
    return new CSG.Path2D([[32.6,-159.1],[32.6,-64.1]]).appendArc([40.9,-55.8],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([78.3,-55.8]).appendArc([78.4672974,-55.8016862],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([82.6707075,-55.8864287]).appendArc([82.7930759,-55.8897986],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([120.1702928,-57.1950397]).appendArc([120.3374295,-57.2025635],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([124.5353219,-57.4339513]).appendArc([124.6574982,-57.4415898],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([143.810097,-58.7808701]).appendPoint([186.2072001,-61.7455643]).appendArc([193.9080029,-70.6043246],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([188.7694241,-144.0894247]).appendPoint([193.729488,-154.796143]).appendPoint([206.9004289,-163.6800548]).appendArc([209.1401397,-175.2023678],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([193.8741734,-197.8350935]).appendArc([182.2618994,-200.0132614],{"radius":8.3,"clockwise":true,"large":false}).appendPoint([166.6877029,-189.2060609]).appendPoint([150.0484619,-181.1208462]).appendPoint([133.8546286,-175.8591507]).appendPoint([115.276224,-172.6665565]).appendPoint([40.3160315,-167.3794312]).appendArc([32.6,-159.1],{"radius":8.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[34.6,-159.1],[34.6,-64.1]]).appendArc([40.9,-57.8],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3,-57.8]).appendArc([78.4269848,-57.8012799],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([82.6303949,-57.8860224]).appendArc([82.7232769,-57.8885803],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([120.1004938,-59.1938214]).appendArc([120.2273566,-59.1995322],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([124.425249,-59.43092]).appendArc([124.5179852,-59.4367179],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([143.6709707,-60.7760252]).appendPoint([186.0676871,-63.7406924]).appendArc([191.9128748,-70.4648116],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([186.7384016,-144.4632261]).appendPoint([192.1490437,-156.1425557]).appendPoint([205.7820431,-165.33813]).appendArc([207.4820645,-174.083982],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([192.2160983,-196.7167077]).appendArc([183.401716,-198.3698448],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([167.7008744,-187.474763]).appendPoint([150.7980985,-179.2614934]).appendPoint([134.3354952,-173.9124693]).appendPoint([115.5165404,-170.6785379]).appendPoint([40.4567468,-165.3843875]).appendArc([34.6,-159.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}


function keyplate_extrude_1_outline_fn(){
    return new CSG.Path2D([[34.6,-159.1],[34.6,-64.1]]).appendArc([40.9,-57.8],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([78.3,-57.8]).appendArc([78.4269848,-57.8012799],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([82.6303949,-57.8860224]).appendArc([82.7232769,-57.8885803],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([120.1004938,-59.1938214]).appendArc([120.2273566,-59.1995322],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([124.425249,-59.43092]).appendArc([124.5179852,-59.4367179],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([143.6709707,-60.7760252]).appendPoint([186.0676871,-63.7406924]).appendArc([191.9128748,-70.4648116],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([186.7384016,-144.4632261]).appendPoint([192.1490437,-156.1425557]).appendPoint([205.7820431,-165.33813]).appendArc([207.4820645,-174.083982],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([192.2160983,-196.7167077]).appendArc([183.401716,-198.3698448],{"radius":6.3,"clockwise":true,"large":false}).appendPoint([167.7008744,-187.474763]).appendPoint([150.7980985,-179.2614934]).appendPoint([134.3354952,-173.9124693]).appendPoint([115.5165404,-170.6785379]).appendPoint([40.4567468,-165.3843875]).appendArc([34.6,-159.1],{"radius":6.3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[142.8850205,-153.0061919],[138.4815283,-166.5587472]]).appendPoint([151.7487667,-170.8695343]).appendPoint([156.1522589,-157.316979]).appendPoint([142.8850205,-153.0061919]).close().innerToCAG()
.union(
    new CSG.Path2D([[121.1836979,-148.8067763],[118.7092114,-162.8402868]]).appendPoint([132.4472795,-165.2626789]).appendPoint([134.921766,-151.2291684]).appendPoint([121.1836979,-148.8067763]).close().innerToCAG()
).union(
    new CSG.Path2D([[185.2836152,-166.9815109],[177.3151163,-178.7952963]]).appendPoint([188.8801904,-186.5960373]).appendPoint([196.8486893,-174.7822519]).appendPoint([185.2836152,-166.9815109]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.1045015,-80.9889468],[117.3458208,-81.4862646]]).appendPoint([117.8326687,-67.5447626]).appendPoint([103.5913494,-67.0474448]).appendPoint([103.1045015,-80.9889468]).close().innerToCAG()
).union(
    new CSG.Path2D([[102.4344312,-100.1772507],[116.6757505,-100.6745685]]).appendPoint([117.1625984,-86.7330665]).appendPoint([102.9212791,-86.2357487]).appendPoint([102.4344312,-100.1772507]).close().innerToCAG()
).union(
    new CSG.Path2D([[101.7643609,-119.3655546],[116.0056802,-119.8628724]]).appendPoint([116.4925281,-105.9213704]).appendPoint([102.2512088,-105.4240526]).appendPoint([101.7643609,-119.3655546]).close().innerToCAG()
).union(
    new CSG.Path2D([[101.0942906,-138.5538585],[115.3356099,-139.0511763]]).appendPoint([115.8224578,-125.1096743]).appendPoint([101.5811385,-124.6123565]).appendPoint([101.0942906,-138.5538585]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.9161976,-80.3188765],[98.1575169,-80.8161943]]).appendPoint([98.6443648,-66.8746923]).appendPoint([84.4030455,-66.3773745]).appendPoint([83.9161976,-80.3188765]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.2461273,-99.5071804],[97.4874466,-100.0044982]]).appendPoint([97.9742945,-86.0629962]).appendPoint([83.7329752,-85.5656784]).appendPoint([83.2461273,-99.5071804]).close().innerToCAG()
).union(
    new CSG.Path2D([[82.576057,-118.6954843],[96.8173763,-119.1928021]]).appendPoint([97.3042242,-105.2513001]).appendPoint([83.0629049,-104.7539823]).appendPoint([82.576057,-118.6954843]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.9059867,-137.8837882],[96.147306,-138.381106]]).appendPoint([96.6341539,-124.439604]).appendPoint([82.3928346,-123.9422862]).appendPoint([81.9059867,-137.8837882]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.2359164,-157.0720921],[95.4772357,-157.5694099]]).appendPoint([95.9640836,-143.6279079]).appendPoint([81.7227643,-143.1305901]).appendPoint([81.2359164,-157.0720921]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.5514112,-156.3019124],[159.3046224,-169.1097275]]).appendPoint([171.8427994,-175.225005]).appendPoint([178.0895882,-162.4171899]).appendPoint([165.5514112,-156.3019124]).close().innerToCAG()
).union(
    new CSG.Path2D([[62.075,-156.975],[76.325,-156.975]]).appendPoint([76.325,-143.025]).appendPoint([62.075,-143.025]).appendPoint([62.075,-156.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.875,-156.975],[57.125,-156.975]]).appendPoint([57.125,-143.025]).appendPoint([42.875,-143.025]).appendPoint([42.875,-156.975]).close().innerToCAG()
).union(
    new CSG.Path2D([[62.075,-80.175],[76.325,-80.175]]).appendPoint([76.325,-66.225]).appendPoint([62.075,-66.225]).appendPoint([62.075,-80.175]).close().innerToCAG()
).union(
    new CSG.Path2D([[62.075,-99.375],[76.325,-99.375]]).appendPoint([76.325,-85.425]).appendPoint([62.075,-85.425]).appendPoint([62.075,-99.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[62.075,-118.575],[76.325,-118.575]]).appendPoint([76.325,-104.625]).appendPoint([62.075,-104.625]).appendPoint([62.075,-118.575]).close().innerToCAG()
).union(
    new CSG.Path2D([[62.075,-137.775],[76.325,-137.775]]).appendPoint([76.325,-123.825]).appendPoint([62.075,-123.825]).appendPoint([62.075,-137.775]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.875,-80.175],[57.125,-80.175]]).appendPoint([57.125,-66.225]).appendPoint([42.875,-66.225]).appendPoint([42.875,-80.175]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.875,-99.375],[57.125,-99.375]]).appendPoint([57.125,-85.425]).appendPoint([42.875,-85.425]).appendPoint([42.875,-99.375]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.875,-118.575],[57.125,-118.575]]).appendPoint([57.125,-104.625]).appendPoint([42.875,-104.625]).appendPoint([42.875,-118.575]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.875,-137.775],[57.125,-137.775]]).appendPoint([57.125,-123.825]).appendPoint([42.875,-123.825]).appendPoint([42.875,-137.775]).close().innerToCAG()
).union(
    new CSG.Path2D([[144.0806028,-83.2343069],[158.2958906,-84.2283366]]).appendPoint([159.2689934,-70.3123181]).appendPoint([145.0537056,-69.3182884]).appendPoint([144.0806028,-83.2343069]).close().innerToCAG()
).union(
    new CSG.Path2D([[142.7412785,-102.3875367],[156.9565663,-103.3815664]]).appendPoint([157.9296691,-89.4655479]).appendPoint([143.7143813,-88.4715182]).appendPoint([142.7412785,-102.3875367]).close().innerToCAG()
).union(
    new CSG.Path2D([[141.4019542,-121.5407665],[155.617242,-122.5347962]]).appendPoint([156.5903448,-108.6187777]).appendPoint([142.375057,-107.624748]).appendPoint([141.4019542,-121.5407665]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.927373,-81.8949826],[139.1426608,-82.8890123]]).appendPoint([140.1157636,-68.9729938]).appendPoint([125.9004758,-67.9789641]).appendPoint([124.927373,-81.8949826]).close().innerToCAG()
).union(
    new CSG.Path2D([[123.5880487,-101.0482124],[137.8033365,-102.0422421]]).appendPoint([138.7764393,-88.1262236]).appendPoint([124.5611515,-87.1321939]).appendPoint([123.5880487,-101.0482124]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.2487244,-120.2014422],[136.4640122,-121.1954719]]).appendPoint([137.437115,-107.2794534]).appendPoint([123.2218272,-106.2854237]).appendPoint([122.2487244,-120.2014422]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.0626299,-140.6939963],[154.2779177,-141.688026]]).appendPoint([155.2510205,-127.7720075]).appendPoint([141.0357327,-126.7779778]).appendPoint([140.0626299,-140.6939963]).close().innerToCAG()
).union(
    new CSG.Path2D([[120.9094001,-139.354672],[135.1246879,-140.3487017]]).appendPoint([136.0977907,-126.4326832]).appendPoint([121.8825029,-125.4386535]).appendPoint([120.9094001,-139.354672]).close().innerToCAG()
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

        