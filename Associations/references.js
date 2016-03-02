var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");






///CREATE POST AND ADD TO USER BY FINDING USER BY EMAIL

Post.create({
    title: "Model folder with module export",
    content: "454545454454543543534543"
    
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


//FIND USER
//FIND ALL POST FOR THAT USER

// User.findOne({email: "hashmat00@aol.com"}).populate("posts").exec(function(err, user){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(user);
//   }
// });



// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });




// //create user
// User.create({
//     email: "hashmat00@aol.com",
//     name: "Hashmat Mh"
// });