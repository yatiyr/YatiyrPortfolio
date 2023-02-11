const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const viewSchema = new Schema({
    page: {type: String, required: true},
    viewDate: {type: Date, required: true, default: Date.now},
    countryCode: {type: String, required: true},    
    countryName: {type: String, required: true},
    city: {type: String, required: true},
    postal: {type: String, required: true},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    IPv4: {type: String, required: true},
    state: {type: String, required: true}
});

module.exports = mongoose.model('View', viewSchema);