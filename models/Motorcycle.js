const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MotorcycleSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  cc: {
    type: Number,
    required: false,
  },
  seatHeight: {
    type: String,
    required: true,
  },
  Notes: {
    type: String,
    required: false,
  },
})

module.exports = Motorcycle = mongoose.model('motorcycle', MotorcycleSchema)