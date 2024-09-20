import { model, Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role: string;
  profile_img: string;
  address?: string;
  created_at: Date;
  updated_at: Date;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг заавал оруулна"],
  },
  lastname: {
    type: String,
    required: [true, "Хэрэглэгчийн овог заавал оруулна"],
  },
  email: {
    type: String,
    required: [true, "Хэрэглэгчийн и-мэйлийг заавал оруулна"],
    unique: true,
  },
  password: {
    type: String,
    minlength: [8, "хэрэглэгчийн нууц үг хамгийн багадаа 8 тэмдэгт байна"],
    requied: [true, "Хэрэглэгчийн нууц үгийг заавал оруулна уу"],
  },
  phoneNumber: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  profile_img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  address: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", userSchema);

export default User;
