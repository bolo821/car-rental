const csvtojson = require('csvtojson');
const mongoose = require("mongoose");
const Cities = require('./City');
require('dotenv').config();

var db_string = process.env.MONGO_URL;
require("./City");
mongoose.connect(db_string, { useNewUrlParser: true })
.then(() => {
    const fileName = './cities.csv';
    csvtojson().fromFile(fileName).then(async source => {
        for (var i = 0; i < source.length; i++) {
            let state = source[i]['state'];
            await Cities.findOneAndUpdate({ _id: i }, { state: state });
            console.log('index: ', i);
        }
    });
})
.catch(err => console.log(err));