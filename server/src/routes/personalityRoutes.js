import express from "express";
import { createInitialPersonality } from "../controller/PersonalityController.js";
import {auth} from "../middleware/Auth.js";

const router = express.Router();

router.use(auth);

router.post("/init", createInitialPersonality);


export default router;