const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friendSchema = new Schema({ 
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  name: String,
  description: {
    type: String,
    trim: true,
    required: false,
    maxlength: 50
  },
  lastSeen: Date
}, {
  timestamps: true
})

module.exports = { friendSchema }