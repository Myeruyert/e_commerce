"use client";
import React, { useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryContext } from "../context/category_context";

// const categoryList = ["Малгай", "Ороолт", "Усны сав", "Цүнх", "Hoodie", "Tee"];

export const CategoryLabel = () => {
  const { category } = useContext(CategoryContext);
  console.log("CATS", category);
  return (
    <aside className=" font-bold">
      <h6 className="mb-4 text-base">Ангилал</h6>
      <div className="flex flex-col gap-3">
        {category?.map((cat) => (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" value={cat._id} onChange={() => {}} />
            <Label
              htmlFor="terms"
              className="text-[#09090B] dark:text-white font-medium">
              {cat.name}
            </Label>
          </div>
        ))}
      </div>
    </aside>
  );
};
