const dotenv = require("dotenv");
dotenv.config().parsed
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URL = " ,process.env.MONGO_URL);
    console.log("PORT = " ,process.env.PORT);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

module.exports = connectDB;
