const { gql } = require('apollo-server-express')

const typeDefs = gql`

  type PostsGet {
    _id: ID!
    title: String!
    text: String!
    date: String!
    views: Int!
    imageUrl: String!
  }

  type Query {
    posts: [PostsGet]!
  }
`

module.exports = typeDefs