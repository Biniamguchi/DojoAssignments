let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let Answer = mongoose.model("Answer",new Schema({
    text:{type:String,required:true},
    _question:{type:ObjectId,ref:"Question"},
    _user:{type:ObjectId,ref:"User"},
    likes:{type:Number,required:false}
},{timestamps:true}));
