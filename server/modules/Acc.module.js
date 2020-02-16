const AccShema = require('../Shema/account')
const Bcript = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const Keys = require('../keys')

module.exports.Auth = async ( req, res ) => {
  const Login = req.body.login
  const Password = req.body.password

  const User = await AccShema.findOne({ login: Login })

  if( User ) {
    const Status = Bcript.compareSync( Password, User.password )
    if( Status ) {
      const token = jwt.sign({
        login: User.login,
        id: User._id
      }, Keys.JWT , { expiresIn: 60 * 60 })

      res.json({token})
    } else {
      res.status(404).json()
    }

  } else {
    res.status(404).json()
  }
}

module.exports.Reg = async ( req, res ) => {

  const Login = req.body.login
  const Password = req.body.password

  const User = await AccShema.findOne({ login: Login })

  if( !!User === false ) {
    const PassSec = Bcript.genSaltSync(10)
    const Acc = new AccShema({
      login: Login,
      password: Bcript.hashSync( Password, PassSec )  
    })
    await Acc.save()

    res.status(200).json()

  } else {
    res.status(404).json()
  }

}
