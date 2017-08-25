let Answer   = require("mongoose").model("Answer");
let Question = require("mongoose").model("Question");
let User     = require("mongoose").model("User");

module.exports = {
    create:function(req,res){
        let answer = new Answer(req.body);
        
        // set answer._user via clientside first, then do a User.findOne({_id:answer._user},cb)

        Question.findOne({_id:req.params.id},function(err,question){
            if(err){console.log(err)}else{
                answer._question = question._id;
                answer.likes = 0; // Init 0 likes.
                answer.save((err)=>{
                    if(err){console.log(err);}else{
                        question.answers.push(answer);
                        question.save((err)=>{
                            if(err){console.log(err)}else{
                                res.json({answer:answer});
                            }
                        });
                    }
                })
            }
        })
    },

    all:function(req,res){
        Answer.find({})
        .populate("_user")
        .populate("_question")
        .exec(function(err,answers){
            if(err){
                console.log(err);
            }else{
                res.json({answers:answers});
            }
        })
    },

    get:function(req,res){
        Answer.findOne({_id:req.params.id})
        .populate("_user")
        .populate("_question")
        .exec(function(err,answer){
            if(err){
                console.log(err);
            }else{
                res.json({answer:answer});
            }
        })
    },

    like:function(req,res){
        Answer.findOne({_id:req.params.id},function(err,answer){
            if(answer.likes == undefined || answer.likes == null){
                answer.likes = 1;
            }else{
                answer.likes++;
            }

            answer.save(function(err){
                if(err){console.log(err)}else{
                    res.json({answer:answer})
                }
            })
        })
    }
}
