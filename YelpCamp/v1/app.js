var express =require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("landing")
});

  var campgrounds = [
    {name: "kabul", image: "http://www.eatstaylive.com/wp-content/uploads/2015/11/3025546-poster-p-switzerland.jpg"},
    {name: "Herat", image: "http://hookedoneverything.com/wp-content/uploads/2015/05/Switzerland-Ski-Resort-Arosa.jpg"},
    {name: "Badakhshan", image: "https://5starseurope.com/country_image/switzerland/switzerland-001.jpg"},
    {name: "kabul", image: "http://trulyhandpicked.com/wp-content/uploads/2016/02/switzerland-castle-autumn-tree-beauty-hill-widescreen-landscape-switzerland-autumn-wallpaper-1455201749n48gk.jpg"},
    {name: "Herat", image: "http://www.enp.eu/wp-content/uploads/Zurich2.png"},
    {name: "kabul", image: "http://www.eatstaylive.com/wp-content/uploads/2015/11/3025546-poster-p-switzerland.jpg"},
    {name: "Herat", image: "http://hookedoneverything.com/wp-content/uploads/2015/05/Switzerland-Ski-Resort-Arosa.jpg"},
    {name: "Badakhshan", image: "https://5starseurope.com/country_image/switzerland/switzerland-001.jpg"},
    {name: "kabul", image: "http://trulyhandpicked.com/wp-content/uploads/2016/02/switzerland-castle-autumn-tree-beauty-hill-widescreen-landscape-switzerland-autumn-wallpaper-1455201749n48gk.jpg"},
    {name: "Herat", image: "http://www.enp.eu/wp-content/uploads/Zurich2.png"}

    ];
    
app.get("/campgrounds", function(req, res) {
  
    res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds", function(req, res){
    
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect to campgrouds page
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});


//start the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started");
});