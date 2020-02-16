const { Schema, model } = require('mongoose')

const Post = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  imageUrl: String,
  comments: {
    type: Array,
  }

}) 

module.exports = model( 'post', Post )