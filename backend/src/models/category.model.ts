import { model, Schema } from "mongoose";

interface Icategory {
  name: string;
  description: string;
}

const categorySchema = new Schema<Icategory>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "category comment",
    },
  },
  {
    timestamps: true,
  }
);

const Category = model<Icategory>("Category", categorySchema);

export default Category;
