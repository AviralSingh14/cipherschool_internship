const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user")
const follower = require("./routes/follower")
const InitiateMongoServer = require("./config/db");
const cors = require('cors');

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
  res.json({ message: "User Working" });
});

app.get("/follower", (req, res) => {
  res.json({ message: "Follower Working" });
});

app.use(cors())
app.use("/user", user)
app.use("/follower", follower)

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
