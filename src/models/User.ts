import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUserSchema extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  phone: string;
  department: string;
}

const userSchema = new mongoose.Schema<IUserSchema>({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    min: 8,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER"
  },
  phone: {
    type: String
  },
  department: {
    type: String,
    required: true
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
