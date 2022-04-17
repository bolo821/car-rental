const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

const Logs = new mongoose.Schema({
    ip: {
        type: String,
    },
    country: {
        type: String,
    },
    clickid: {
        type: String,
    },
    pickup: {
        searchKey: {
            type: String,
        },
        searchResults: {
            type: Array,
        },
        result: {
            type: String,
        },
    },
    drop: {
        searchKey: {
            type: String,
        },
        searchResults: {
            type: Array,
        },
        result: {
            type: String,
        },
    },
});

autoIncrement.initialize(mongoose.connection);
Logs.plugin(autoIncrement.plugin, 'Logs');
module.exports = mongoose.model("Logs", Logs);
