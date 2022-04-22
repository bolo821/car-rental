const csvtojson = require('csvtojson');
const mongoose = require("mongoose");
const Cities = require('./City');
require('dotenv').config();

var db_string = process.env.MONGO_URL;
require("./City");
mongoose.connect(db_string, { useNewUrlParser: true })
.then(() => {
    const fileName = './cities-old.csv';
    csvtojson().fromFile(fileName).then(async source => {
        for (var i = 0; i < source.length; i++) {
            var oneRow = {
                city_name_accent: source[i]['city_name_accent'],
                region_name_accent: source[i]['region_name_accent'],
                ar_db_id: source[i]['ar_db_id'],
                ar_location_name: source[i]['ar_location_name'],
                city_name: source[i]['city_name'],
                region_name: source[i]['region_name'],
                country_name: source[i]['country_name'],
                latitude: source[i]['latitude'],
                longitude: source[i]['longitude'],
                iso2: source[i]['iso2'],
                iso3: source[i]['iso3'],
                capital: source[i]['capital'],
                population: source[i]['population'],
            };
            let city = new Cities(oneRow);
            await city.save();
            console.log('index: ', i);
        }
    });
})
.catch(err => console.log(err));