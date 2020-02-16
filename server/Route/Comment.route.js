const { Router } = require('express')
const Module = require('../modules/Comment.module')
const router = Router()

router.post('/', Module.comment)

module.exports = router 