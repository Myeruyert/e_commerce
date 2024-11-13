"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IProduct, ProductContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "./user_context";

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductContext = createContext<ProductContextType>({
  product: [],

  setProduct: (_product: IProduct[]) => {},
  fetchAllProducts: () => {},
  rating: 0,
  setRating: (_rating: number) => {},
  comment: "",
  setComment: (_comment: string) => {},
  newComment: (_id: string | string[]) => {},
  oneProduct: {
    _id: "",
    name: "",
    description: "",
    price: 0,
    size: "",
    images: [],
    isNew: true,
    quantity: 0,
    discount: 0,
    category: "",
    comment: [
      {
        name: "",
        rating: 0,
        comment: "",
      },
    ],
  },
  // setOneProduct: (oneProduct: IOneProduct) => {},
  fetchProductData: (_id: string | string[]) => {},
  isLoading: true,
  setIsLoading: (_isLoading: boolean) => {},
});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<IProduct[]>([]);
  const { user } = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [oneProduct, setOneProduct] = useState({
    _id: "",
    name: "",
    description: "",
    price: 0,
    size: "",
    images: [],
    isNew: true,
    quantity: 0,
    discount: 0,
    category: "",
    comment: [
      {
        name: "",
        rating: 0,
        comment: "",
      },
    ],
  });

  const fetchAllProducts = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${apiUrl}/api/v1/product`);
      if (res.status === 200) {
        const { product } = res.data;
        setProduct(product);
        // console.log("RESDATA", res.data.product);
      }
    } catch (error) {
      console.log("cant fetch product lists", error);
    } finally {
      setIsLoading(false);
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className="animate-pulse">
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  //         {[...Array(8)].map((_, index) => (
  //           <div key={index} className="space-y-4">
  //             <div className="h-48 bg-gray-200 rounded-lg" />
  //             <div className="h-4 bg-gray-200 rounded w-3/4" />
  //             <div className="h-4 bg-gray-200 rounded w-1/2" />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  const fetchProductData = async (id: string | string[]) => {
    // console.log("id", id);
    try {
      setIsLoading(true);
      const res = await axios.get(`${apiUrl}/api/v1/product/${id}`);

      if (res.status === 200) {
        const { product } = res.data;
        setOneProduct(product);
      }
    } catch (error) {
      console.log("cant fetch product lists", error);
    } finally {
      setIsLoading(false);
    }
  };

  const newComment = async (id: string | string[]) => {
    try {
      const res = await axios.post(`${apiUrl}/api/v1/product/comment/${id}`, {
        comment,
        rating,
        user,
      });
      if (res.status === 200) {
        toast.success("Added comment successfully");
      }
    } catch (error) {
      console.log("can't add comment", error);
      toast.error("Failed to post comment");
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // console.log("PROD", product);
  console.log("COMMENT", comment, rating);
  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        fetchAllProducts,
        rating,
        setRating,
        comment,
        setComment,
        newComment,
        oneProduct,
        fetchProductData,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
