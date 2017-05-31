$(document).ready(function(){
    let mkImg = function(num){
        var src = "src="+"\'http://pokeapi.co/media/img/"+num+".png\'";
        var id  = "id=\'"+num+'\'';
        var img = "<img "+id+src+">";

        $('.pokeDex').append(img);
    }

    let addLi = function(txt){
        $("#typesList").append("<li>"+txt+"</li>");
    }

    for(var i=1;i<=151;i++){mkImg(i);}

    $('.pokeDex img').click(function(){
        var id      = $(this).attr('id');
        var img     = $(this).attr('src');
        var url     = "http://pokeapi.co/api/v1/pokemon/"+id+"/";

        $.get(url,function(data){
            // update values
            $('#name').html(data.name);
            $('#pokeImg').attr("src",img);
            $('#types').html("Types:");
            $('#height').html("Height: "+data.height);
            $('#weight').html("Weight: "+data.weight);
            // Remove old li's from ul "#typesList" and append these new ones.
            $("#typesList").children().remove();
            // append the types as list items under the parent ul "#typesList".
            for(k in data.types){addLi(data.types[k].name);}
        },'json');
    });
});
