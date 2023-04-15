require('dotenv').config();
const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const crypto = require("crypto");


const secretKey = crypto.randomBytes(32).toString("hex");

module.exports = router;

const User = require("../model/User");
const auth = require("../middleware/auth")

//SignUp
router.post(
    "/signup",
    [
        check("firstname", "Please Enter a Valid firstName")
        .not()
        .isEmpty(),
        check("lastname", "Please Enter a Valid lastName")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            firstname,
            lastname,
            email,
            password
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }

            user = new User({
                firstname,
                lastname,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "secret", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

//Login
router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
  
      const { email, password } = req.body;
      try {
        const user = await User.findOne({
          email
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist"
          });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: '1h'
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
);

//Get Logged in User
// router.post("/me", auth, async (req, res) => {
//   const {email, password} = req.body;
//     try {
//       // request.user is getting fetched from Middleware after token authentication
//       const user = await User.findOne({email});
//       if(!user){
//         return res.status(401).send({message : "Invalid email or password"})
//       }
//       // res.json(user);
//       const isPasswordMatch = await bcrypt.compare(password, user.password);
//       if (!isPasswordMatch){
//         // res.json(user)
//         return res.status(401).send({message : "Invalid email or password"})
//       }
//       res.send({message : "LoggedIn!"}) 
//     } catch (e) {
//       res.send({ message: "Error in Fetching user" });
//     }
// });
// router.get("/me", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (e) {
//     res.status(500).json({ message: "Error in Fetching user" });
//   }
// });
router.get("/me", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

// Update Password
// router.put("/me/update-password", auth, async (req, res) => {
//   const { username, currentPassword, newPassword } = req.body;
//   try {
//     const user = await User.findOne({username});
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }
  
//     const isMatch = await bcrypt.compare(currentPassword, user.password);
  
//     if (!isMatch) {
//       return res.status(400).json({ message: "Incorrect current password" });
//     }
  
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);
//     await user.save();
  
//     res.status(200).json({ message: "Password updated successfully" });
//   } 
//   catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }

router.put("/me/update-password", auth, async (req, res) => {
  const { currentPassword, newPassword, reEnteredPassword } = req.body;
  const userId = req.user.id; // Assuming the authenticated user ID is available in req.user object

  try {
    const user = await User.findById(userId); // Find user by ID
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect current password" });
    }

    if (newPassword !== reEnteredPassword) {
      return res.status(400).json({ message: "New password and re-entered password do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete Account
router.delete("/me/delete-account", auth, async (req, res) => {
  try {
    await User.findByIdAndRemove(req.user.id);
    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Logout
router.get("/logout", auth, async (req, res) => {
  try {
    // Remove token from user's tokens array
    req.user.tokens = req.user.tokens.filter(
      token => token.token !== req.token
    );
    await req.user.save();
    res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
