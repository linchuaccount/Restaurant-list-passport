const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userScheam = new Schema({
  name:{
    type: String
  },
  email:{
    type: String,
    require: true
  },
  password:{
    type: String,
    required: true
  },
  crearedAt: {
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model('User', userScheam)