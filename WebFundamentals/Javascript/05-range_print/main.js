function printRange(start,end,skip){
    if(!skip){skip = 1;}
    if(!end){end = 0;}

    if(start < end){
        for(;start<end;start+=skip){
            console.log(start);
        }
    }else if(start > end){
        for(;start>end;start-=skip){
            console.log(start);
        }
    }
}

printRange(0,32,8);
printRange(-10,-2,2); // Negatives.
printRange(5,10);     // Increment by 1, if not 3rd arg.
printRange(5);        // End at 0 if end range not passed.
