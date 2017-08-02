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
    let dojos = {
        locations:[
            "D.C.",
            "Silicon Valley",
            "Mountain View",
            "Seattle"
        ],

        languages:[
            "C",
            "C++",
            "Java",
            "HTML/CSS/Javascript",
            "Python",
            "Lua"
        ]
    };

    res.render("index",{dojos:dojos});
});

app.post("/result",function(req,res){
    let data = {
        name:req.body.name,
        location:req.body.loc,
        language:req.body.lang,
        comment:req.body.comment
    }

    res.render("result",{data:data}); // Render in post is bad, is there another way?
})
app.listen(8080);
