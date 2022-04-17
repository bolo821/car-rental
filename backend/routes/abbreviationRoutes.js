const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Abbreviation = mongoose.model('Abbreviation');

router.get('/:name', (req, res) => {
    const { name } = req.params;
    Abbreviation.findOne({ name: name }).then(findRes => {
        if (findRes) {
            res.status(200).json({
                url: findRes.url,
            });
        } else {
            res.status(400).json({
                message: `Abbreviation for "${name}" not found.`,
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: 'Internal server error: ' + err,
        });
    });
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