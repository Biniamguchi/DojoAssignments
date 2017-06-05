function Player(){
    var pl   = new NPC();    // Derive from NPC.
    pl.score = 0;
    pl.lives = 3;
    pl.setImage(0,7);
    var input = new Input(); // keep input private.
    var self  = pl;

    pl.collide = function(ent){
        if(ent.class == "Ghost"){
            if(!ent.isAfraid){
                pl.alive = false;
                pl.lives--;
            }
        }
    }

    // tick calls any move functions from "Moving" class. Move logic goes here.
    pl.move = function(xVel,yVel){
        if(input.keyDown("d")){
            self.dir = 1;
        } else if(input.keyDown("a")){
            self.dir = 2;
        } else if(input.keyDown("s")){
            self.dir = 3;
        } else if(input.keyDown("w")){
            self.dir = 4;
        } else if(input.keyDown(" ")){
            self.dir = 0;
            self.alive = false;
        }
    }

    // render calls any animate functions from "Sprite" class. Lets render them here.
    pl.animate = function(dir){
        if(!pl.alive){
            pl.xV = 0;
            pl.yV = 0;
            pl.playAnim(4,14,1,7,7,1);
        }else{
            switch(dir){
                case 1:
                    pl.playAnim(4,6,2,3,3,1);
                    break;
                case 2:
                    pl.playAnim(0,2,2,3,3,1);
                    break;
                case 3:
                    pl.playAnim(5,7,2,3,3,1);
                    break;
                case 4:
                    pl.playAnim(1,3,2,3,3,1);
                    break;
            }
        }
    }
    return self;
}
ents.valid["Player"] = Player;
