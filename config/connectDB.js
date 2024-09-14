const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URI

const connectDB = async () => {
  try {
    console.log("MONGO_URL = ", MONGO_URL.toString());
    await mongoose.connect(MONGO_URL.toString());
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

module.exports = connectDB;
