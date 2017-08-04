let express  = require("express");
let mongoose = require("mongoose");
let bParse   = require("body-parser");
let port     = 8080
let app      = express();
app.use(express.static(__dirname + "/static"));
app.use(bParse.urlencoded({ extended: true }));
app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.listen(port);

mongoose.connect("mongodb://localhost/quoting_dojo");
mongoose.Promise = global.Promise;
let User = mongoose.model("User",new mongoose.Schema({ // Way easier to have the whole model created/returned in one line.
    name:{type:String,required:true,minlength:1,maxlength:255},
    quote:{type:String,required:true,minlength:1,maxlength:255} // One quote per user for now it seems.
},{timestamps:true}));

app.get("/",function(req,res){
    res.render("index",{errors:req.app.locals.errs});
});

app.get("/quotes",function(req,res){
    User.find({},function(err,users){
        if(err){
            res.redirect("/");
        }else{
            res.render("quotes",{users:users});
        }
    })
});

app.post("/quotes",function(req,res){
    let user = new User({
        name:req.body.name,
        quote:req.body.quote
    });

    user.save(function(err){
        if(err){
            req.app.locals.errs = user.errors; // Better than rendering here...
            res.redirect("/");
        }else{
            req.app.locals.errs = "";
            res.redirect("/quotes");
        }
    })
});
