import mongoose from "mongoose";
export const userSchema = mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    required: true,
    type: String,
    minLength: 6,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
