"use client";
import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Label } from "../ui/label";
import { UserContext } from "../context/user_context";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { CartContext } from "../context/cart_context";

const SagsCardTable = () => {
  const { count, minus, add, postCartData } = useContext(CartContext);
  const [tableData, setTableData] = useState([
    {
      product: {
        name: "",
        category: "",
        comment: [],
        description: "",
        discount: 0,
        images: [],
        isNewProduct: true,
        price: 0,
        quantity: 0,
        size: "",
        _id: "",
      },
      quantity: 0,
      _id: "",
    },
  ]);

  const cardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/api/v1/cart/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        // console.log("000000000", res.data.cartData.products);
        setTableData(res.data.cartData.products);
      }
    } catch (error) {
      console.log("Failed to get cart data", error);
    }
  };

  const deleteProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${apiUrl}/api/v1/cart/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        console.log("Delete", res.data.updatedCart);
        // setTableData(res.data.updatedCart);
      }
    } catch (error) {
      console.log("Failed to delete cart data", error);
    }
  };

  useEffect(() => {
    cardData();
  }, [tableData]);

  // console.log("CartDaataa", tableData);

  return (
    <>
      {tableData?.map((i) => (
        <div className="mt-5">
          <Card className="rounded-2xl m-auto bg-white dark:bg-black p-4 flex justify-between">
            <div className="flex gap-6">
              <img src="\images\girl.png" alt="" className="rounded-2xl" />
              <div className="flex flex-col justify-between">
                <p className="text-base">{i.product.name}</p>
                <div className="">
                  <Button
                    className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                    onClick={minus}
                  >
                    -
                  </Button>
                  <Label className="4xl mx-4">{i.quantity}</Label>
                  <Button
                    onClick={add}
                    className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                  >
                    +
                  </Button>
                </div>
                <p className="text-base font-bold">{i.product.price}₮</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="p-0 hover:bg-transparent hover:scale-110"
              onClick={deleteProduct}
            >
              <RiDeleteBin6Line className="font-thin text-2xl" />
            </Button>
          </Card>
        </div>
      ))}
    </>
  );
};

export default SagsCardTable;
