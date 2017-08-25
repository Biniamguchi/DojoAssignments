let path               = require("path");
let mongoose           = require("mongoose");
let UserController     = require("../controllers/UserController.js");
let PollController     = require("../controllers/PollController.js");

module.exports = function(app){
    app.post("/api/users/register",UserController.register);
    app.post("/api/users/login",UserController.login);
    app.post("/api/users/logout",UserController.logout);
    app.post("/api/users/session",UserController.session);

    app.post("/api/polls/new",PollController.create);
    app.get("/api/polls/query/:query",PollController.query);
    app.get("/api/polls",PollController.all);
    app.get("/api/polls/:id",PollController.get);
    app.post("/api/polls/:id/delete",PollController.delete);
    app.post("/api/polls/:id/votes/:voteId",PollController.vote);

    app.all("*",(req,res,next)=>{
        res.sendFile(path.resolve("./client/public/dist/index.html"))
    });
}
