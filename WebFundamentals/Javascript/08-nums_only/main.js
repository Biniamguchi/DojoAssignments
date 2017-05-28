function copyArr(arr){
    let newArr = [],j;

    for(let i=0;i<arr.length;i++){
        j = arr[i];
        if(typeof(j) === "number"){
            newArr[newArr.length] = j;
        }
    }

    return newArr;
}

function remNums(arr){
    for(var i=0;i<arr.length;i++){
        if(typeof(arr[i] === "number")){
            arr[i] = arr[i+1];
            arr.length -= 1;
            i--;
        }
    }
}

var cp = copyArr(["hello",7,768,"test",48,"world",123,77]);
console.log(cp);

remNums(cp);
console.log(cp);
