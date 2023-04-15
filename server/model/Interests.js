const mongoose = require("mongoose");

const InterestsSchema = mongoose.Schema({
  interestName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("interests", InterestsSchema);