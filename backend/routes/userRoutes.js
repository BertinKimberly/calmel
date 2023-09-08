import express from "express";
const router = express.Router();
import {
   loginController,
   registerController,
   LogoutController,
   DisplayUsers,
} from "../controllers/userControllers.js";

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/logout/:id", LogoutController);
router.get("/users", DisplayUsers);

export { router as userRouter };
