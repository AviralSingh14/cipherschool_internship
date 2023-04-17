const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const Interest = require('../model/Interests')

module.exports = router;

router.get('/', async (req, res) => {
    try {
        const interests = await Interest.find(); // Fetch all interests from the database
        res.status(200).json({ success: true, interests });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch interests' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { interest } = req.body;
        if (!interest) {
            // Send error message as response if interest is not provided
            res.status(400).json({ success: false, message: 'Interest not provided' });
        } else {
            // Check if interest already exists in the database
            const existingInterest = await Interest.findOne({ interest });
            if (existingInterest) {
                // If interest exists, remove it from the database
                await Interest.deleteOne({ interest });
                res.status(200).json({ success: true, message: 'Interest removed successfully' });
            } else {
                // If interest does not exist, add it to the database
                const newInterest = new Interest({ interest });
                await newInterest.save();
                res.status(200).json({ success: true, message: 'Interest added successfully' });
            }
        }
    } catch (error) {
        // Send error message as response
        res.status(500).json({ success: false, message: 'Failed to toggle interest' });
    }
});

module.exports = router;
