function Level(w,h){
    // var wallL = ents.create("Wall");
    // wallL.setImage(1,4);
    // wallL.x = -8;
    // wallL.h = h;

    // var wallR = ents.create("Wall");
    // wallR.setImage(1,4);
    // wallR.x = w-wallR.w+8;
    // wallR.h = h;

    // var wallT = ents.create("Wall");
    // wallT.x = 16;
    // wallT.y = -8;
    // wallT.w = w-wallR.w;

    // var wallB = ents.create("Wall");
    // wallB.x = 16;
    // wallB.y = h-wallB.h+8;
    // wallB.w = w-wallR.w;

    // var pl = ents.create("Player");
    // pl.x = 200;
    // pl.y = 400;

    // var score  = ents.create("Text");
    // score.text = "Score:";
    // score.x = 40;
    // score.y = 24;
    // score.tick = function(){
    //     score.text = " Score:"+pl.score;
    // }

    // var fr = ents.create("Fruit");
    // fr.x = 200;
    // fr.y = 256;

    // var item;
    // var swap = false;
    // for(var y=32;y<h-64;y+=32){
    //     for(var x=32;x<w-64;x+=32){

            
    //         if(x-y << 2 == 0){
    //             item = ents.create("Ball");
    //             swap = false;
    //         }else{
    //             item = ents.create("Item");
    //             swap = true;
    //         }
    //         item.x = x;
    //         item.y = y;
    //     }
    // }

    // for(var y=32;y<h;y*=2){
    //     for(var x=32;x<w;x*=2){
    //         var npc = ents.create("Ghost");
    //         npc.x = x;
    //         npc.y = y;
    //     }
    // }
}
ents.valid["Level"] = Level;