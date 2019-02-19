var express = require("express");
var app = express();

// "/" => "Hi There"

app.get("/", function(req, res){
    console.log("Someone Suspicious made a request");
    res.send("HI THERE!");
});

// "/bye" => 'Goodbye!!'

app.get("/bye", function(req, res){
   res.send("Goodbye!!!!");
});

// "/dog" => "MEOW"

app.get("/dog", function(req, res){
   res.send("loool"); 
});

// Examples

app.get("/r/:subredditName", function(req, res){
    var name = req.params.subredditName;
    res.send("You accessed for " + name + " Subreddit ");
});

// "*" => Star param for displaying something when the url is outside of our declaration

app.get("*", function(req, res){
    res.send("You are a star!!!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Our server has started")
});