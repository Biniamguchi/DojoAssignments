var util = {
    randNum:function(num){
        return Math.floor(Math.random()*num);
    },

    getTime:function(){
        return new Date().getTime()/1000.0;
    },

    distX:function(a,b){
        return ((b.x-a.x)^2)^0.5;
    },

    distY:function(a,b){
        return ((b.y-a.y)^2)^0.5
    },

    AABB:function(a,b){
        return  a.x < b.x+b.w &&
                a.y < b.y+b.h &&
                b.x < a.x+a.w &&
                b.y < a.y+a.h
    }
};
