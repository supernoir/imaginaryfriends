// -----------------------------------------------------------------------------  
//  SETUP
// -----------------------------------------------------------------------------

// var connect = require('connect');
var http = require('http');
var express  = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
var mongoose = require('mongoose');   
var app = express();

// -----------------------------------------------------------------------------  
//  CONFIGURATION
// -----------------------------------------------------------------------------

mongoose.connect('mongodb://localhost/library');
app.use(express.static(__dirname + '/app'));   


// -----------------------------------------------------------------------------
//  LISTENING
// -----------------------------------------------------------------------------

var port = process.env.PORT || 3030;
app.listen(port);
console.log("App listening on port " + port);



