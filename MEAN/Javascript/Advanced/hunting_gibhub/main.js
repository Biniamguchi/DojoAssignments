$(document).ready(function(e){

    $("#userInfo").click(function(e){
        $.get("https://api.github.com/users/morrantho",function(data){
            $("#username").html("Username: "+data.login);
        })
    })
})
