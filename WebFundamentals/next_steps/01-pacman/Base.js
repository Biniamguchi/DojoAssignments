function Base(){
    var self = {};
    var that = self;

    self.x   = 0;
    self.y   = 0;
    self.w   = 32;
    self.h   = 32;
    self.col = "rgb(255,0,0)"

    self.remove = function(){
        ents.remove(that.id);
    }

    self.tick = function(){

    }

    self.render = function(ctx){
        ctx.fillStyle = that.col;
        ctx.fillRect(that.x,that.y,that.w,that.h);
    }

    return self;
}
ents.valid["Base"] = Base;
