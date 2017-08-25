let User = require("mongoose").model("User");

module.exports = {
    register(req,res){
        User.findOne({_email:req.body.email},(err,user)=>{
            if(err){console.log(err)}else{
                if(user){res.json("A user with this email already exists.")}else{
                    let user = new User(req.body);
                    user.save((err)=>{
                        if(err){
                            res.json({});
                        }else{
                            req.session.user = user;
                            res.json({user:req.session.user});
                        }
                    })
                }
            }
        })
    },

    login(req,res){
        User.findOne({email:req.body.email},(err,user)=>{
            err?console.log(err):err;

            if(user){
                if(user.password == req.body.password){
                    req.session.user = user;
                    res.json({user:req.session.user});
                }else{
                    res.json("Invalid Credentials.")
                }
            }else{
                res.json("User Not Found.")
            }
        })
    },

    logout(req,res){
        req.session.user = null;
    },

    session(req,res){
        if(req.session.user){
            res.json({user:req.session.user});
        }else{  
            res.json({});
        }
    },
}
