var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

// =================================
// Campground Route
// =================================
// Index Route
router.get("/", function(req,res){
   Campground.find({}, function(err, allCampgrounds){
      if(err){
          console.log(err);
      } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
      }
   });
});

// New Post Route
router.post("/", isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampgrounds = {name: name, image: image, description: description,  author: author};
    Campground.create(newCampgrounds, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
        res.redirect("/campgrounds");
       }
    });
});

// New Route
router.get("/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new"); 
});

// Show Route
router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// middleware to check if user is logged in
function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;