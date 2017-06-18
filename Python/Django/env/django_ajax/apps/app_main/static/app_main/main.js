$(document).ready(function(e){

    $('.btnMain').click(function(e){
        $.get("/message",function(response){
            $('.response').html(response);
        })
    })
})