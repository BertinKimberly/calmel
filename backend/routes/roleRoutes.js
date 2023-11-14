import express from "express";
import { createRole, getRoles } from "../controllers/roleController.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();

//routes

router.post("/role", createRole);
router.get("/roles", getRoles);

export { router as roleRouter };
