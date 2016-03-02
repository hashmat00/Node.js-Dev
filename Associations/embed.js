var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


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
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);




// var newUser = new User({
//     email: "post@aol.com",
//     name: "USERNAME"
// });

// newUser.posts.push({
//     title: "how to bre polyjuice",
//     content: "just kidding"
// });


// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });



// var newPost = new Post({
//     title: "tome steve",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });



User.findOne({name: "USERNAME"}, function(err, user){
   if(err){
    //   console.log(err);
   } else {
       user.posts.push({
           title: "3 posts ",
           content: "adding extra posts posts"
       });
       user.save(function(err, user){
           if(err){
               console.log(err);
           }else{
               console.log(user);
           }
       })
   }
});