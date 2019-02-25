var mongoose = require("mongoose");
var Post = require("./models/post");
var User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/blog-demo1", {useNewUrlParser: true});

User.findOne({email: "harry@potter.arts"}).populate("posts").exec(function(err, user){
    console.log(user);
});

// Post.create({
//     title: "Overdoing Something part 3",
//     content: "Being uncomfortable make you good"
// }, function(err, posts){
//     if(err){
//         console.log(err);
//     } else {
//         User.findOne({name: "Harry Potter"}, function(err, foundUser){
//             if(err){
//                 console.log(err)
//             } else {
//                 foundUser.posts.push(posts);
//                 foundUser.save(function(err, namePosts){
//                     if(err){
//                         console.log(err);
//                     } else {
//                         console.log(namePosts);
//                     }
//                 });
//             }
//         });
//     }
// });

// User.create({
//     name: "Harry Potter",
//     email: "harry@potter.arts"
// });