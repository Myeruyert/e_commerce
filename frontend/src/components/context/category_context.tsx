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
  getFilteredProducts: (id: string | string[]) => {},
  filteredProducts: [],
  setFilteredProducts: (filteredProducts: IProduct[]) => {},
  selectedCat: [],
  setSelectedCat: (selectedCat: string[]) => {},
});

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [selectedCat, setSelectedCat] = useState<string[]>([]);

  const fetchCategoryData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/categories`);
      if (res.status === 200) {
        setCategory(res.data.category);
        // console.log("RESCAT", res.data.category);
      }
    } catch (error) {
      console.log("cant fetch category lists", error);
    }
  };

  const getFilteredProducts = async (id: string | string[]) => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/product/search/${id}`);
      if (res.status === 200) {
        setFilteredProducts(res.data.filteredProducts);
        console.log("FDD", res.data);
      }
    } catch (error) {
      console.log("can't get filtered products", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
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
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
