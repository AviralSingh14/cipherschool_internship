const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

module.exports = router;

const auth = require("../middleware/auth")
const Follower = require("../model/Followers")

//Followers
router.post("/new-followers",
    [
        check("followername", "Please Enter a Valid Follower Name").not().isEmpty(),
        check("designation", "Please Enter a Valid Designation Name").not().isEmpty(),
        check("followers", "Please Enter Valid Followers").not().isEmpty()
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
        followername,
        designation,
        followers
        } = req.body;
        try {
            let follower = await Follower.findOne({
                followername
            });
            if (follower) {
                return res.status(400).json({
                    msg: "Follower Already Exists"
                });
            }
        
            follower = new Follower({
                followername,
                designation,
                followers
            });
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        };
    }
)
  
module.exports = router;