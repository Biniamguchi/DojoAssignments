let mkCard = function(data){
    var name  = "<h1 class=\"userName\">"+data[0]+" "+data[1]+"</h1>";
    var info  = "<h2 class=\"show\">Click for Description!</h2>";
    var desc  = "<p class=\"hide fontMain\">"+data[2]+"</p>";

    //Append the div, including the users info
    $('.cards').append('<div class="black card">'+name+info+desc+"</div>");
    $('.cards').children().last().children('.hide').toggle(); // Hide the desc immediately.
    $('.cards').children().last().click(function(){
        if(this.isFlipped){
            // hide desc, show name + info
            $(this).children().show();
            $(this).children('.hide').hide();
            this.isFlipped = false;
        }else{
            // show desc, hide name + info;
            $(this).children().hide();
            $(this).children('.hide').show();
            this.isFlipped = true;
        }
    });
}

$(document).ready(function(){
    $('form').submit(function(){
        var data = $('.userInfo');
        for(var i=0;i<data.length;i++){
            data[i] = data[i].value;
            if(data[i] == "" || data[i] == undefined){ // Dont allow blank cards/values.
                return;
            }
        }
        mkCard(data);

        return false;
    });
});
