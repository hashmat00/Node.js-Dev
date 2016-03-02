// ADD MONGOOESE 
var mongoose = require("mongoose");


//POST - titele - content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});


module.exports = mongoose.model("Post", postSchema);