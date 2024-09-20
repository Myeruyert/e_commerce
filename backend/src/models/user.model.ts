import { model, Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  created_at: Date;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг заавал оруулна"],
  },
  email: {
    type: String,
    required: [true, "Хэрэглэгчийн и-мэйлийг заавал оруулна"],
  },
  password: {
    type: String,
    minLenght: [8, "хэрэглэгчийн нууц үг хамгийн багадаа 8 тэмдэгт байна"],
    requied: [true, "Хэрэглэгчийн нууц үгийг заавал оруулна уу"],
  },
  phoneNumber: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", userSchema);

export default User;
