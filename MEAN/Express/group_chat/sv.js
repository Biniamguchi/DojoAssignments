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
let log   = [];

io.sockets.on("connection",function(socket){
    socket.emit("OnConnect-Sv",{id:socket.id});

    socket.on("OnConnect-Cl",function(data){
        users[data.id] = data;
        log.push(`${data.username} has connected.\n`)
        socket.broadcast.emit("UserConnect-Broadcast",log[log.length-1]);
        socket.emit("UserConnect-Emit",log);
    })

    socket.on("disconnect",function(){
        let user = users[socket.id];
        log.push(`${user.username} has disconnected.\n`)
        socket.broadcast.emit("OnDisconnect-Sv",log[log.length-1]);
        delete users[socket.id];
    })

    socket.on("UserSay-Cl",function(text){
        log.push(`${users[socket.id].username}: ${text}\n`);
        io.emit("UserSay-Sv",log[log.length-1]);
    })
})

app.get("/",function(req,res){
    res.render("index");
})
