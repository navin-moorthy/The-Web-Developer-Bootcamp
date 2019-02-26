// INITIALIZATION
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const sessions = require("client-sessions");
const bcrypt = require("bcryptjs");
const csurf = require("csurf");

// USE
mongoose.connect("mongodb://localhost:27017/authtest", {useNewUrlParser: true});

let app = express();
app.use(bodyParser.urlencoded({extended: false}));

let User = mongoose.model("User", new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}));

app.set("view engine", "pug");

app.use(sessions({
    cookieName: "session",
    secret: "asfhhdfl;as;dflh",
    duration: 30 * 60 * 1000,
}));

app.use((req, res, next) => {
    if (!(req.session && req.session.userId))  {
        return next();
    }
    
    User.findById(req.session.userId, (err, user) => {
        if (err) {
            return next(err);
        }
        
        if (!user) {
            return next();
        }
        
        user.password = undefined;
        
        req.user = user;
        res.locals.user = user;
        
        next();
    });
});

function loginRequired(req, res, next) {
    if (!req.user) {
        return res.redirect("/login");
    }
    
    next();
}

// ROUTES
app.get("/", (req, res) => {
    res.redirect("/index");
});

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    
    let hash = bcrypt.hashSync(req.body.password, 14);
    req.body.password = hash;
    
    let user = new User(req.body);
    
    user.save((err) => {
        if(err) {
            let error = "Something bad happened! Please try again.";
            
            if(err.code === 11000) {
                error = "That email is already taken!! Please try again.";
            }
            
            return res.render("register", { error: error });
        }
        
        res.redirect("/dashboard");
    });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    
    User.findOne( {email: req.body.email}, (err, user) => {
        if( err || !user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res.render("login", {
                error: "Incorrect Email/Password"
            });
        }
        req.session.userId = user._id;
        res.redirect("/dashboard");
    });
});

app.get("/dashboard", loginRequired, (req, res, next) => {
    if (!(req.session && req.session.userId)) {
        return res.redirect("login");
    }
    
    User.findById(req.session.userId, (err, user) => {
        if(err) {
            return next(err);
        }
        
        if (!user) {
            return res.redirect("/login");
        }
        res.render("dashboard");
    });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("One last time I am up for you");
});