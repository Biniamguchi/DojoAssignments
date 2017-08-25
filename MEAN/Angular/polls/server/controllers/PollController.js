let Poll     = require("mongoose").model("Poll");
let User     = require("mongoose").model("User");

module.exports = {
    create(req,res){
        let poll = new Poll(req.body);

        User.findOne({_id:req.body._user},(err,user)=>{
            if(err){
                console.log(err);
            }else{
                user.polls.push(poll);
                user.save((err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        poll.oneVotes   = 0;
                        poll.twoVotes   = 0;
                        poll.threeVotes = 0;
                        poll.fourVotes  = 0;
                        poll.save((err)=>{
                            if(err){
                                console.log(err);
                            }else{
                                res.json(poll);
                            }
                        })
                    }
                })
            }
        })
    },

    get(req,res){
        Poll.findOne({_id:req.params.id})
        .populate("_user")
        .exec((err,poll)=>{
            if(err){
                console.log(err);
            }else{
                res.json(poll);
            }
        })
    },

    query(req,res){
        Poll.find({question:req.params.query})
        .populate("_user")
        .exec((err,polls)=>{
            if(err){
                console.log(err);
            }else{
                res.json(polls);
            }
        })
    },

    all(req,res){
        Poll.find({})
        .populate("_user")
        .exec((err,polls)=>{
            if(err){
                console.log(err);
            }else{
                res.json(polls);
            }
        })
    },

    delete(req,res){
        console.log(req.params);

        Poll.findOne({_id:req.params.id},(err,poll)=>{
            if(err){
                console.log(err);
            }else{
                Poll.remove({_id:req.params.id},(err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.json(poll);
                    }
                })
            }
        })
    },

    vote(req,res){
        console.log(req.params);

        Poll.findOne({_id:req.params.id},(err,poll)=>{
            if(err){
                console.log(err);
            }else{
                if(req.params.voteId == 1){
                    poll.oneVotes++;
                }else if(req.params.voteId == 2){
                    poll.twoVotes++;
                }else if(req.params.voteId == 3){
                    poll.threeVotes++;
                }else if(req.params.voteId == 4){
                    poll.fourVotes++;
                }

                poll.save((err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.json(poll);
                    }
                })
            }
        })
    }
}
