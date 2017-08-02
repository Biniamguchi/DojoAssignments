let app = require("express")();
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

let sv = app.listen(8080,function(){});
let io = require("socket.io").listen(sv);
io.sockets.on("connection",function(socket){
    socket.on("posting_form",function(data){
        let res = "<h3>You emitted the following information to the server:<br>";
        for(key in data){
            res += key+":"+data[key]+"<br>";
        }
        res += "</h3>"

        socket.emit("updated_message",res);
        socket.emit("random_number","<h3>Your lucky number emitted by the server is: <br>"+Math.floor(Math.random()*1000+1)+"</h3>")
    })
});

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
})
