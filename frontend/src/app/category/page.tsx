"use client";
import { ProductCard } from "@/components/card/card";
import { CategoryLabel } from "@/components/category";
import { SizeLabel } from "@/components/category/size_label";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { ProductContext } from "@/components/context/product_context";
import { CategoryContext } from "@/components/context/category_context";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CategoryPage = () => {
  const { product } = useContext(ProductContext);
  const {
    category,
    getFilteredProducts,
    filteredProducts,
    selectedCat,
    setSelectedCat,
  } = useContext(CategoryContext);
  // const [selectedCat, setSelectedCat] = useState({ id: "" });

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

  useEffect(() => {
    getFilteredProducts(selectedCat);
  }, [selectedCat]);

  console.log("CATS", selectedCat);
  return (
    <div className="mt-16 mb-24 w-3/4 m-auto">
      <div className="flex gap-32">
        <aside className="flex flex-col gap-12">
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
                    className="text-[#09090B] dark:text-white font-medium"
                  >
                    {cat.name}
                  </Label>
                </div>
              ))}
            </div>
          </aside>
          <SizeLabel />
        </aside>
        <main className="grid grid-cols-3 gap-8 w-2/3 mx-auto">
          {filteredProducts?.map((c) => (
            <ProductCard
              name={c.name}
              price={c.price}
              _id={c._id}
              discount={c.discount}
              images={c.images}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
