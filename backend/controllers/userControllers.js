import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
   const { username, role, email, password } = req.body;
   try {
      const user = await User.findOne({ email });
      if (user)
         return res.json({ message: "email was already used", status: false });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
         username,
         role,
         email,
         password: hashedPassword,
      });
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
// currently not available
export const LogoutController = async (req, res) => {
   try {
      if (!req.params.id) return res.json({ msg: "User id is required " });
      onlineUsers.delete(req.params.id);
      return res.status(200).json({ msg: "Logged out successfully" });
   } catch (error) {
      res.json(error.message);
   }
};

export const DisplayUsers = async (req, res) => {
   try {
      const users = await User.find({});
      if (users === "") {
         res.json({ message: "no users found" });
      }
      res.status(200).json(users);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const updateUser = async (req, res) => {
   try {
      const { id } = req.params;
      const user = await User.findByIdAndUpdate(id, req.body);
      res.json({ message: "updated successfully", user ,status:true});
   } catch (error) {
      res.json({ message: error.message ,status:false});
   }
};

export const deleteUser = async (req, res) => {
   try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      res.json({ message: "deleted successfully", user ,status:true});
   } catch (error) {
      res.json({ message: error.message ,status:false});
   }
};
