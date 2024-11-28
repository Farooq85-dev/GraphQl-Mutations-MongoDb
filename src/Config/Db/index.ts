import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(String(process.env?.MONGODB_URI));
    console.log("📅 MONGODB connected SUCCESSFULLY!");
  } catch (error) {
    console.log("MONGODB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDb;
