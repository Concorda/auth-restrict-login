'use strict'

module.exports = function (options) {
  var seneca = this

  function restrict_login (args, cb) {
    cb(null, {ok: true})
  }

  seneca.add({role: 'auth', restrict: 'login'}, restrict_login)
}
