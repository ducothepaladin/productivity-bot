import express from "express";
import {auth} from "../middleware/Auth.js";
import { confirmTask, deleteTaskById, generateDemoTasks, getTaskById, getTasksByDate } from "../controller/TaskController.js";


const router = express.Router();

router.use(auth);


router.post("/generate", generateDemoTasks);
router.post("/confirm", confirmTask);
router.get("/by-date", getTasksByDate);
router.get("/detail/:id", getTaskById);
router.delete("/delete/:id", deleteTaskById);


export default router;