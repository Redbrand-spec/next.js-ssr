const PostShema = require('../../Shema/post')

module.exports.GetComment = async ( id ) => {
  const Post = await PostShema.findById(id.id)
  return { comments: Post.comments }
}
module.exports.getPostAll = async ( id ) => {
  const Post = await PostShema.findById(id.id)
  return { post: Post, comm: Post.comments }
}     