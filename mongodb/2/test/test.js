var expect = require('chai').expect
var mongodb = require('mongoskin')
var userDb = require('../index.js')



describe('#userDb', function() {

  describe('userExists', function() {

    it('should return true for an existing username', function(done) {

      userDb.userExists("bob", function(err, doc) {
        expect(err).to.be.null
        expect(doc).to.exist
        done()
      })


    })

  })

})
