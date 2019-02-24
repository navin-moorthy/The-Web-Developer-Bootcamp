// Node Packages
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    
// Package Initializations
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {name: "Atwood Lake Campground", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed."
//     }, function(err, newlyCreated){
//       if(err){
//           console.log(err);
//       } else {
//           console.log(newlyCreated);
//       }
//     });

// Routes
app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
   Campground.find({}, function(err, allCampgrounds){
      if(err){
          console.log(err);
      } else {
            res.render("index", {campgrounds: allCampgrounds});
      }
   });
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampgrounds = {name: name, image: image, description: description};
    console.log(newCampgrounds);
    Campground.create(newCampgrounds, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
        res.redirect("/campgrounds");
       }
    });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new"); 
});

app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});

// Server Listen
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("I am at your service");
});
