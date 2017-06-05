function Ball(){
    var ball   = new Item();
    ball.setImage(10,0);
    ball.w     = 16;
    ball.h     = 16;
    ball.value = 0;
    ball.animRate = .5;
    
    ball.animate = function(){
        ball.playAnim(9,10,1,0,0,1);
    }

    ball.pickup = function(ent){
        for(var i=0;i<ents.active.length;i++){
            var j = ents.active[i];
            if(j.class == "Ghost"){
                j.isAfraid  = true;
                j.scareTime = util.getTime();
            }
        }
    }

    return ball;
}
ents.valid["Ball"] = Ball;