const { Strategy, ExtractJwt } = require('passport-jwt')
const Keys = require('../keys')

const Account = require('../Shema/account')

const option  = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : Keys.JWT
}

module.exports = new Strategy( option, async (payload, done) => {
  try {
    const User = await Account.findById(payload.id).select('id')

    if ( User ) {
      done( null, User )
    } else {
      done( null, false )
    }

  } catch (e) {
    console.log(e)
  }
})