import express from "express";
const router = express.Router();
import {
   loginController,
   registerController,
   LogoutController,
   DisplayUsers,
   updateUser,
   deleteUser,
} from "../controllers/userControllers.js";

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/logout/:id", LogoutController);
router.get("/users", DisplayUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export { router as userRouter };
