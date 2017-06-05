function Wall(){
    var wall = new Sprite();
    wall.setImage(0,4);
    var tC,bC,lC,rC;

    wall.collide = function(ent){
        if(ent.class != "Wall"){
            bC = (wall.y+wall.h)-ent.y;
            tC = (ent.y+ent.h)-wall.y;
            lC = (ent.x+ent.w)-wall.x;
            rC = (wall.x+wall.w)-ent.x;

            if(tC < bC && tC < lC && tC < rC){ // T
                ent.y = wall.y-wall.h;
            }

            if(bC < tC && bC < lC && bC < rC){ // B
                ent.y = wall.y+wall.h;
            }

            if(lC < rC && lC < tC && lC < bC){ // L
                ent.x = wall.x-ent.w;
            }

            if(rC < lC && rC < tC && rC < bC){ // R
                ent.x = wall.x+wall.w;
            }
        }
    }

    return wall;
}
ents.valid["Wall"] = Wall;
