import express from "express";
import {auth} from "../middleware/Auth.js";
import { confirmTask, generateDemoTasks } from "../controller/TaskController.js";


const router = express.Router();

router.use(auth);


router.post("/generate", generateDemoTasks);
router.post("/confirm", confirmTask);


export default router;