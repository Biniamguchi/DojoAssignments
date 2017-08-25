let mongoose           = require("mongoose");
let UserController     = require("../controllers/UserController.js");
let QuestionController = require("../controllers/QuestionController.js");
let AnswerController   = require("../controllers/AnswerController.js");

module.exports = function(app){
    app.post("/api/users/login",UserController.login);
    app.post("/api/users/new",UserController.register);

    app.post("/api/questions/new",QuestionController.create);
    app.get("/api/questions",QuestionController.all);
    app.get("/api/questions/:id",QuestionController.get)

    app.post("/api/questions/:id/answers/new",AnswerController.create);
    app.get("/api/answers",AnswerController.all);
    app.get("/api/answers/:id",AnswerController.get)
    app.post("/api/answers/:id/like",AnswerController.like)

    app.all("*",(req,res,next)=>{
        res.sendFile(path.resolve("./client/public/dist/index.html"))
    });
}
