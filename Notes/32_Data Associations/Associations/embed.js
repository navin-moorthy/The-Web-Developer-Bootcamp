var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog-demo", {useNewUrlParser: true});

// Post Schema - title and content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// User Schema - email and name
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

User.findOne({name: "Harry Potter"}, function(err, getName){
    if(err){
        console.log(err);
    } else {
        getName.posts.push({
            title: "Do you love 200WaD",
            content: "I love the developer and the idea"
        });
        getName.save(function(err, updatedName){
            if(err){
                console.log(err);
            } else {
                console.log(updatedName);
            }
        });
    }
});

// var newUser = new User({
//     email: "harry@potter.in",
//     name: "Harry Potter"
// });

// newUser.posts.push({
//     title: "How to fly the magical Broomstick",
//     content: "Just hop over the broomstick and ride it"
// });

// newUser.save(function(err, userPost){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(userPost);
//     }
// });

// var newUser = new User ({
//   email: "johndoe@gmail.com",
//   name: "John Doe"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//   title: "Reflections of Apples",
//   content: "They are delicious"
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });