const Schema = require('mongoose').Schema;

const bikeSchema = new Schema({
  make: {type: String, required: true },
  model: {type: Schema.Types.ObjectId, ref: 'Make'},
  type: {type: String, required: true },
  picture: {type: INT, required: true },
  year: {type: Number, required: true }
  engineSize: {type: Number, required: true }
  averageCost: { type: Number, required: true }
  timestamps: true
});

module.exports = bikeSchema;
