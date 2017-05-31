$(document).ready(function(){
    let mkImg = function(num){
        var src = "http://pokeapi.co/media/img/"+num+".png";
        var img = "<img src="+"\""+src+"\""+" >";
        $('body').append(img);
    }

    for(var i=1;i<=151;i++){mkImg(i);}
});
