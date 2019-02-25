var mongoose = require("mongoose");
// Post Schema - title and content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema);
