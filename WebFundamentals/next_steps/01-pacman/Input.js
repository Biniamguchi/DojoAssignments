function Input(){
    this.keys = [];
    let self = this;

    this.keyDown = function(key){
        return self.keys[key] == true;
    }

    this.keyUp = function(key){
        return self.keys[key] == true;
    }

    $('body').keydown(function(e){
        self.keys[e.key] = true;
    });

    $('body').keyup(function(e){
        self.keys[e.key] = false;
    });
}
