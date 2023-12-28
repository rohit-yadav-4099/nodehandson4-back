const mongoose = require("mongoose");
const cloudURL = "mongodb+srv://<handson4>:<handson4>@cluster0.ltpukis.mongodb.net/handson4?retryWrites=true&w=majority"

const connection = async () => {
  try {
    await mongoose.connect(cloudURL);
    console.log("Connected to the database");
  }
  catch (err) {
    console.error("Error occured in connection to DataBase", err);
  }
};
module.exports = connection;