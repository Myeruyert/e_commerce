"use client";
import React, { createContext, useEffect, useState } from "react";
import { IProduct, ProductContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductContext = createContext<ProductContextType>({
  product: [],
  fetchProductData: () => {},
});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState<IProduct[]>([]);

  //   const [product, setProduct] = useState<IProduct[]>([]);

  const fetchProductData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/products`);
      if (res.status === 200) {
        // toast.success("Get products successfully");
        const { product } = res.data;
        setProduct(product);
        // console.log("RESDATA", res.data.product);
      }
    } catch (error) {
      console.log("cant fetch product lists", error);
      // toast.error("Failed to fetch product data");
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  console.log("PROD", product);
  return (
    <ProductContext.Provider value={{ product, fetchProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
