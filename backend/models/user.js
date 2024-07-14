const mongoose = require("mongoose");
const { string } = require("zod");
const { Schema } = mongoose;
export const userSchema = new Schema({
  email: { require: true, type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
