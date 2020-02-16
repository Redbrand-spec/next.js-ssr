const { Router } = require('express')
const Module = require('../modules/post.module')
const Upload = require('../midleware/ImgLoader')
const passport = require('passport')
const router = Router()

router.post('/', passport.authenticate('jwt', {session: false}), Upload.single('image'), Module.SetPost)
router.put('/update', passport.authenticate('jwt', {session: false}), Upload.single('image'), Module.UpdatePost)
router.post('/delete', passport.authenticate('jwt', {session: false}), Module.DeleteComm)
router.post('/deletepost', passport.authenticate('jwt', {session: false}), Module.DeletePost)

module.exports = router 