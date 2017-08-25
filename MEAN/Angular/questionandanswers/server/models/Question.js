let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let Question = mongoose.model("Question",new Schema({
    text:{type:String,required:true},
    answers:[{type:ObjectId,ref:"Answer"}],
    _user:{type:ObjectId,ref:"User"}
},{timestamps:true}));
