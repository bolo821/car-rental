const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Airport = mongoose.model('Airports');
const City = mongoose.model('Cities');

router.get('/:searchKey', async (req, res) => {
    const { searchKey } = req.params;

    try {
        const cityRes = await City.find({ city_name: { '$regex': searchKey, '$options': 'i' }}).limit(6);
        let cityCnt = cityRes.length;
    
        let airportRes = [];
        if (cityCnt < 6) {
            airportRes = await Airport.find({ $or: [{ code: { '$regex': searchKey, '$options': 'i' }},
                { name: { '$regex': searchKey, '$options': 'i' }}]
            }).limit(6);
        }

        let cityCodes = cityRes.map(ele => {
            return ele.iso3;
        });

        airportRes = airportRes.filter(ele => {
            return !cityCodes.includes(ele.code);
        });

        if (airportRes.length > 6-cityCnt) {
            airportRes = airportRes.filter((ele, index) => {
                return index < 6-cityCnt;
            });
        }
        
        res.json({
            city: cityRes,
            airport: airportRes,
        });
    } catch (err) {
        console.log('error: ', err);
        res.status(500).json({
            message: 'Internal server error: ',
        });
    }
});


module.exports = router;