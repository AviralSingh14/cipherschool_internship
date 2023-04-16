const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

module.exports = router;

const auth = require("../middleware/auth")
const Follower = require("../model/Followers")

router.post('/newfollower', async (req, res) => {
    const { followername, designation, followers } = req.body; 
  
    // Perform validation on request body
    if (!followername || !designation || !followers) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    try {
      // Create a new follower object
      const newFollower = new Follower({
        followername,
        designation,
        followers
      });
  
      // Save the new follower to the database
      const savedFollower = await newFollower.save();
  
      // Return a success response
      return res.status(201).json({ message: 'Follower added successfully', follower: savedFollower });
    } catch (err) {
      // Return an error response if there's an error while saving to the database
      return res.status(500).json({ error: 'Failed to add follower to the database' });
    }
});

router.get('/total', async (req, res) => {
    try {
        const totalFollowers = await Follower.countDocuments();
        return res.json({ totalFollowers });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to retrieve followers from the database' });
    }
});

router.get('/followers', async (req, res) => {
    try {
      const allFollowers = await Follower.find();
      return res.json({ followers: allFollowers });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to retrieve followers from the database' });
    }
});
  
module.exports = router;