let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

mongoose.model("User",new Schema({
    firstName:{type:String,minlength:1,required:true},
    lastName:{type:String,minlength:1,required:true},
    email:{type:String,minlength:1,required:true},
    password:{type:String,minlength:1,required:true},
    confirm:{type:String,minlength:1,required:true},
    polls:[{type:ObjectId,ref:"Poll"}]
},{timestamps:true}));
