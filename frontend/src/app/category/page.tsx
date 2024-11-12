"use client";
import { ProductCard } from "@/components/card/card";
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
  const [allProds, setAllProds] = useState(false);
  const sizeList = ["XS", "S", "M", "XL", "XXL", "XXXL"];

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
        setAllProds(false);
      }
    }
  };

  const selectAllCats = () => {
    setAllProds(true);
    // setSelectedCat("");
  };

  useEffect(() => {
    getFilteredProducts(selectedCat);
  }, [selectedCat]);

  useEffect(() => {
    selectAllCats();
  }, []);

  console.log("CATS", allProds);
  console.log("SLC", selectedCat);
  return (
    <div className="mt-16 mb-24 w-3/4 m-auto">
      <div className="flex gap-32">
        <aside className="flex flex-col gap-12">
          <div className=" font-bold">
            <h6 className="mb-4 text-base">Ангилал</h6>
            <div className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                {/* <RadioGroup
                  defaultValue="1"
                  onValueChange={(value) => {
                    setSelectedCat(value);
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="r1" onClick={selectAllCats} />
                    <Label htmlFor="r1">All</Label>
                  </div>
                  {category?.map((cat, i) => (
                    <div className="flex items-center space-x-2" key={i}>
                      <RadioGroupItem
                        value={cat._id}
                        onClick={() => setAllProds(false)}
                      />
                      <Label htmlFor="r2">{cat.name}</Label>
                    </div>
                  ))}
                </RadioGroup> */}
                <Checkbox id="terms" value={"1"} onClick={selectAllCats} />
                <Label
                  htmlFor="terms"
                  className="text-[#09090B] dark:text-white font-medium"
                >
                  All
                </Label>
              </div>
              {category?.map((cat, i) => (
                <div className="flex items-center space-x-2" key={i}>
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
          </div>
          <div className="font-bold">
            <h6 className="mb-4">Хэмжээ</h6>
            <div className="flex flex-col gap-3">
              {sizeList?.map((size, i) => (
                <div className="flex items-center space-x-2" key={i}>
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="text-[#09090B] dark:text-white font-medium"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="grid grid-cols-3 gap-8 w-2/3 mx-auto">
          {allProds
            ? product?.map((c, i) => (
                <ProductCard
                  key={i}
                  name={c.name}
                  price={c.price}
                  _id={c._id}
                  discount={c.discount}
                  images={c.images}
                />
              ))
            : filteredProducts?.map((c, i) => (
                <ProductCard
                  key={i}
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
