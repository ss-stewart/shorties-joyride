const Bike = require('../../models/bike');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const bikes = await Bike.find({}).sort('name').populate('make').exec();
  // re-sort based upon the sortOrder of the populated makes
  bikes.sort((a, b) => a.make.sortOrder - b.make.sortOrder);
  res.json(bikes);
}

async function show(req, res) {
  const bike = await Bike.findById(req.params.id);
  res.json(bike);
}
