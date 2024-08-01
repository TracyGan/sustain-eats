import mongoose from "mongoose";
import { db } from "./dbpass.js";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// module.exports = connectDB;
export default connectDB;
