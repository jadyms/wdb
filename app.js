var express = require("express");
var app = express();

// "/" goes to Hi there

app.get("/", function(req, res){
	res.send("Hi there!");
});
// "bye" goes to Goodbye
app.get("/bye", function(req, res){
	res.send("Goodbye!!!!");
});


// Using : to create a parameter that follow a pattern
app.get("/r/:section/comments/:id", function(req,res){
	var id = req.params.id;
	res.send("This is a specific section with an id " + id);
})

//message will be displayed for everything aside the upper options
app.get("*", function(req, res){
	res.send("This page is not available")
});

// Listening the requests
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server has started!");
});
