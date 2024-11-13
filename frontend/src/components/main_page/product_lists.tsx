"use client";
import React, { useContext } from "react";
import { ProductCard } from "../card/card";
import { ProductContext } from "../context/product_context";

const ProductLists = () => {
  const { product, isLoading } = useContext(ProductContext);
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto gap-4 p-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 max-w-[1200px] mx-auto my-5 gap-4">
      {product?.map((c, i) =>
        i === 6 || i === 7 ? (
          <div className="col-span-2 row-span-2" key={i}>
            <ProductCard
              name={c.name}
              price={c.price}
              _id={c._id}
              discount={c.discount}
              images={c.images}
            />
          </div>
        ) : (
          <div className="col-span-1 row-span-1" key={i}>
            <ProductCard
              name={c.name}
              price={c.price}
              _id={c._id}
              discount={c.discount}
              images={c.images}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ProductLists;
