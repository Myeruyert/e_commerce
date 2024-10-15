"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ICart, ISizeLists, CartContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import { ProductContext } from "./product_context";

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartData:
    // [
    {
      products: [
        {
          product: {
            name: "",
            category: "",
            comment: [],
            description: "",
            discount: 0,
            images: [],
            isNew: true,
            price: 0,
            quantity: 0,
            size: "",
            _id: "",
          },
          quantity: 0,
          totalAmount: 0,
          size: {
            size: "",
            id: "",
          },
        },
      ],
      totalAmount: 0,
      productId: "",
    },
  // ],
  setCartData: (cartData: ICart) => {},
  postCartData: () => {},
  count: 0,
  setCount: () => {},
  minus: () => {},
  add: () => {},
  getcartData: () => {},
  deleteProduct: async (productId: string) => {},
  refetch: false,
  setRefetch: (refetch: boolean) => {},
  addCount: (id: string) => {},
  reduceCount: (id: string) => {},
  productSize: {
    size: "",
    id: "",
  },
  setProductSize: (productSize: object) => {},
  sizeList: [{ size: "", id: "" }],
  updateCartData: async (productId: string, newQuantity: number) => {},
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const { id } = useParams();
  const [count, setCount] = useState<number>(0);
  const [refetch, setRefetch] = useState(false);
  const { product } = useContext(ProductContext);
  const [cartData, setCartData] = useState<ICart>(
    // [
    {
      products: [
        {
          product: {
            name: "",
            category: "",
            comment: [],
            description: "",
            discount: 0,
            images: [],
            isNew: true,
            price: 0,
            quantity: 0,
            size: "",
            _id: "",
          },
          quantity: 0,
          totalAmount: 0,
          size: {
            size: "",
            id: "",
          },
        },
      ],
      totalAmount: 0,
      productId: id,
    }
    // ]
  );
  const sizeList: ISizeLists[] = [
    { size: "XS", id: "1" },
    { size: "S", id: "2" },
    { size: "M", id: "3" },
    { size: "L", id: "4" },
    { size: "XL", id: "5" },
    { size: "XXL", id: "6" },
    { size: "XXXL", id: "7" },
  ];

  const [productSize, setProductSize] = useState<ISizeLists>({
    size: "",
    id: "",
  });

  const minus = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  const addCount = (id: string) => {
    setCartData((prev) => ({
      ...prev,
      products: prev.products.map((product) => {
        if (product.product._id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      }) as any,
    }));
  };

  const reduceCount = (id: string) => {
    setCartData((prev) => ({
      ...prev,
      products: prev.products.map((product) => {
        if (product.product._id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      }) as any,
    }));
  };

  const getcartData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/api/v1/cart/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        // console.log("000000000", res.data.cartData.products);
        // setTableData(res.data.cartData.products);
        let cart = res.data.cartData;
        console.log("cart", cart);
        cart.products = cart.products.map((product: any) => ({
          ...product,
          price:
            product.product.price -
            Math.floor(
              (product.product.price * product.product.discount) / 100
            ),
        }));

        cart.products = cart.products.map((product: any) => ({
          ...product,
          totalAmount:
            product.quantity *
            (product.product.price -
              Math.floor(
                (product.product.price * product.product.discount) / 100
              )),
        }));

        cart.products.forEach((number: any) => {
          cart.totalAmount += number.totalAmount;
        });

        setCartData(cart);
      }
    } catch (error) {
      console.log("Failed to get cart data", error);
    }
  };

  const postCartData = async () => {
    try {
      const postingProduct = product.find((cur) => cur._id === id);
      // console.log("PCID", postingProduct);
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${apiUrl}/api/v1/cart/insert`,
        {
          productId: id,
          quantity: count,
          totalAmount: (postingProduct?.price || 0) * count,
          size: productSize,
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

  const deleteProduct = async (productId: string) => {
    console.log("productId", productId);
    try {
      // const id = i.product._id;
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${apiUrl}/api/v1/cart/delete`, {
        data: {
          productId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        console.log("Delete", res.data.updatedCart);
        setRefetch(!refetch);
      }
    } catch (error) {
      console.log("Failed to delete cart data", error);
    }
  };

  const updateCartData = async (productId: string, newQuantity: number) => {
    setCartData((prev) => ({
      ...prev,
      products: prev.products.map((product) =>
        product.product._id === productId
          ? { ...product, quantity: newQuantity }
          : product
      ) as any,
    }));
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${apiUrl}/api/v1/cart/update`,
        {
          productId,
          newQuantity,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 200) {
        toast.success("Updated data successfully");
        setRefetch(!refetch);
      }
    } catch (error) {
      console.log("Failed to delete cart data", error);
      toast.error("Couldn't updated");
    }
  };

  // const updateCart = (cart) => {};

  console.log("cartData", cartData);
  console.log("SIZES", productSize);
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
        getcartData,
        deleteProduct,
        refetch,
        setRefetch,
        addCount,
        reduceCount,
        productSize,
        setProductSize,
        sizeList,
        updateCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
