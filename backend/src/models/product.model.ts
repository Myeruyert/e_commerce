import { model, Schema } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
  comment?: [
    {
      name: string;
      rating: number;
      comment: string;
    }
  ];
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      enum: ["XS", "S", "L", "XL", "XXL", "XXXL"],
      default: "M",
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: ["img"],
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    comment: [
      {
        name: String,
        rating: Number,
        comment: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>("Product", productSchema);

export default Product;
