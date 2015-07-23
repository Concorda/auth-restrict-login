"use strict";

var _ = require('lodash')

module.exports = function ( options ) {
  var seneca = this
  var plugin = 'seneca-auth-restrict-login'

  function restrict_login(args, cb){
    var req = this.fixedargs.req$

    cb(null, {ok: true})
  }

  seneca.add({role: 'auth', restrict: 'login'}, restrict_login)

  return {
    name:plugin
  }
}
