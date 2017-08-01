let http  = require("http");
let fs    = require("fs");
let views = "views/";
let readF = function(file,contType,resp){
    fs.readFile(views+file,"utf8",function(errs,cont){
        resp.writeHead(200,{ContentType:contType});
        resp.write(cont);
        resp.end();
    })
}

let sv   = http.createServer(function(req,resp){
    switch(req.url){
        case "/":
            readF("index.html","text/html",resp);
            break;
        case "/ninjas":
            readF("ninjas.html","text/html",resp);
            break;
        case "/dojos/new":
            readF("new_dojo.html","text/html",resp);
            break;
        default:
            readF("404.html","text/html",resp);            
            break;
    }
});
sv.listen(8080);
