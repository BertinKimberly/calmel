import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
      },
      roleId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Role",
      },
      email: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
