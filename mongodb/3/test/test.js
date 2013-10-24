var expect = require('chai').expect
var mongodb = require('mongoskin')
var userDb = require('../index.js')

describe('#userDb', function() {

  describe('userExists', function() {

    var db = mongodb.db('localhost:27017/foobar', {safe: true})

    before(function(done) {
      db.collection('users').drop(function() {
        db.collection('users').insert({username: "bob", email: "bob@example.com"}, done)
      })
    })

    it('should succeed for an existing username', function(done) {

      userDb.userExists("bob", function(err, doc) {
        expect(err).to.be.null
        expect(doc).to.exist
        done()
      })

    })

    it('should fail for a missing username', function(done) {

      userDb.userExists("NOTbob", function(err, doc) {
        expect(err).to.exist
        expect(doc).to.not.exist
        done()
      })

    })

    it('should succeed for an existing email', function(done) {

      userDb.userExists("bob@example.com", function(err, doc) {
        expect(err).to.be.null
        expect(doc).to.exist
        done()
      })

    })

    it('should fail for a missing email', function(done) {

      userDb.userExists("NOTbob@example.com", function(err, doc) {
        expect(err).to.exist
        expect(doc).to.not.exist
        done()
      })

    })


  })

})
