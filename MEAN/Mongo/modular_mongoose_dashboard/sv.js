let express  = require("express");
let bParse   = require("body-parser");
let mongoose = require("mongoose");
let app      = express();
let port     = 8080;
app.use(express.static(__dirname + "/client/static"));
app.use(bParse.urlencoded({ extended: true }));
app.set("views",__dirname+"/client/views");
app.set("view engine","ejs");
app.listen(port);

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
