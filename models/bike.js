const mongoose = require('mongoose');
// Ensure the Make model is processed by Mongoose (for populating BikesFetured Bike queries)
require('./make');
const bikeSchema = require('./bikeSchema');

module.exports = mongoose.model('Bike', bikeSchema);