const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Abbreviation = mongoose.model('Abbreviation');

router.get('/:names', async (req, res) => {
    const namesString = req.params.names;
    const names = namesString.split(',');

    let url = [];
    for (let i=0; i<names.length; i++) {
        let findRes = await Abbreviation.findOne({ name: names[i] }).catch(err => {
            res.status(500).json({
                message: 'Internal server error: ' + err,
            });
        });

        if (findRes) {
            url.push(findRes.url);
        } else {
            url.push(null);
        }
    }

    res.status(200).json({ url });
});

router.post('/', (req, res) => {
    const saveData = new Abbreviation(req.body);
    saveData.save().then(saveRes => {
        if (saveRes) {
            res.status(200).json({
                success: true,
            });
        } else {
            res.status(500).json({
                message: "Internal server error.",
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: "Internal server error: " + err,
        });
    });
})

module.exports = router;