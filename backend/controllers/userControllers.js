import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
   const { username, email, password } = req.body;
   try {
      const user = await User.findOne({ email });
      if (user)
         return res.json({ message: "email was already used", status: false });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      res.json({
         message: "user registered successfully",
         newUser,
         status: true,
      });
   } catch (error) {
      res.json(error.message);
   }
};

export const loginController = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email });
      if (!user)
         return res.json({
            message: "invalid email or password",
            status: false,
         });

      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword)
         return res.json({
            message: "invalid email or password",
            status: false,
         });

      const token = jwt.sign(
         { email: user.email, userId: user._id },
         process.env.JWT_SECRET
      );
      await res.json({
         message: "authenticated",
         user: user.username,
         token: token,
         status: true,
      });
   } catch (error) {
      res.json(error.message);
   }
};
export const LogoutController = async (req, res) => {
   try {
      if (!req.params.id) return res.json({ msg: "User id is required " });
      onlineUsers.delete(req.params.id);
      return res.status(200).json({ msg: "Logged out successfully" });
   } catch (error) {
      res.json(error.message);
   }
};
