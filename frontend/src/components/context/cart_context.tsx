"use client";
import React, { createContext, useEffect, useState } from "react";
import { ICart, IInsertData, CartContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartData: {
    name: "",
    price: 0,
    quantity: 0,
    discount: 0,
    image: "",
    user: "",
  },
  setCartData: () => {},
  postCartData: () => {},
  count: 0,
  setCount: () => {},
  minus: () => {},
  add: () => {},
  insertCartData: {
    productId: "",
    quantity: 0,
    totalAmount: 0,
  },
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const { id } = useParams();
  const [count, setCount] = useState<number>(0);
  const [cartData, setCartData] = useState<ICart>({
    name: "",
    price: 0,
    quantity: 0,
    discount: 0,
    image: "",
    user: "",
  });

  const [insertCartData, setInsertCartData] = useState<IInsertData>({
    productId: id,
    quantity: count,
    totalAmount: 0,
  });

  //   const [product, setProduct] = useState<IProduct[]>([]);

  const minus = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  const postCartData = async () => {
    // const { productId } = insertCartData;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${apiUrl}/api/v1/cart/insert`,
        {
          productId: insertCartData.productId,
          quantity: insertCartData.quantity,
          totalAmount: insertCartData.totalAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Added to shopping cart successfully");
      }
    } catch (error) {
      console.log("cant fetch cart lists", error);
      toast.error("Failed to post cart data");
    }
  };

  // console.log("CD=======", cartData);
  // console.log("postedData", insertCartData);
  console.log("Count", count);
  return (
    <CartContext.Provider
      value={{
        cartData,
        setCartData,
        postCartData,
        count,
        setCount,
        minus,
        add,
        insertCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
