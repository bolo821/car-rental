const csvtojson = require('csvtojson');
const mongoose = require("mongoose");
const Airports = require('./Airports');

var db_string = 'mongodb://localhost:27017/car_rental';
require("./Airports");
mongoose.connect(db_string, { useNewUrlParser: true })
.then(() => {
    const fileName = './airports.csv';
    csvtojson().fromFile(fileName).then(async source => {
        for (var i = 0; i < source.length; i++) {
            var oneRow = {
                code: source[i]['code'],
                display_loc: source[i]['display_loc'],
                full_loc: source[i]['full_loc'],
                name: source[i]['name'],
                city: source[i]['city'],
                state: source[i]['state'],
                country: source[i]['country'],
                tz: source[i]['tz'],
                latitude: source[i]['latitude'],
                longitude: source[i]['longitude'],
                ctid: source[i]['ctid'],
                train: source[i]['train'],
            };
            let airport = new Airports(oneRow);
            await airport.save();
            console.log('index: ', i);
        }
    });
})
.catch(err => console.log(err));