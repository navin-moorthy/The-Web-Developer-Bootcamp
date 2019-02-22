var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true });

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var meow = new Cat({
//   name: "Norris",
//   age: 6,
//   temperament: "Evil"
// });

// meow.save(function(err, cat){
//     if (err){
//         console.log("You received an error");
//         console.log(err)
//     } else {
//         console.log("Saved Successfully");
//         console.log(cat);
//     }
// });

Cat.find({}, function(err, cats){
   if(err){
       console.log("Error thrown");
       console.log(err)
   } else {
       console.log("All the cats...");
       console.log(cats);
   }
});

Cat.create({
    name: "Anbu",
    age: 18,
    tamperament: "Lazy"
}, function(err, cat){
    if (err){
      console.log(err);  
    } else {
        console.log(cat);
    }
});