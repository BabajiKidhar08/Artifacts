import mongoose from "mongoose";
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://rudra141020:GbdbpODVr3LGWvC1@cluster0.tzbqkne.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// const Connection = async () => {
//   try {
//     const URL = process.env.DATABASE_URL;
//     await mongoose.connect(URL, { useNewUrlParser: true });

//     console.log("Database connected successfully");
//   } catch (error) {
//     console.log("Error while connecting with Database", error);
//   }
// };

// export default Connection;
