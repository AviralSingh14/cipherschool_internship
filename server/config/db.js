const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://aviralsingh2714:AviabhiMongo2714@cluster0.j428su7.mongodb.net/?retryWrites=true&w=majority"
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e); 
    throw e;
  }
};

module.exports = InitiateMongoServer;