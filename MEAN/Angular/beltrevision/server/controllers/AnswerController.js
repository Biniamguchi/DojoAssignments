let Answer   = require("mongoose").model("Answer");
let Question = require("mongoose").model("Question");
let User     = require("mongoose").model("User");

module.exports = {
    create(req,res){
        let answer = new Answer(req.body);
        answer.likes = 0;

        User.findOne({_id:req.body._user},(err,user)=>{
            if(err){
                console.log(err);
            }else{
                console.log(user);
                user.answers.push(answer);
                user.save((err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        Question.findOne({_id:req.body._question},(err,question)=>{
                            question.answers.push(answer);
                            question.save((err)=>{
                                if(err){
                                    console.log(err);
                                }else{
                                    answer.save((err)=>{
                                        if(err){
                                            console.log(err);
                                        }else{
                                            res.json(answer);
                                        }
                                    });
                                }
                            })
                        })
                    }

                });
            }

        })
    },

    get(req,res){
        Answer.findOne({_id:req.params.id})
        .populate("_user")
        .populate("_question")
        .exec((err,answer)=>{
            if(err){
                console.log(err);
            }else{
                res.json(answer);
            }
        })
    },

    all(req,res){
        Answer.find({sort:{likes:-1}},(err,answers)=>{
            if(err){
                console.log(err);
            }else{
                res.json(answers);
            }
        })
    },

    like(req,res){
        Answer.findOne({_id:req.params.id},(err,answer)=>{
            if(err){
                console.log(err);
            }else{
                answer.likes++;
                answer.save((err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.json(answer.likes);
                    }
                })
            }
        })
    }
}
