module.exports = {
    show:function(req,res){
        User.find({},function(err,users){
            if(err){
                res.redirect("/");
            }else{
                res.render("quotes",{users:users});
            }
        })
    },

    create:function(req,res){
        let user = new User({
            name:req.body.name,
            quote:req.body.quote
        });

        user.save(function(err){
            if(err){
                req.app.locals.errs = user.errors;
                res.redirect("/");
            }else{
                req.app.locals.errs = "";
                res.redirect("/quotes");
            }
        })
    }
}
