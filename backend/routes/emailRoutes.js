const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Email = mongoose.model('Email');

router.post('/', (req, res) => {
    Email.findOne({ email: req.body.email }).then(findRes => {
        if (findRes) {
            res.status(400).json({
                message: "You already subscribed."
            });
        } else {
            const saveData = new Email(req.body);
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
        }
    });
});

module.exports = router;