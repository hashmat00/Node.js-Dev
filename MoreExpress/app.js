var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


///Homepage routs
app.get("/", function(req, res) {
    res.send("YOU ARE IN HOMEPAGE --- SORRY");
});


app.get("/fallinlove/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("homepage", {thingVar: thing});
});

//fall in love with rusty
app.get("/love/:idea", function(req, res) {
    var thing = req.params.idea;
    res.send("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "We buy sockets", author: "hashmat"},
        {title: "We buy Chips alot", author: "Mike"},
        {title: "Costco has variety of foods", author: "Costco"}
        
        ];
        
        res.render("posts", {posts: posts});
});

///404 page route
app.get("*", function(req, res) {
    res.send("YOU ARE IN WRONG PAGE--- SORRY");
});



/// start server with PORT and IP
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});