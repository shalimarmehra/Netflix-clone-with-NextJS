import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shalimarmehra:shalimarmehra@cluster0.twjqok0.mongodb.net/"
    );
    console.log("mongoDB is Connected !");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
