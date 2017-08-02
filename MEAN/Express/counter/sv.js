let express = require("express");
let app     = express();
let bParse  = require("body-parser");
let session = require("express-session");

app.use(express.static(__dirname+"/static"));
app.use(bParse.urlencoded({extended:true}));
app.use(session({secret:"hideme"}));
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.get("/",function(req,res){
    if(req.session.cnt != null || req.session.cnt != undefined){
        req.session.cnt++;
    }else{
        req.session.cnt = 0;
    }

    res.render("index",{cnt:req.session.cnt});
})

app.get("/counttwo",function(req,res){
    if(req.session.cnt != null || req.session.cnt != undefined){
        req.session.cnt++;
    }else{
        req.session.cnt = 0;
    }

    res.redirect("/")
})

app.get("/reset",function(req,res){
    if(req.session.cnt != null || req.session.cnt != undefined){
        req.session.cnt = 0;
    }
})
app.listen(8080);
