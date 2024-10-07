import { model, Schema } from "mongoose";

interface ICart {
  user: Schema.Types.ObjectId;
  products: [{ product: Schema.Types.ObjectId; quantity: number }];
  totalAmount: number;
}

const cartSchema = new Schema<ICart>({
  user: {
    type: Schema.Types.ObjectId,
    // required: true,
    ref: "User",
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        // required: true
      },
    },
  ],
  totalAmount: {
    type: Number,
  },
});

const Cart = model("Cart", cartSchema);
export default Cart;
