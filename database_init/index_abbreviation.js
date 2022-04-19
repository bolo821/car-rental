const mongoose = require("mongoose");
const Abbreviation = require('./Abbreviation');
require('dotenv').config();

var db_string = process.env.MONGO_URL;
console.log('aaa: ', db_string);
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

    oneRow = {
        name: 'kay',
        url: 'https://kayak.com/in',
    };
    abbr = new Abbreviation(oneRow);
    await abbr.save();
    console.log('saved 2');
})
.catch(err => console.log(err));