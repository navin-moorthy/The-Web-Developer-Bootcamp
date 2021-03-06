// Node Packages
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    passport   = require("passport"),
 localStrategy = require("passport-local"),
    User       = require("./models/user"),
    seedDB     = require("./seed");

// Requiring Routes
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var authRoutes = require("./routes/index");
    
// Package Initializations
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// seedDB() // Seed the database

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

app.use("/", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// Server Listen
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("I am at your service");
});
