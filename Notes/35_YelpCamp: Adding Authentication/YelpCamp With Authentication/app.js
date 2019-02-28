// Node Packages
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    passport   = require("passport"),
 localStrategy = require("passport-local"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    User       = require("./models/user"),
    seedDB     = require("./seed");
    
// Package Initializations
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: 'idontknow',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

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
app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);   
        } else {
               res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
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

// ====================================================
// AUTH ROUTES
// ====================================================

// show register form
app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds");
        });
    });
});

// show login form
app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login",
    }), function(req, res){
        res.send("Post accepted");
});

// logout the user
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/campgrounds");
});

// middleware to check if user is logged in
function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

// Server Listen
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("I am at your service");
});
