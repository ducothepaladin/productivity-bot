import express from "express";
import { initialSetup } from "../controller/PersonalityController.js";

const router = express.Router();


router.post("/init", initialSetup);


export default router;