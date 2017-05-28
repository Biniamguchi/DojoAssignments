function slotMachine(quarters,playTo){
    let rand  = Math.random;
    let flr   = Math.floor;
    let chance,payout;

    while(quarters > 0){
        chance = flr(rand()*100+1);
        payout = flr(rand()*50+50+1);

        if(chance == 100){
            console.log("You've won "+payout+" quarters with "+quarters+" remaining quarters with a grand total of "+payout+quarters+" quarters.");
            payout += quarters;
            if(!playTo){return payout;}
        }
        quarters--;
    }
    return 0;
}

var slotRes = slotMachine(25);
console.log(slotRes);
