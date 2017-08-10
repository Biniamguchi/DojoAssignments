export class Quote{
    public text:string;
    public author:string;
    public votes:number = 0;

    constructor(){
        this.text   = "";
        this.author = "";
        this.votes  = 0;
    }
}
