const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type getComment {
    _id: ID
    name: String
    text: String
    date: String
  }

  type ComArr {
    comments: [getComment]!
  }
  
  type PostArr {
    _id: ID!
    title: String!
    text: String!
    date: String!
    imageUrl: String!
  }

  type PostArray {
    post: PostArr!
    comm: [getComment]!
  }

  type Mutation {
    getComments( id: ID!  ): ComArr!
    getPostAll( id: ID!  ): PostArray!
  }
`

module.exports = typeDefs