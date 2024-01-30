require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.DATABASE_URL;

const connectToMongo = () => {
  mongoose.connect(mongoURI);
  console.log("Connected to database successfully!");
};

module.exports = connectToMongo;
