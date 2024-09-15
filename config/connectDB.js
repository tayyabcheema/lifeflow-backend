const dotenv = require("dotenv");
dotenv.config()
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL.toString()

const connectDB = async () => {
  try {
    console.log(MONGO_URL);
    await mongoose.connect(MONGO_URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

module.exports = connectDB;
