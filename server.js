// -----------------------------------------------------------------------------  
//  SETUP
// -----------------------------------------------------------------------------

// var connect = require('connect');
var http = require('http');
var express  = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
var db = require('mongoose');   
var app = express();


// -----------------------------------------------------------------------------  
//  CONFIGURATION
// -----------------------------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

db.connect('mongodb://localhost/library');
app.use(express.static(__dirname + '/app'));  

// -----------------------------------------------------------------------------  
//  MONGOOSE MODELS
// -----------------------------------------------------------------------------


var Characters = db.model('Characters', {
    first_name : String,
    middle_name : String,
    last_name : String, 
    gender : String,
    origin : String,
    age : String,
});

// -----------------------------------------------------------------------------  
//  REST API
// -----------------------------------------------------------------------------


app.get('/characters', function(request, response) {
        Characters.find(function(error, characters) {
            if (error)
                response.send(error)
            response.json(characters);
            console.log("GET Characters: " + response.statusCode);
        });
    });

// -----------------------------------------------------------------------------
//  LISTENING
// -----------------------------------------------------------------------------

var port = process.env.PORT || 7878;
app.listen(port);
console.log("Server listening on port " + port);

// -----------------------------------------------------------------------------  
//  EXPORTS
// -----------------------------------------------------------------------------


var startServer = function() {
    return port
};

var startDB = function() {
    return app
};


module.exports = { startServer: startServer, startDB: startDB};
