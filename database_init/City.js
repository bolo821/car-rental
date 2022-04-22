const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

const Cities = new mongoose.Schema({
    city_name_accent: {
        type: String,
    },
    region_name_accent: {
        type: String,
    },
    ar_db_id: {
        type: String,
    },
    ar_location_name: {
        type: String,
    },
    city_name: {
        type: String,
    },
    region_name: {
        type: String,
    },
    country_name: {
        type: String,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    iso2: {
        type: String,
    },
    iso3: {
        type: String,
    },
    capital: {
        type: String,
    },
    population: {
        type: Number,
    },
    state: {
        type: String,
    }
});

autoIncrement.initialize(mongoose.connection);
Cities.plugin(autoIncrement.plugin, 'Cities');
module.exports = mongoose.model("Cities", Cities);
