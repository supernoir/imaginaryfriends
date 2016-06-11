// Unit testing for node server
var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

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

describe('REST -- Characters', function() {
it('should list ALL characters on /characters GET', function(done) {
    var db = require('../server.js');
    
    chai.request(db.startDB())
    .get('/characters')
    .end(function(err, res){
      expect(res).to.include.status(200);
      done();
    });
});
  it('should list a SINGLE character on /character/<id> GET');
  it('should add a SINGLE character on /character POST');
  it('should update a SINGLE character on /character/<id> PUT');
  it('should delete a SINGLE character on /character/<id> DELETE');
});