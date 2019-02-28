var express               = require("express"),
app                       = express(),
passport                  = require("passport"),
mongoose                  = require("mongoose"),
bodyParser                = require("body-parser"),
passportLocal             = require("passport-local"),
User                      = require("./models/user"),
expressSession            = require("express-session");


mongoose.connect("mongodb://localhost:27017/authdemo", {useNewUrlParser: true});
app.use(expressSession({
    secret: "Being a Mother is the best thing in the world",
    resave: false,
    saveUninitialized: false
}));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ====================================
// Routes
// ====================================

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/secret", isLoggedIn, function(req, res){
   res.render("secret"); 
});

// Auth Routes
// Show the Register Form
app.get("/register", function(req, res){
    res.render("register");
});
// Handle the POST for Register Form
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.render("register");
        } else {
            passport.authenticate("local")(req, res, function(){
               res.redirect("/secret"); 
            });
        }
    });
});

// Login Routes
// Show Login Form
app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
    
});

// Logout Route
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("I wont serve you agian"); 
});