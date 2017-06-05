function Ghost(){
    var npc = new NPC();
    npc.setImage(0,6);
    npc.maxAcc    = 1.5;
    npc.isAfraid  = false;
    npc.alive     = true;
    npc.scareTime = 0;
    npc.scareDly  = 8;

    npc.collide = function(ent){
        if(ent.class == "Player"){
            if(npc.isAfraid){
                //npc.alive  = false;
                npc.remove();
            }
        }
    }

    npc.animate = function(dir){
        if(!npc.alive){
            switch(dir){
                case 1:
                    npc.playAnim(8,9,1,9,9,1);
                    break;
                case 2:
                    npc.playAnim(12,13,1,9,9,1);
                    break;
                case 3:
                    npc.playAnim(10,12,1,9,9,1);
                    break;
                case 4:
                    npc.playAnim(14,15,1,9,9,1);
                    break;
            }
        }else{
            if(!npc.isAfraid){
                switch(dir){
                    case 1:
                        npc.playAnim(0,1,1,6,6,1);
                        break;
                    case 2:
                        npc.playAnim(4,5,1,6,6,1);
                        break;
                    case 3:
                        npc.playAnim(2,3,1,6,6,1);
                        break;
                    case 4:
                        npc.playAnim(6,7,1,6,6,1);
                        break;
                }
            }else{
                npc.playAnim(8,9,1,4,4,1);
            }
        }
    }

    npc.move = function(xVel,yVel){

        if(!npc.alive){
            // Run back to center
        }else{
            if(!npc.isAfraid){
                if(npc.x < pl.x){
                    npc.dir = 1;
                }else if(npc.x > pl.x+pl.w){
                    npc.dir = 2;
                }else if(npc.y < pl.y){
                    npc.dir = 3;
                }else if(npc.y > pl.y+pl.h){
                    npc.dir = 4;
                }
            }else{
                if(npc.x < pl.x){
                    npc.dir = 2;
                }else if(npc.x > pl.x+pl.w){
                    npc.dir = 1;
                }else if(npc.y < pl.y){
                    npc.dir = 4;
                }else if(npc.y > pl.y+pl.h){
                    npc.dir = 3;
                }
            }

            // Stop being scared you panzys.
            if(util.getTime()-npc.scareTime >= npc.scareDly){
                npc.isAfraid  = false;
                npc.scareTime = util.getTime();
            }
        }
    }

    return npc;
}
ents.valid["Ghost"] = Ghost;
