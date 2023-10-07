import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPass = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPass });
  try {
    await newUser.save();
    res.status(201).json("User Created successfully ");
  } catch (err) {
    next(err);
    // errorHandler(550,'error from the function')
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "user not found"));
    const validPass = bcrypt.compareSync(password, validUser.password);
    if (!validPass) return next(errorHandler(401, "invalid password"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password:pass, ...rest} = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
