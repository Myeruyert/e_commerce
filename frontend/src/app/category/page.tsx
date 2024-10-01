"use client";

import { CardWithForm } from "@/components/card/card";
import { CategoryLabel } from "@/components/category";
import { SizeLabel } from "@/components/category/size_label";
import ProductDetail from "@/components/product_lists/product_detail";
import RatingSection from "@/components/category/rating";
import React, { useContext } from "react";
import { ProductContext } from "@/components/context/product_context";

const CategoryPage = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="mt-16 mb-24 w-3/4 m-auto">
      <div className="flex gap-32">
        <aside className="flex flex-col gap-12">
          <CategoryLabel />
          <SizeLabel />
        </aside>
        <main className="grid grid-cols-3 gap-8 w-2/3 mx-auto">
          {product?.map((c) => (
            <CardWithForm name={c.name} price={c.price} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
