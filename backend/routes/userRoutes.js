import express from "express";
const router = express.Router();
import {
   loginController,
   registerController,
   LogoutController,
} from "../controllers/userControllers.js";

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/logout/:id", LogoutController);

export { router as userRouter };
