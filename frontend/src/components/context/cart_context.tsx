"use client";
import React, { createContext, useEffect, useState } from "react";
import { ICart, CartContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartData: [],
  setCartData: () => {},
  postCartData: async () => {},
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartData, setCartData] = useState<ICart>({
    name: "",
    price: "",
    quantity: "",
    discount: "",
  });

  //   const [product, setProduct] = useState<IProduct[]>([]);

  const postCartData = async () => {
    const {name, price, quantiy, discount} =
    try {
      const res = await axios.post(`${apiUrl}/api/v1/insert`, {
        name,
        price,
        quantity,
        discount,
      });
      if (res.status === 200) {
        toast.success("Added to shopping cart successfully");
      }
    } catch (error) {
      console.log("cant fetch product lists", error);
      toast.error("Failed to fetch product data");
    }
  };

  useEffect(() => {
    postCartData();
  }, []);

  console.log("CD", cartData);
  return (
    <CartContext.Provider value={{ cartData, setCartData, postCartData }}>
      {children}
    </CartContext.Provider>
  );
};
