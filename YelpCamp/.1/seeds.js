var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Bold, tenacious and pushing colossal sound, this is FUGOO Sport XL. Featuring 8 acoustic drivers for true 360 sound, waterproof and dust proof with 35 hour battery life and a USB port to quick charge your phone or tablet. It even floats in water for easy recovery making it an ideal active speaker around the pool, lake or ocean. Unique to FUGOO Sport XL, the 6 control buttons on top glow in the dark so even on a night camping, you’re still in control."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Bold, tenacious and pushing colossal sound, this is FUGOO Sport XL. Featuring 8 acoustic drivers for true 360 sound, waterproof and dust proof with 35 hour battery life and a USB port to quick charge your phone or tablet. It even floats in water for easy recovery making it an ideal active speaker around the pool, lake or ocean. Unique to FUGOO Sport XL, the 6 control buttons on top glow in the dark so even on a night camping, you’re still in control."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Bold, tenacious and pushing colossal sound, this is FUGOO Sport XL. Featuring 8 acoustic drivers for true 360 sound, waterproof and dust proof with 35 hour battery life and a USB port to quick charge your phone or tablet. It even floats in water for easy recovery making it an ideal active speaker around the pool, lake or ocean. Unique to FUGOO Sport XL, the 6 control buttons on top glow in the dark so even on a night camping, you’re still in control."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        //  //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    }); 
    //add a few comments
}

module.exports = seedDB;
