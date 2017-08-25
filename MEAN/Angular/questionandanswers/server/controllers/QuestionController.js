let User      = require("mongoose").model("User");
let Question  = require("mongoose").model("Question");
let ObjectId  = require("mongoose").Types.ObjectId;

module.exports = {
    create:function(req,res){
        // set question._user via client first, then User.findOne({_id:question._user},cb)
        let question = new Question(req.body);

        User.findOne({_id:question._user},function(err,user){
            
            user.questions.push(question);
            user.save((err)=>{
                if(err){console.log(err);}else{
                    question.save((err)=>{
                        if(err){console.log(err);}else{
                            console.log("QUESTION SUCCESS");
                            res.json({question:question});
                        }
                    })
                }
            })
        })
    },

    get:function(req,res){
        console.log(req.params);

        Question.findOne({_id:req.params.id})
        .populate("answers")
        .populate('_user')
        .exec(function(err,question){
            if(err){console.log(err);}else{
                res.json({question:question});
            }
        })
    },

    all:function(req,res){
        Question.find({})
        .populate("_user")
        .populate("answers")
        .exec(function(err,questions){
            if(err){console.log(err);}else{
                res.json({questions:questions});
            }
        })
    },
}
