import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

export const signup = async(req, res , next) => {
    const { username , email , password } = req.body ;
    const hashPass = bcrypt.hashSync(password,10);
    const newUser = new User({ username , email , password : hashPass });
    try{
        await newUser.save();
        res.status(201).json("User Created successfully ");
    }catch(err){
        next(err);
        // errorHandler(550,'error from the function')
    }
    
};
