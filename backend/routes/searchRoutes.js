const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Airport = mongoose.model('Airports');
const City = mongoose.model('Cities');
const axios = require('axios');

router.get('/:searchKey', async (req, res) => {
    const { searchKey } = req.params;

    try {
        const cityRes = await City.find({ city_name: { '$regex': searchKey, '$options': 'i' }}).limit(6);
    
        let airportRes = [];

        for (let i=0; i<cityRes.length; i++) {
            let tRes = await Airport.find({ city: cityRes[i].city_name });
            if (tRes) {
                airportRes = [ ...airportRes, ...tRes ];
            }
        }
        if (airportRes.length < 6) {
            let tRes = await Airport.find({ $or: [{ code: { '$regex': searchKey, '$options': 'i' }},
                { name: { '$regex': searchKey, '$options': 'i' }}]
            }).limit(6);
            airportRes = [ ...airportRes, ...tRes ];
        } 

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

router.post('/', async (req, res) => {
    const { searchKey } = req.body;

    let data = {
        'lc': 'en',
        'cc': 'us',
        'where': searchKey,
        'locationType': 81
    }

    let header = {
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        'content-type': 'application/json; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0'
    }

    try {
        const searchRes = await axios.post('https://www.kayak.com/search-widget/auto-complete', data, { headers: header });
        if (searchRes) {
            res.status(200).json(searchRes.data.content);
        } else {
            res.status(200).json([]);
        }
    } catch (err) {
        console.log('error in search using kayak: ', err);
        res.status(500).json({ error: err });
    }
});

module.exports = router;