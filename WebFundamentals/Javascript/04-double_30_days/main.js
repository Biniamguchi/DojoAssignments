var salary = 0.01;

var day            = 0;
var daysTilTenThou = 0;
var daysTilBil     = 0;
var daysTilInf     = 0;

while(salary != Infinity){
    salary *= 2;

    if(daysTilBil == 30){
        console.log("Salary after 30 days: ",salary);
    }

    if(salary < 10000){daysTilTenThou++;}
    if(salary < 1000000000){daysTilBil++;}
    daysTilInf++;
}
console.log("Days until $10,000: ",daysTilTenThou);
console.log("Days until 1Bil: ",daysTilBil);
console.log("Days until Infinite Money:",daysTilInf);
