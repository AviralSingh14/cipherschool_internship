const mongoose = require("mongoose");

const FollowersSchema = mongoose.Schema({
  followername: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  followers: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("followers", FollowersSchema);