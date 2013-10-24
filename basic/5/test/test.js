var expect = require('chai').expect
var isTdd = require('../index.js').isTdd

describe('#index', function() {
  it('should return false if string tdd  is not in argument', function() {
    var s = 'just bdd here'
    expect(isTdd(s)).to.be.false
  })
})

