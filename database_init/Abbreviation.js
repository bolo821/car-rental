const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

const Abbreviation = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  url: {
    type: String,
  },
});

autoIncrement.initialize(mongoose.connection);
Abbreviation.plugin(autoIncrement.plugin, 'Abbreviation');
module.exports = mongoose.model("Abbreviation", Abbreviation);
