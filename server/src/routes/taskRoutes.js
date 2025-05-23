import express from "express";
import {auth} from "../middleware/Auth.js";
import { confirmTask, generateDemoTasks, getTaskById, getTasksByDate } from "../controller/TaskController.js";


const router = express.Router();

router.use(auth);


router.post("/generate", generateDemoTasks);
router.post("/confirm", confirmTask);
router.get("/by-date", getTasksByDate);
router.get("/detail/:id", getTaskById)


export default router;