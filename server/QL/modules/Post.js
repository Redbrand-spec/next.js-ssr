const PostShema = require('../../Shema/post')

module.exports.GetPost = async () => {
  const PostsGet = await PostShema.find()
  return PostsGet 
}