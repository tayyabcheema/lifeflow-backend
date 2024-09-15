const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://tayyabcheema:tayyab007@cluster0.2wsh1um.mongodb.net/lifeflow?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

module.exports = connectDB;
