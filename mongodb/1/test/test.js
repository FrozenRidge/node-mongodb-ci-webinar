var expect = require('chai').expect
var mongodb = require('mongoskin')
var userDb = require('../index.js')



describe('#userDb', function() {

  describe('userExists', function() {

    it('should fail for a missing username', function(done) {

      userDb.userExists("MissingUsername", function(err, doc) {
        expect(err).to.exist
        expect(doc).to.be.null
        done()
      })


    })

  })

})
