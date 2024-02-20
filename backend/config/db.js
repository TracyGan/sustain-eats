import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";

const db = mongoDBURL;
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

export const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// export default connectDB();
// module.exports = connectDB;
