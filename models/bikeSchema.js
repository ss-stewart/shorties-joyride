const Schema = require('mongoose').Schema;

const bikeSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  make: {type: Schema.Types.ObjectId, ref: 'Make'},
  a: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = bikeSchema;
