const express = require('express')
const bodyParser = require('body-parser')
const Passport = require('passport')
const PassportStrategy = require('./midleware/passport-strategy')

const { ApolloServer } = require('apollo-server-express')
const  Schema = require('./QL/root')

const keys = require('./keys')
const mongoose = require('mongoose')

const PostRouter = require('./Route/post.route')
const AccRouter = require('./Route/Acc.route')
const Comments = require('./Route/Comment.route')

mongoose.connect(keys.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true}  )
  .then(() => console.log('Монго запущен...'))
  .catch(error => console.error(error))

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Passport.initialize())

app.use('/api/post', PostRouter )
app.use('/api', AccRouter )
app.use('/api/comment', Comments)
app.use(express.static('public')) 

Passport.use(PassportStrategy)

const server = new ApolloServer({
  schema:Schema,
  playground: true
})

server.applyMiddleware({ app })

module.exports = app 