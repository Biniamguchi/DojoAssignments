let mongoose = require("mongoose");
let UserController = require("../controllers/UserController.js");

module.exports = function(app){
    app.get("/",function(req,res){
        res.render("index",{errors:req.app.locals.errs});
    });

    app.get("/quotes",function(req,res){
        UserController.show(req,res);
    });

    app.post("/quotes",function(req,res){
        UserController.create(req,res);
    });
}
