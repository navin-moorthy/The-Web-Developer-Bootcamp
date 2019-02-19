var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animalVoices", function(req, res){
    var voices = req.params.animalVoices;
    if(voices == "pig"){
        res.send("The pig says 'Oink'");
    }
    else if(voices == "cow"){
        res.send("The cow says 'Moo'");
    }
    else {
        res.send("The dog says 'Woof Woof!'");
    }
    res.send("Hi I will sound like the animal you reques");
});

app.get("/repeat/:words/:times", function(req, res){
    res.send("Hi I will print the number of times you want a word to be displayed");
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Our Local Server has Started");
});