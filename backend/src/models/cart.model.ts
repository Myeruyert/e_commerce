import { model, Schema } from "mongoose";

interface ICart {
  name: string;
  price: number;
  image: string;
  quantity: number;
  discount: number;
  user: Schema.Types.ObjectId;
}

const cartSchema = new Schema<ICart>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: "img",
  },
  quantity: {
    type: Number,
    default: 1,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    // required: true,
    ref: "User",
  },
});

const Cart = model("Cart", cartSchema);
export default Cart;
