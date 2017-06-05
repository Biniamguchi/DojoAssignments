let sheet = SpriteSheet("res/pacman.png");

function Sprite(){
    var sprite     = Base();
    sprite.img     = sheet;
    sprite.img.src = sheet.src;
    sprite.cx = 0; // crop x,y,w and h
    sprite.cy = 0;
    sprite.cw = 96;
    sprite.ch = 96;
    sprite.animRate = 0.1;
    sprite.time     = util.getTime();

    let aX=0,aY=0; // X and Y animation states; Might as well keep them private.
    let oldSx=0;oldSy=0;
    // save old start states, so when starting a new anim we start at
    // the appropriate image.

    /*
        Collision callback for anything thats a subclass of Sprite.
        Passes the entity it collided with.
    */
    sprite.collide = function(ent){}
    sprite.tick = function(){}

    // Sets the sprites image relative to its spritesheet.
    sprite.setImage = function(xPos,yPos){
        sprite.cx = xPos*96;
        sprite.cy = yPos*96;
    }

    // Does exactly what it says. Allows skipping images / incrementing
    sprite.playAnim = function(startX,endX,xSkip,startY,endY,ySkip){
        if(util.getTime()-sprite.time >= sprite.animRate){
            if(oldSx != startX){aX = startX;}
            if(oldSx != startY){aY = startY;}

            if(aX >= endX){
                aX = startX;
            }else if(aX < endX){
                aX += xSkip;
            }

            if(aY >= endY){
                aY = startY;
            }else if(aY < endX){
                aY += ySkip;
            }

            oldSx = startX;
            oldSy = endY;

            sprite.time = util.getTime();
            sprite.setImage(aX,aY);
        }
    }

    // callback for rendering animations
    sprite.animate = function(dir){};

    sprite.render = function(ctx){
        ctx.drawImage(sprite.img,sprite.cx,sprite.cy,sprite.cw,sprite.ch,
                      sprite.x,sprite.y,sprite.w,sprite.h
        );

        /*
            Pass direction, cause thats
            probably all we care about.
        */
        sprite.animate(sprite.dir);
    }
    return sprite;
}
ents.valid["Sprite"] = Sprite;
