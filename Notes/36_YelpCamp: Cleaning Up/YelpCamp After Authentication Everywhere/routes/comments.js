var express = require("express");
var router = express.Router({ mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

// =================================
// Comments Route
// =================================
router.get("/new", isLoggedIn, function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);   
        } else {
               res.render("comments/new", {campground: campground});
        }
    });
});

router.post("/", isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
           Comment.create(req.body.comment, function(err, newComment){
               if(err){
                   console.log(err);
                   res.redirect("/campgrounds");
               } else {
                   newComment.author.id = req.user._id;
                   newComment.author.username = req.user.username;
                   newComment.save();
                   campground.comments.push(newComment);
                   campground.save();
                   res.redirect("/campgrounds/" + campground._id);
               }
           });
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