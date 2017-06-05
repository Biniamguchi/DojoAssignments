function Moving(){
    var self = new Sprite();
    var that = self;

    self.xV     = 0;
    self.yV     = 0;
    self.acc    = 0.25;
    self.maxAcc = 2.0;
    self.dir    = 0;

    self.move = function(xVel,yVel){}

    self.collide = function(ent){
        // if(ent.class == "Player"){
        //     self.xV = 0;
        //     self.yV = 0;
        // }

        // if(ent.class == "Wall"){
        //     self.x = ent.x;
        //     self.y = ent.y;
        // }
    }

    self.tick = function(delta){
        that.x += that.xV;
        that.y += that.yV;

        if(that.dir == 1){         // R
            if(that.xV < that.maxAcc){that.xV += that.acc;}
            that.yV = 0;
        } else if(that.dir == 2){ // L
            if(that.xV > -that.maxAcc){that.xV -= that.acc;}
            that.yV = 0;
        } else if(that.dir == 3){  // D
            if(that.yV < that.maxAcc){that.yV += that.acc;}
            that.xV = 0;
        } else if(that.dir == 4){ // U
            if(that.yV > -that.maxAcc){that.yV -= that.acc;}
            that.xV = 0;
        }

        /*
            Callback for subclasses of Moving,
            since most will keep this logic.
            Lets pass velocities if we wanna change things anyway.
        */
        that.move(that.xV,that.yV);
    }
    return self;
}
