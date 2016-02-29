var express = require("express");
var app = express();



app.get("/", function(req, res){
    res.send("hello, welcome to Node.js server");
});

app.get("/bye", function(req, res){
    res.send("Node.js server directory url!");
});

app.get("/r/:subredditName", function(req, res){
    var subredit = req.params.subredditName;
   res.send("WELCOME TO A " + subredit + " page"); 
});


app.get("/r/:subredditName/:comments/:id/:title", function(req, res){
    console.log(req.params);
   res.send("WELCOME TO COMMENT PAGE"); 
});

/// * 404 page
app.get("*", function(req, res){
    res.send("You are in Wrong page !!--!!");
});

app.listen(process.env.PORT, process.env.IPpp, function(){
    console.log("Server has started");
});