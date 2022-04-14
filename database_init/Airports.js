const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

const Airports = new mongoose.Schema({
    firstName: {
        type: String,
    },
    display_loc: {
        type: String,
    },
    full_loc: {
        type: String,
    },
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    tz: {
        type: String,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    ctid: {
        type: Number,
    },
    train: {
        type: Boolean,
    }
});

autoIncrement.initialize(mongoose.connection);
Airports.plugin(autoIncrement.plugin, 'Airports');
module.exports = mongoose.model("Airports", Airports);
