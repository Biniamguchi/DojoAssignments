let express = require("express");
let app = express();
let sv  = app.listen(8080,function(){});
let io  = require("socket.io").listen(sv);
let session = require("express-session");
app.use(express.static(__dirname + "/static"));
app.use(session({secret:"hideme"}));
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

let users = {};

io.sockets.on("connection",function(socket){
    socket.emit("OnConnect-Sv",{id:socket.id});

    socket.on("OnConnect-Cl",function(data){
        users[data.id] = data;
        socket.broadcast.emit("UserConnect-Sv",data);
        socket.emit("AllUsers-Sv",users);
    })

    socket.on("disconnect",function(){
        let user = users[socket.id];
        delete users[socket.id];
        socket.broadcast.emit("OnDisconnect-Sv",user);
    })
})

app.get("/",function(req,res){
    res.render("index");
})
