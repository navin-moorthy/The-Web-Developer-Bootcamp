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

// New Get Route
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

// Edit Campground route
router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// Edit Update Route
router.put("/:id", checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// Delete the campground Route
router.delete("/:id", checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            res.redirect("/campgrounds");
        } else {
            campground.remove();
            res.redirect("/campgrounds");
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

// check campground edit, update and delete using authentication
function checkCampgroundOwnership(req, res, next) {
    if(req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                res.redirect("back");
            } else {
                if (foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}

module.exports = router;