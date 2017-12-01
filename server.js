
var express = require("express");
const path = require('path');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./src/models/Article");

var app = express();

var PORT = process.env.PORT || 4000;


app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 res.setHeader('Cache-Control', 'no-cache');
 next();
});


mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});



app.get("/api", function(req, res) {

  Article.find({}).sort([["date", "descending"]])
  .exec()
  .then((result)=>{
    res.json(result);
  })
  .catch((error)=>{
    res.json(error);
  })

});


app.post("/api", function(req, res) {

  
  Article.create({
    title: "Test 4",
    date: "2017-08-03",
    url: "http://test4.com"
  })
  .then((result)=>{
    console.log(result);
    res.json(result);
  })
  .catch((error)=>{
    console.log(error);
  });

});


app.get("/api/saved", function(req, res) {

  Article.find({
    saved: true
  }).sort([["date", "descending"]])
  .exec()
  .then((result)=>{
    res.json(result);
  })
  .catch((error)=>{
    res.json(error);
  })

});


app.post("/api/saved", function(req, res) {

  Article.findOneAndUpdate({title: "Test Title 3"}, {saved: true}, {new: true})
  .exec()
  .then((result)=>{
    console.log(result);
    res.json(result);
  })
  .catch((error)=>{
    console.log(error);
  });

});


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});