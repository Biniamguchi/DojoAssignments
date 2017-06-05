function Item(){ // Base item. Pac dots by default
    var item = new Sprite();
    item.cw = 48;
    item.ch = 48;
    item.setImage(8,0);
    item.value = 10;

    item.pickup = function(ent){

    }

    item.collide = function(ent){
        if(ent.class == "Player"){
            ent.score += item.value;
            item.pickup(ent);
            item.remove();
        }
    }

    return item;
}
ents.valid["Item"] = Item;
