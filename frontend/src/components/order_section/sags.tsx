"use client";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "../ui/card";
import SagsCardTable from "../table_cards/sags_card";
import { Button } from "../ui/button";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { CartContext } from "../context/cart_context";

const Sags = () => {
  const { cartData, cardData } = useContext(CartContext);
  // const [tableData, setTableData] = useState([
  //   {
  //     product: {
  //       name: "",
  //       category: "",
  //       comment: [],
  //       description: "",
  //       discount: 0,
  //       images: [],
  //       isNewProduct: true,
  //       price: 0,
  //       quantity: 0,
  //       size: "",
  //       _id: "",
  //     },
  //     quantity: 0,
  //     _id: "",
  //   },
  // ]);

  // const cardData = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await axios.get(`${apiUrl}/api/v1/cart/get`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (res.status === 200) {
  //       // console.log("000000000", res.data.cartData.products);
  //       setTableData(res.data.cartData.products);
  //     }
  //   } catch (error) {
  //     console.log("Failed to get cart data", error);
  //   }
  // };

  useEffect(() => {
    cardData();
  }, []);

  return (
    <div className="h-[calc(100vh-380px)] flex items-center">
      <Card className="flex flex-col p-8 w-1/3 m-auto bg-white rounded-2xl border-none ">
        <div className="text-xl font-bold">1.Сагс (4)</div>
        {cartData.products?.map((i) => (
          <SagsCardTable i={i} />
        ))}
        <div className="flex justify-between mt-4 mb-6">
          <span className="text-lg text-black">Нийт төлөх дүн: </span>
          <span className="text-xl text-black font-bold">240,000₮</span>
        </div>
        <Button
          variant={"outline"}
          className="bg-[#2563EB] text-white text-sm self-end"
          size="custom"
        >
          Худалдан авах
        </Button>
      </Card>
    </div>
  );
};

export default Sags;
