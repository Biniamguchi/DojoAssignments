let http = require("http")
let fs   = require("fs")
let rf   = function(fileName,resp){
    fs.readFile(fileName,"utf8",function(errs,cont){
        resp.writeHead(200,{ContentType:"text/html"});
        resp.write(cont);
        resp.end();
    })
}
let rImg   = function(fileName,resp){
    fs.readFile(fileName,function(errs,cont){
        resp.writeHead(200,{ContentType:"image/*"});
        resp.write(cont);
        resp.end();
    })
}

let sv = http.createServer(function(req,resp){
    if(req.url == "/cars"){
        rf("views/cars.html",resp);
    }else if(req.url == "/cars/new"){
        rf("views/new_car.html",resp);
    }else if(req.url == "/cats"){
        rf("views/cats.html",resp);
    
    }else if(req.url == "/images/240sx.jpg"){
        rImg("./images/240sx.jpg",resp);
    }else if(req.url == "/images/m3.jpg"){
        rImg("./images/m3.jpg",resp);
    }else if(req.url == "/images/rx8.jpg"){
        rImg("./images/rx8.jpg",resp);
    }else if(req.url == "/images/supra.jpg"){
        rImg("./images/supra.jpg",resp);
    }

    else if(req.url == "/images/cat1.jpg"){
        rImg("./images/cat1.jpg",resp);
    }else if(req.url == "/images/cat2.jpg"){
        rImg("./images/cat2.jpg",resp);
    }else if(req.url == "/images/cat3.jpg"){
        rImg("./images/cat3.jpg",resp);
    }
})
sv.listen(8080);
