const mongoose = require("mongoose");
const Abbreviation = require('./Abbreviation');

var db_string = 'mongodb://localhost:27017/car_rental';
require("./Abbreviation");
mongoose.connect(db_string, { useNewUrlParser: true })
.then(async () => {
    var oneRow = {
        name: 'ggle',
        url: 'https://google.com/',
    };
    let abbr = new Abbreviation(oneRow);
    await abbr.save();
    console.log('saved 1');

    oneRow = {
        name: 'msn',
        url: 'https://msn.com/',
    };
    abbr = new Abbreviation(oneRow);
    await abbr.save();
    console.log('saved 2');
})
.catch(err => console.log(err));