"use client";
import React, { ChangeEvent, useContext, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryContext } from "../context/category_context";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const CategoryLabel = () => {
  const { category } = useContext(CategoryContext);
  // const [selectedCat, setSelectedCat] = useState({ id: "" });
  const [selectedCat, setSelectedCat] = useState<string[]>([]);

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const checkedId = event.target.value;
    if (id === checkedId) {
      if (selectedCat.includes(checkedId)) {
        setSelectedCat(selectedCat.filter((cur) => cur !== checkedId));
      } else {
        setSelectedCat([...selectedCat, checkedId]);
      }
    }
  };
  console.log("CATS", selectedCat);

  return (
    <aside className=" font-bold">
      <h6 className="mb-4 text-base">Ангилал</h6>
      <div className="flex flex-col gap-3">
        {category?.map((cat) => (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              value={cat._id}
              onClick={(event) =>
                handleCheckboxChange(
                  event as unknown as ChangeEvent<HTMLInputElement>,
                  cat._id
                )
              }
            />
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

//search hesgee back deeree hiih, product aa cat-aar find hiih
