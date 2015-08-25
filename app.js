"use strict";

var _ = require('lodash')

module.exports = function ( options ) {
  var seneca = this

  function restrict_login(args, cb){
    var req = this.fixedargs.req$

    var cookie_val = req.seneca.cookies.get( 'allow_login' )
    if (1 == cookie_val){
      cb(null, {ok: true})
    }else{
      cb(null, {ok: false, why: 'not-allowed'})
    }
  }

  seneca.add({role: 'auth', restrict: 'login'}, restrict_login)

}
