const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudMotorcycle = new Schema({
    make: {
        type: String
    },
    model: {
        type: String
    },
    year: {
        type: Number
    },
    notes: {
        type: String
    },
});

module.exports = mongoose.model('school_motorcycle', crudMotorcycle);