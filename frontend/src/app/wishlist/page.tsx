"use client";
import { CartContext } from "@/components/context/cart_context";
import { WishListContext } from "@/components/context/wishlist_context";
import SavedProduct from "@/components/saved_product";
import React, { useContext, useEffect } from "react";

const Wishlists = () => {
  const { wishListData, getWishListData } = useContext(WishListContext);
  const { refetch } = useContext(CartContext);
  useEffect(() => {
    getWishListData();
  }, [refetch]);
  return (
    <div className="w-1/2 h-[calc(100vh-290px)] m-auto pt-16">
      <h1 className="text-xl font-bold mb-4">
        Хадгалсан бараа ({wishListData.products.length}){" "}
      </h1>
      {wishListData.products?.map((data, i) => (
        <SavedProduct
          key={i}
          name={data.product.name}
          price={data.product.price}
          _id={data.product._id}
          images={data.product.images}
        />
      ))}
    </div>
  );
};

export default Wishlists;
