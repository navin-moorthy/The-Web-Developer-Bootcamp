var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var voices = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof !!"
    };
    var animals = req.params.animal.toLowerCase();
    var sounds = voices[animals];
    res.send("The " + animals + " says '" + sounds + "'");
});

app.get("/repeat/:words/:times", function(req, res) {
    var word = " " + req.params.words;
    var times = req.params.times;
    res.send(word.repeat(times));
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Our Local Server has Started");
});