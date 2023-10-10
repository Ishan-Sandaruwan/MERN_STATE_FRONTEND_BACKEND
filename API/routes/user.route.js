import express from "express";
import { test , updateUser } from "../controllers/user.controller.js";
import {varifyToken} from '../utils/verifyUser.js';

const router = express.Router();

router.get("/test", test);

router.post('/update/:id', varifyToken ,updateUser);

export default router ;