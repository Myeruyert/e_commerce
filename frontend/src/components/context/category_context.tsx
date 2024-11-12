"use client";
import React, { createContext, useEffect, useState } from "react";
import { ICategory, CategoryContextType, IProduct } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";

type CategoryProviderProps = {
  children: React.ReactNode;
};

export const CategoryContext = createContext<CategoryContextType>({
  category: [],
  fetchCategoryData: () => {},
  getFilteredProducts: (_id: string[]) => {},
  filteredProducts: [],
  setFilteredProducts: (_filteredProducts: IProduct[]) => {},
  selectedCat: [],
  setSelectedCat: (_selectedCat: string[]) => {},
  searchValue: "",
  setSearchValue: (_category: string) => {},
  selectedSize: "",
  setSelectedSize: (_selectedSize: string | null) => {},
});

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  // const [searchProducts, setSearchProducts] = useState<[]>([]);
  const [selectedCat, setSelectedCat] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // const filterFunc = () => {
  //   const filtered = product.filter((data) =>
  //     data?.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setSearchProducts(filtered);
  // };

  // setCartData((prevCart) =>
  //   prevCart.map((item) =>
  //     item.product._id === productId
  //       ? { ...item, quantity: newQuantity }
  //       : item
  //   )
  // );

  // console.log("SP", searchProducts);
  const fetchCategoryData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/categories`);
      if (res.status === 200) {
        setCategory(res.data.category);
      }
    } catch (error) {
      console.log("cant fetch category lists", error);
    }
  };

  const getFilteredProducts = async (id: string[]) => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/product/search`, {
        params: {
          category: id,
        },
      });
      if (res.status === 200) {
        setFilteredProducts(res.data.filteredProducts);
        console.log("FDD", res.data);
      }
    } catch (error) {
      console.log("can't get filtered products", error);
    }
  };

  // const fetchFilteredData = async () => {
  //   try {
  //     const res = await axios.post(`${apiUrl}/api/v1/product/filtered`, {
  //       name: searchValue,
  //       category: selectedCat,
  //       size,
  //     });

  //     if (res.status === 200) {
  //       const { product } = res.data;
  //       console.log("PDDDD", res.data);
  //       setProduct(product);
  //     }
  //   } catch (error) {
  //     console.log("cant fetch product lists", error);
  //   }
  // };

  useEffect(() => {
    fetchCategoryData();
    // fetchFilteredData();
  }, []);

  console.log("Filtered data", filteredProducts);

  return (
    <CategoryContext.Provider
      value={{
        category,
        fetchCategoryData,
        getFilteredProducts,
        filteredProducts,
        setFilteredProducts,
        selectedCat,
        setSelectedCat,
        searchValue,
        setSearchValue,
        selectedSize,
        setSelectedSize,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
