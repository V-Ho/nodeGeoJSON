const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create user Schema and model
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  nationality: {
    type: String
  },
  availability: {
    type: Boolean,
    default: false
  }
  // add geolocation
})

const User = mongoose.model('user', UserSchema)

module.exports = User
