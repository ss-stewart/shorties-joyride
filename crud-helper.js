// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Bike = require('./models/bike');
const Make = require('./models/make');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, bike, make, order;
let users, bikes, makes, orders;
