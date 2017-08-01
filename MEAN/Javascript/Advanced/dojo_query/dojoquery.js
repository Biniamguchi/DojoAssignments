(function(){
    return function $Dojo(id){
        let elem = document.getElementById(id);

        elem.click = function(e,cb){
            cb(e);
        }
        elem.addEventListener("click",elem.click)
    }
})

$Dojo("test").click(function(e){
    console.log("Too bad it wont fire. Im coming back to this.");
})
