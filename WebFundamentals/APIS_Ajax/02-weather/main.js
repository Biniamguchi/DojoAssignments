$(document).ready(function(){
    let kelToF = function(kel){return Math.trunc(9/5*(kel-273)+32);}
    let key  = "90624cc9255f43fb0afc02b5a0ca2d75";

    $('form').submit(function(){
        let kids = $(this).children();
        let loc  = $(kids[0]).val();       // Get users input / location.
        let url  = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`;
        let fahr;

        if(loc == ""){return;}
        $.get(url,function(data){
            fahr = kelToF(data.main.temp); // Convert kelvin to fahrenheit, cause i dont understand kelvin :/
            $(kids[2]).html(data.name);    // form h1.
            $(kids[3]).html(`Temperature: ${fahr}°F`);
        },'json');

        return false;
    });
});
