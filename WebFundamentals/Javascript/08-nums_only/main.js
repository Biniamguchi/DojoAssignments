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
    var j,k;

    for(var i=0;i<arr.length;i++){
        j = arr[i];
        if(typeof(j) === "number"){
            for(var k=i;k<arr.length+k;k++){arr.length -= 1;}
        }
    }
}

var cp = copyArr(["hello",7,768,"test",48,"world",123,77]);
console.log(cp);

remNums(cp);
console.log(cp);
