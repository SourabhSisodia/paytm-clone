import User from "../models/user.js";
import jwt from "jsonwebtoken";
export const userSignup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const oldUser = await User.findOne({ username });
    if (oldUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({ username, password });
    const token = await jwt.sign({ payload: username }, process.env.JWT_SECRET);
    await newUser.save();

    return res
      .status(200)
      .json({ message: "User Created Sucessfully", value: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
export const userSignin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const oldUser = await User.findOne({ username, password });
    if (!oldUser) {
      return res.status(401).json({ message: "Wrong username or password" });
    }
    const token = await jwt.sign({ payload: username }, process.env.JWT_SECRET);
    return res
      .status(200)
      .json({ message: "User SignedInSucessfuly ", value: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
