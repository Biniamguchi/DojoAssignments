function Game(title,w,h){
    var self    = this;
    var display = new Display(title,w,h);
    var ctx     = display.getContext();
    var tick    = 1000.0/66.0;
    var interval;

    this.start = function(){
        interval = setInterval(self.run,tick);
        new Level(w,h);
    }

    this.stop = function(){
        clearInterval(interval);
    }

    this.run = function(){ // Game Loop
        self.tick();
        self.render();
    }

    this.tick = function(){
        ents.tick();
    }

    this.render = function(){
        display.center();
        display.clear();
        ents.render(ctx); // Pass all ents the context.
    }

    this.start();
}
