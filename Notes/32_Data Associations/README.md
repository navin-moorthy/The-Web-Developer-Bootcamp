# Notes on Data Associations

- Intro on one to one, one to many, many to many data association.

### One to Many Associations

```js
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});
```
### Object Reference in Associations
```js
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [
       {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Post"
       }
    ]
});
```
To populate the id value in the resulte
```js
User.findOne({email: "harry@potter.arts"}).populate("posts").exec(function(err, user){
    console.log(user.posts);
});
```
- Learned about cleaning the code using Module Exports