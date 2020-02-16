const PostShema = require('../Shema/post')
const fs = require('fs')
const path = require('path')

module.exports.SetPost = async ( req, res ) => {
  const Data = new PostShema({
    title: req.body.title,
    text: req.body.text,
    imageUrl: `/${req.file.filename}`
  })

  try {
    Data.save()
    res.status(200).json()
  } catch (e) {
    res.status(500).json(e)
  }

}
module.exports.GetFullPost = async ( req, res ) => {
  try {
    const post = await PostShema.findById(req.body.id)
    res.status(200).json({ post })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.UpdatePost = async ( req, res ) => {
  let $set = null
  if(req.file) {
    $set = {
      title:req.body.title,
      text: req.body.text,
      imageUrl: `/${req.file.filename}`
    }
  } else {
    $set = {
      title:req.body.title,
      text: req.body.text,
    }
  }

  try {
    if(!!$set.imageUrl) {
      console.log('картинка удалена')
      fs.unlinkSync(path.resolve(__dirname, '../../public' + req.body.oldImage))
    }

    const post = await PostShema.findOneAndUpdate({
      _id: req.body.id
    }, {$set}, {new: true})
    res.json(post)
    res.status(200).json()
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.DeleteComm = async ( req, res ) => {
  try{
    const Post = await PostShema.findById( req.body.idPost )
    const Com = []
    Post.comments.forEach(val => {
      if( String(val._id) !== req.body.idCom) {
        Com.push(val)
      }
    })
    Post.comments = Com
    Post.views = Com.length
    await Post.save()
    res.status(200).json()
  } catch (e) {
    res.status(500).json(e)
  }
} 
module.exports.DeletePost = async ( req, res ) => {
  const Post = await PostShema.findById(req.body.id)
  try {
  await PostShema.deleteOne({_id:req.body.id})
  fs.unlinkSync(path.resolve(__dirname, '../../public' + Post.imageUrl))
  console.log('картинка удалена')
  res.status(200).json()
  } catch (e) {
    res.status(404).json()
  }
} 