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

app.get('/books', function(request, response) {
        Books.find(function(error, books) {
            if (error)
                response.send(error)
            response.json(books);
            console.log(books)
        });
    });

// -----------------------------------------------------------------------------
//  LISTENING
// -----------------------------------------------------------------------------

var port = process.env.PORT || 7878;
app.listen(port);
console.log("App listening on port " + port);

// --- Methods

var startServer = function() {
    return port
};

// --- Exports

module.exports = { startServer: startServer};
