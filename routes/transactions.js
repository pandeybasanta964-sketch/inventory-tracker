'use strict';

const express = require('express');
const router = express.Router();

// API endpoint for recording goods taken
router.post('/take', (req, res) => {
    const { itemId, quantity } = req.body;
    // Logic to record goods taken
    // For now, just send a response
    res.status(200).send({ message: `Recorded ${quantity} of item ID ${itemId} taken.` });
});

// API endpoint for recording goods returned
router.post('/return', (req, res) => {
    const { itemId, quantity } = req.body;
    // Logic to record goods returned
    // For now, just send a response
    res.status(200).send({ message: `Recorded ${quantity} of item ID ${itemId} returned.` });
});

module.exports = router;