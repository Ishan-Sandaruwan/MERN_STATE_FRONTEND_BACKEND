import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async(req, res) => {
    const { username , email , password } = req.body ;
    const hashPass = bcrypt.hashSync(password,10);
    const newUser = new User({ username , email , password : hashPass });
    try{
        await newUser.save();
        res.status(201).json("User Created successfully ");
    }catch(err){
        res.status(500).json(err.message);
    }
    
};
