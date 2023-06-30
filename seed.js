require('dotenv').config();
require('./config/database');

const Make = require('./models/make');
const Bike = require('./models/bike');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Make.deleteMany({});
  const makes = await Make.create([
  

  await Bike.deleteMany({});
  const bikes = await Bike.create()

  console.log(bikes)

  process.exit();

})();
