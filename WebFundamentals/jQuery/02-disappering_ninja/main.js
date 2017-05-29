function doNinjas(){
    var cont = document.getElementById("cont");

    for(var i=0;i<8;i++){
        var nin = document.createElement("img");
        nin.src = "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png";
        cont.appendChild(nin);
    }

    var btn = document.createElement("button");
    btn.id  = "restore";
    cont.appendChild(btn);
}

$(document).ready(function(){
    $('#restore').text("Restore"); // Could've btn.innerHTML'd in doNinjas, but we're doing jQuery, so why not?
    $('#restore').css({"background":"linear-gradient(grey,white)"});
    $('#restore').hover(function(){
        $(this).css({
            "background":"linear-gradient(white,grey)",
            "color":"teal"
        });
    },function(){
        $(this).css({
            "background":"linear-gradient(grey,white)",
            "color":"black"
        });
    })

    $('#cont img').click(function(e){
        $(this).hide();
    });

    $('#restore').click(function(e){
        $('#cont img').show();
    });
})
