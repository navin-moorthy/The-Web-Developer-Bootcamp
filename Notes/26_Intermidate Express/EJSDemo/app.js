var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home")
});

app.get("/fellinlovewith/:nature", function(req, res){
   var nature = req.params.nature;
   res.render("love", {natureVar: nature});
});

app.get("/posts", function(req, res){
   var posts  = [
       {title: "First Post", author: "Navin"},
       {title: "About a coder", author: "Vasanth"},
       {title: "World with lot of wonders", author: "Arun"}
    ];
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up and running");
});