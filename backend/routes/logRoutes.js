const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Log = mongoose.model('Logs');
const requestIp = require('request-ip')

router.post('/', async (req, res) => {
    try {
        let ip = requestIp.getClientIp(req);
        let country = 'Country';
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