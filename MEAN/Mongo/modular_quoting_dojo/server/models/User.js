let mongoose = require("mongoose");

let User = mongoose.model("User",new mongoose.Schema({ // Way easier to have the whole model created/returned in one line.
    name:{type:String,required:true,minlength:1,maxlength:255},
    quote:{type:String,required:true,minlength:1,maxlength:255} // One quote per user for now it seems.
},{timestamps:true}));
