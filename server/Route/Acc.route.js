const { Router } = require('express')
const Module = require('../modules/Acc.module')
const router = Router()
const passport = require('passport')

router.post('/auth', Module.Auth)
router.post('/reg', passport.authenticate('jwt', {session: false}), Module.Reg)

module.exports = router