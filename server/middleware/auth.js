const jwt = require("jsonwebtoken");
require('dotenv').config();
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');

module.exports = function(req, res, next) {
  // const token = req.header("x-auth-token");
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Authentication Error" });

  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    next();
  } 
  catch (e) {
    console.error(e);
    res.status(401).send({ message: "Invalid Token" });
  }
};


