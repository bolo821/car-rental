const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Airport = mongoose.model('Airports');
const City = mongoose.model('Cities');

router.get('/:searchKey', async (req, res) => {
    const { searchKey } = req.params;

    try {
        const cityRes = await City.find({ city_name: { '$regex': searchKey, '$options': 'i' }}).limit(6);
    
        const airportRes = await Airport.find({ $or: [{ code: { '$regex': searchKey, '$options': 'i' }},
            { name: { '$regex': searchKey, '$options': 'i' }}]
        }).limit(6);

        let cityLen = cityRes.length;
        let airportLen = airportRes.length;

        if (cityLen >= 3 && airportLen >= 3) {
            res.json({
                city: cityRes.slice(0, 3),
                airport: airportRes.slice(0, 3),
            });
        } else if (cityLen < 3 && airportLen >= 3) {
            res.json({
                city: cityRes,
                airport: airportLen > 6-cityLen ? airportRes.slice(0, 6-cityLen) : airportRes,
            });
        } else if (cityLen >= 3 && airportLen < 3) {
            res.json({
                city: cityLen > 6-airportLen ? cityRes.slice(0, 6-airportLen) : cityRes,
                airport: airportRes,
            });
        } else {
            res.json({
                city: cityRes,
                airport: airportRes,
            })
        }
    } catch (err) {
        console.log('error: ', err);
        res.status(500).json({
            message: 'Internal server error: ',
        });
    }
});


module.exports = router;