var hour   = 8;
var min    = 50;
var period = "AM";

console.log("Its almost 9:00 in the morning.");

hour   = 7;
min    = 15;
period = "PM";

if(min < 30){
    console.log("Its just after ",hour,period);
}else if(min > 30){
    console.log("Its almost ",hour,period);
}else if(min == 15){
    console.log("Its quarter after ",hour,period);
}else if(min == 5){
    console.log("Its",min,"after ",hour,period);
}else if(hour == 12 && period == "PM"){
    console.log("Its noon");
}else if(hour >= 12 && period == "PM"){
    console.log("Its ",hour," in the afternoon");
}else if(hour == 12 && period == "AM"){
    console.log("Its midnight.");
}
