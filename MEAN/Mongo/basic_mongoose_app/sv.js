let express  = require("express");
let bParse   = require("body-parser");
let mongoose = require("mongoose");
let app      = express();

mongoose.connect("mongodb://localhost/basic_mongoose");
mongoose.Promise = global.Promise;
let UserSchema = new mongoose.Schema({
    name:String,
    age:Number
});
mongoose.model("User",UserSchema);
let User = mongoose.model("User");

app.use(express.static(__dirname + "/static"));
app.use(bParse.urlencoded({ extended: true }));
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.get("/",function(req,res){
    User.find({},function(err,users){
        if(err){
            res.render("index")
        }else{
            res.render("index",{
                users:users
            });
        }
    })
})

app.post("/users",function(req,res){
    let user = new User({
        name:req.body.name,
        age:req.body.age
    });

    user.save(function(err){
        if(err){
            console.log(`ERROR: ${err}`);
        }else{
            console.log(`Successfully saved user`);
        }
    })

    res.redirect("/");
})

let sv = app.listen(8080,function(){
    console.log("Listening on 8080.");
});
