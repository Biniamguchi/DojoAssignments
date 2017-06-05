function Text(){
    var self   = Base();
    self.x     = 256;
    self.y     = 256;
    self.col   = "rgb(255,255,255)";
    self.font  = "16px courier";
    self.align = "center";
    self.text  = "";
    var that   = self;

    self.collide = function(){}

    self.render = function(ctx){
        ctx.fillStyle = that.col;
        ctx.font      = that.font;
        ctx.textAlign = that.align;
        ctx.fillText(that.text,that.x,that.y);
    }

    return self;
}
ents.valid["Text"] = Text;
