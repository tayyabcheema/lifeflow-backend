const dotenv = require("dotenv");
dotenv.config()
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

module.exports = connectDB;
