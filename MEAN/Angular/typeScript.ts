let myNum:number = 5;
let myString:string = "Hello Universe";
let myArr:Array<number> = [1,2,3,4];
var myObj:Object = { name:'Bill'};
var anythingVariable:any = "Hey";
var anythingVariable:any = 25; 
let arrayOne:Array<boolean> = [true, false, true, true]; 
let arrayTwo:Array<any> = [1, 'abc', true, 2];
var myObj:Object = { x: 5, y: 10 };

class MyNode{
    val:number;
    _priv:number;

    constructor(val){
        this.val = val;
    }
    doSomething(){
        this._priv = 10;
    };
};

let myNodeInstance:MyNode = new MyNode(1); // Yay Object types ;D
console.log(myNodeInstance.val);

function myFunction():void{
    console.log("Hello World");
    return;
}

function sendingErrors():never{
    throw new Error('Error message');
}
