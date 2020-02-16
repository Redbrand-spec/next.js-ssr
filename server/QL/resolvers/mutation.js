const Comm =  require('../modules/Comment')

module.exports = resolvers = {
  Mutation : {
    getComments: async ( _, id ) => await Comm.GetComment( id ),
    getPostAll: async ( _, id ) => await Comm.getPostAll( id )
  }
}