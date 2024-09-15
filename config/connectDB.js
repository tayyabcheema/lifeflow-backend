const dotenv = require("dotenv");
dotenv.config()
const mongoose = require("mongoose");
const MONGO_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.2wsh1um.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

module.exports = connectDB;
