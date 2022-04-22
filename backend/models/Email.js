const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

const Email = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
});

autoIncrement.initialize(mongoose.connection);
Email.plugin(autoIncrement.plugin, 'Email');
module.exports = mongoose.model("Email", Email);
