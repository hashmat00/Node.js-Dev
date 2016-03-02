var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");


//POST - titele - content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);



//USER - email,  name
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
var User = mongoose.model("User", userSchema);




Post.create({
    title: "how to cook the best bureger part 4sss",
    content: "hasdfjdshf--fsdfdsdfsdfds"
    
}, function(err, post){
    User.findOne({name: "Hashmat Mh"}, function(err, foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        }
    });
});



// User.create({
//     email: "hashmat00@aol.com",
//     name: "Hashmat Mh"
// });