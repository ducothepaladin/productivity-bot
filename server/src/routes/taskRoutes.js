import express from "express";
import {auth} from "../middleware/Auth.js";
import { generateDemoTasks } from "../controller/TaskController.js";


const router = express.Router();

router.use(auth);


router.post("/generate", generateDemoTasks);


export default router;