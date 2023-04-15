const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user")
const follower = require("./routes/follower")
const InitiateMongoServer = require("./config/db");
const cors = require('cors');
require('dotenv').config();
// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

//Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.get("/user", (req, res) => {
  res.json({ message: "User header Working" });
});

app.get("/follower", (req, res) => {
  res.json({ message: "Follower Working" });
});

app.get("/user/me/update-password", (req, res) => {
  res.json({ message: "update pass Working" });
});

app.use(cors())
app.use("/user", user)
app.use("/follower", follower)
app.use("/user/update-password", user)

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
