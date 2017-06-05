function Fruit(){
    var fruit = new Item();
    fruit.cw = 96;
    fruit.ch = 96;
    fruit.setImage(util.randNum(5),5);
    fruit.value = 200;

    fruit.pickup = function(ent){
        
    }

    return fruit;
}
ents.valid["Fruit"] = Fruit;
