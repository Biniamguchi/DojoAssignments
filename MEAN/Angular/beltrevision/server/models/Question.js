let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

mongoose.model("Question",new Schema({
    title:{type:String,minlength:1,required:true},
    description:{type:String,minlength:1,required:false},
    _user:{type:ObjectId,ref:"User"},
    answers:[{type:ObjectId,ref:"Answer"}]
},{timestamps:true}));
