// Unit testing for node server

var expect = require('chai').expect;


describe('SERVER -- Mocha', function() {
   it('should run our tests using npm', function() {
   expect(true).to.be.ok;
    });
});


describe('SERVER -- Server', function(){
   it('should listen on port 7878', function() {
    var server = require('../server.js');
    expect(server.startServer()).to.equal(7878); 
   });
    
});