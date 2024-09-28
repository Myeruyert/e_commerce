import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const categoryList = ["Малгай", "Ороолт", "Усны сав", "Цүнх", "Hoodie", "Tee"];

export const CategoryLabel = () => {
  return (
    <aside className=" font-bold">
      <h6 className="mb-4 text-base">Ангилал</h6>
      <div className="flex flex-col gap-3">
        {categoryList?.map((cat) => (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="text-[#09090B] dark:text-white font-medium">
              {cat}
            </Label>
          </div>
        ))}
      </div>
    </aside>
  );
};
