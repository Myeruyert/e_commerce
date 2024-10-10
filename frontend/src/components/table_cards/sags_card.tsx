"use client";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Label } from "../ui/label";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { CartContext } from "../context/cart_context";

const SagsCardTable = ({ i }: any) => {
  const { cardData, cartData } = useContext(CartContext);
  const [quantity, setQuantity] = useState(i.quantity);

  // productId, quantity

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
      }
    } catch (error) {
      console.log("Failed to delete cart data", error);
    }
  };

  // useEffect(() => {
  //   cardData();
  // }, []);

  console.log("id", i);

  return (
    <div className="mt-5">
      <Card className="rounded-2xl m-auto bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src="\images\girl.png" alt="" className="rounded-2xl" />
          <div className="flex flex-col justify-between">
            <p className="text-base">{i.product.name}</p>
            <div className="">
              <Button
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
              >
                -
              </Button>
              <Label className="4xl mx-4">{quantity}</Label>
              <Button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
              >
                +
              </Button>
            </div>
            <p className="text-base font-bold">{i.totalAmount}₮</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="p-0 hover:bg-transparent hover:scale-110"
          onClick={() => deleteProduct(i.product._id)}
        >
          <RiDeleteBin6Line className="font-thin text-2xl" />
        </Button>
      </Card>
    </div>
  );
};

export default SagsCardTable;
