let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let User = mongoose.model("User",new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirm:{type:String,required:true},
    questions:[{type:ObjectId,ref:"Question"}],
    answers:[{type:ObjectId,ref:"Answer"}]
},{timestamps:true}));
