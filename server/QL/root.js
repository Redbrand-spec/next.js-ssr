const { makeExecutableSchema } = require('apollo-server-express')
const Query = require('./SchemaQL/query')
const query = require('./resolvers/query')

const Mutation = require('./SchemaQL/mutation')
const mutation = require('./resolvers/mutation')

module.exports =  makeExecutableSchema({
	typeDefs: [Query, Mutation],
	resolvers: [query, mutation]
}); 