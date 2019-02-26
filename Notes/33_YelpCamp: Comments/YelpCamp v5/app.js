// Node Packages
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    seedDB     = require("./seed");
    
// Package Initializations
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// Routes
// Home Route
app.get("/", function(req, res) {
    res.render("landing");
});

// Index Route
app.get("/campgrounds", function(req,res){
   Campground.find({}, function(err, allCampgrounds){
      if(err){
          console.log(err);
      } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
      }
   });
});

// New Post Route
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampgrounds = {name: name, image: image, description: description};
    Campground.create(newCampgrounds, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
        res.redirect("/campgrounds");
       }
    });
});

// New Route
app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new"); 
});

// Show Route
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// =================================
// Comments Route
// =================================
app.get("/campgrounds/:id/comments/new", function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);   
        } else {
               res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res){
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
                   campground.comments.push(newComment);
                   campground.save();
                   res.redirect("/campgrounds/" + campground._id);
               }
           });
       }
    });
});

// Server Listen
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("I am at your service");
});
