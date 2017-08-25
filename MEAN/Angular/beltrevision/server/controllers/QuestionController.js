let Question = require("mongoose").model("Question");
let User     = require("mongoose").model("User");

module.exports = {
    create(req,res){
        let question = new Question(req.body);

        User.findOne({_id:req.body._user},(err,user)=>{
            if(err){
                console.log(err);
            }else{
                user.questions.push(question);
                user.save((err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        question.save((err)=>{
                            if(err){
                                console.log(err);
                            }else{
                                res.json(question);
                            }
                        })
                    }
                })
            }
        })
    },

    get(req,res){
        Question.findOne({_id:req.params.id})
        .populate("_user")
        .populate({
            path:"answers",
            options:{
                sort:{likes:-1}
            },
            populate:{
                path:"_user",
                model:"User"
            }
        })
        .exec((err,questions)=>{
            if(err){
                console.log(err);
            }else{
                res.json(questions);
            }
        })
    },

    query(req,res){
        Question.find({title:req.params.query})
        .populate("answers")
        .populate("_user")
        .exec((err,questions)=>{
            if(err){
                console.log(err);
            }else{
                res.json(questions);
            }
        })
    },

    all(req,res){
        Question.find({})
        .populate("answers")
        .populate("_user")
        .exec((err,questions)=>{
            if(err){
                console.log(err);
            }else{
                res.json(questions);
            }
        })
    },
}
