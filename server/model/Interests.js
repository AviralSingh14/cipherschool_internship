const mongoose = require("mongoose");

const InterestsSchema = mongoose.Schema({
  interest: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("interest", InterestsSchema);