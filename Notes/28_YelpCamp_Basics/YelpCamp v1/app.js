var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Acorn Oaks Campground", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {name: "Atwood Lake Campground", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}, 
        {name: "Gordon's Campground", image: "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {name: "Hidden Paradise Campground", image: "https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
        {name: "Indiana Jones Campground", image: "https://images.pexels.com/photos/1776852/pexels-photo-1776852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {name: "Avengers Campground", image: "https://images.pexels.com/photos/216677/pexels-photo-216677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}, 
        {name: "Thor's Campground", image: "https://images.pexels.com/photos/1875449/pexels-photo-1875449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {name: "Agara Lake Campground", image: "https://images.pexels.com/photos/6714/light-forest-trees-morning.jpg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {name: "Ooty Campground", image: "https://images.pexels.com/photos/878251/pexels-photo-878251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400"},
        {name: "KodaiKanal Campground", image: "https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}, 
        {name: "Himalayan Campground", image: "https://images.pexels.com/photos/967098/pexels-photo-967098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {name: "Paradise World Campground", image: "https://images.pexels.com/photos/111362/pexels-photo-111362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
   
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrounds = {name: name, image: image};
    campgrounds.push(newCampgrounds);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("I am at your service");
});
