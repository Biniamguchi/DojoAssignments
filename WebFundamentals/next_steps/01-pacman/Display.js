function Display(title,w,h){
    let cvs    = document.createElement('canvas');
    cvs.id     = title;
    cvs.width  = w;
    cvs.height = h;
    let ctx    = cvs.getContext('2d');

    this.center = function(){
        cvs.style.marginLeft = window.innerWidth/2-cvs.width/2+"px";
        cvs.style.marginTop  = window.innerHeight/2-cvs.height/2+"px";
    }

    this.clear = function(){ // Reset draws / buffer swap.
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0,0,w,h);
    }

    this.getContext = function(){
        return ctx;
    }

    document.body.appendChild(cvs);
}
