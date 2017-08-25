let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;



mongoose.model("Answer",new Schema({
    description:{type:String,minlength:1,required:false},
    likes:{type:Number,required:false},
    _user:{type:ObjectId,ref:"User"},
    _question:{type:ObjectId,ref:"Question"}
},{timestamps:true}));
