var mongoose = require('mongoose');

var slotSchema = mongoose.Schema({
    _id: Number,
    from: Date,
    to: Date,
    fullName: String,
    contactPhone: String
});

module.exports = mongoose.model('slots', slotSchema, 'slot');