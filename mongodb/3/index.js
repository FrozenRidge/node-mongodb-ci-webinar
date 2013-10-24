var mongo = require('mongoskin')


module.exports = {

  userExists: function(usernameOrEmail, cb) {

    var db = mongo.db('localhost:27017/foobar', {safe:true})

    db.collection('users').findOne({ $or : [
      {username: usernameOrEmail},
      {email: usernameOrEmail}]
    }, function(err, user) {
      if (err || !user) {
        return cb(new Error("user not found"), null)
      }

      return cb(null, user)
    })

  }
}
