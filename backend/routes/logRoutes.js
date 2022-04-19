const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Log = mongoose.model('Logs');
const requestIp = require('request-ip')
const axios = require('axios');

router.post('/', async (req, res) => {
    try {
        let ip = requestIp.getClientIp(req);
        if (ip.substr(0, 7) == "::ffff:") {
            ip = ip.substr(7, ip.length);
        }

        let country = 'Country';

        let geoRes = await axios.get(`https://api.geoapify.com/v1/ipinfo?&ip=${ip}&apiKey=${process.env.GEO_API_KEY}`);
        if (geoRes && geoRes.data && geoRes.data.city && geoRes.data.country) {
            country = `${geoRes.data.city.name}, ${geoRes.data.country.name}`
        }

        let logInstance = new Log({ ...req.body, ip, country });
        let saveRes = logInstance.save();

        if (saveRes) {
            res.status(200).json({
                success: true,
            });
        } else {
            res.status(500).json({
                message: 'Error in saving a new log',
            });
        }
    } catch (err) {
        console.log('error: ', err);
        res.status(500).json({
            message: 'Internal server error: ',
        });
    }
});

module.exports = router;