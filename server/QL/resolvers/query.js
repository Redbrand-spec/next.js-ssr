const Post =  require('../modules/Post')

module.exports = resolvers = {
  Query: {
    posts: async () => await Post.GetPost()
  }
}