import express from "express";
import { createRole, getRoles } from "../controllers/roleController.js";

const router = express.Router();

//routes

router.post("/role", createRole);
router.get("/roles", getRoles);

export { router as roleRouter };
