const ComShema = require('../Shema/comment')
const PostSchema = require('../Shema/post')

module.exports.comment = async (req, res) => {
  const Data = new ComShema({
      name: req.body.name,
      text: req.body.text,
  })
  try {
    const Post = await PostSchema.findById(req.body.id)
    Post.comments.push(Data)
    Post.views = Post.comments.length
    await Post.save()

    res.status(200).json()
  } catch (e) {
    res.status(500).json()
  }
}