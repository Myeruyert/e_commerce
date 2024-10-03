"use client";
import React, { createContext, useEffect, useState } from "react";
import { IProduct, ProductContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductContext = createContext<ProductContextType>({
  product: [],
  fetchAllProducts: () => {},
});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState<IProduct[]>([]);

  //   const [product, setProduct] = useState<IProduct[]>([]);

  const fetchAllProducts = async () => {
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

  const { id } = useParams();
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id: string | string[]) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    if (id) {
      getArticleById(id);
    }
  }, [id]);
  console.log("ad", articleDetail);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  console.log("PROD", product);
  return (
    <ProductContext.Provider value={{ product, fetchAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
