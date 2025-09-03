import mongoose from "mongoose";

//connct to the MongoDB database
const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("DataBase Connected"));

  await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
};
export default connectDB;
