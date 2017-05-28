var daysUntilMyBirthday = 60;

while(daysUntilMyBirthday >= 0){
    if(daysUntilMyBirthday > 30){
        console.log(daysUntilMyBirthday,"long, dreary days until my birthday");
    }else if(daysUntilMyBirthday > 5 && daysUntilMyBirthday < 30){
        console.log("ONLY",daysUntilMyBirthday," DAY(S) LEFT UNTIL MY BIRTHDAY!");
    }else if (daysUntilMyBirthday > 0 && daysUntilMyBirthday < 5) {
        console.log("AHHHH!",daysUntilMyBirthday," DAYS LEFT!");
    }else if(daysUntilMyBirthday == 0){
        console.log("ITS MY BIRTHDAY!!!!!!!!!!!!!");
    }

    daysUntilMyBirthday--;
}
