import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // custom ID instead of ObjectId
    name: { type: String, required: true }, // user name
    email: { type: String, required: true }, // email
    imageUrl: { type: String, required: true }, // profile image
    enrolledCourses: [
      // array of references to Course model
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

const User = mongoose.model("User", userSchema);

export default User;
