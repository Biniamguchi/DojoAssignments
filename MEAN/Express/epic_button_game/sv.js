let app = require("express")();
let sv = app.listen(8080,function(){});
let io = require("socket.io").listen(sv);
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

let count = 0;

io.sockets.on("connection",function(socket){
    io.emit("onInitCount",count);

    socket.on("onCount-Cl",function(){
        io.emit("onCount-Sv",count++);
    })

    socket.on("onReset-Cl",function(){
        count = 0;
        io.emit("onReset-Sv",count);
    })
});

app.get("/",function(req,res){
    res.render("index");
})
