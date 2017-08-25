let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

mongoose.model("Poll",new Schema({
    question:{type:String,minlength:8,required:true},
    
    one:{type:String,minlength:3,required:true},
    oneVotes:{type:Number,required:false},

    two:{type:String,minlength:3,required:true},
    twoVotes:{type:Number,required:false},
    
    three:{type:String,minlength:3,required:true},
    threeVotes:{type:Number,required:false},
    
    four:{type:String,minlength:3,required:true},
    fourVotes:{type:Number,required:false},
    
    _user:{type:ObjectId,ref:"User"},
},{timestamps:true}));
