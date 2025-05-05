import express from "express";
import { register } from "../controller/AuthController.js";

const router = express.Router();


router.post("/register", register);


export default router;