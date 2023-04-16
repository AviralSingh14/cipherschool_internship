const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const Interest = require('../model/Interests')

module.exports = router;

let interests = [];

router.get('/', (req, res) => {
    try {
        res.status(200).json({ success: true, interests });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch interests' });
    }
});

router.post('/', async(req, res) => {
    try {
        const { interest } = req.body;
        if (!interest) {
            // Send error message as response if interest is not provided
            res.status(400).json({ success: false, message: 'Interest not provided' });
        } else if (interests.includes(interest)) {
            // Remove interest if it already exists
            interests = interests.filter(item => item !== interest);
            res.status(200).json({ success: true, message: 'Interest removed successfully' });
        } else {
            // Add interest if it doesn't exist
            interests.push(interest);
            res.status(200).json({ success: true, message: 'Interest added successfully' });
        }
    } 
    catch (error) {
        // Send error message as response
        res.status(500).json({ success: false, message: 'Failed to toggle interest' });
    };
})

module.exports = router;
