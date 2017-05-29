$(document).ready(function(){
    let rand = Math.random;
    let flr  = Math.floor;
    let rndNum = function(){return flr(rand()*4);}
    var img  = "cat";

    $('#puzzleDiv img').click(function(){
        if(!this.rndImg){
            this.rndImg = function(){
                if(!this.cnt){
                    this.cnt = rndNum();
                }else{
                    if(this.cnt >= 4){
                        this.cnt = 0;
                        img = img == "cat" ? "ninja":"cat";
                    }else{
                        this.cnt++;
                    }
                }
                $(this).attr("src","img/"+img+this.cnt+".png");
            }
            this.rndImg();
        }else{
            this.rndImg();
        }
    });
});
