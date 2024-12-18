"use client";
import React, { useContext, useEffect } from "react";
import { Card } from "../ui/card";
import SagsCardTable from "../table_cards/sags_card";
import { Button } from "../ui/button";
import { CartContext } from "../context/cart_context";
import { useRouter } from "next/navigation";
const Sags = () => {
  const router = useRouter();
  const { cartData, getcartData, refetch } = useContext(CartContext);

  useEffect(() => {
    getcartData();
  }, [refetch]);

  // console.log("CArt data", cartData);
  return (
    <div className="h-[calc(100vh-380px)] flex items-center">
      <Card className="flex flex-col p-8 w-1/3 m-auto bg-white rounded-2xl border-none ">
        <div className="text-xl font-bold">
          1.Сагс ({cartData.products?.length})
        </div>
        {cartData.products?.map((i, index) => (
          <SagsCardTable i={i} key={index} />
        ))}
        <div className="flex justify-between mt-4 mb-6">
          <span className="text-lg text-black">Нийт төлөх дүн: </span>
          <span className="text-xl text-black font-bold">
            {" "}
            {Intl.NumberFormat().format(cartData.totalAmount)}₮
            {/* {cartData.totalAmount}₮ */}
          </span>
        </div>
        <Button
          variant={"outline"}
          className="bg-[#2563EB] text-white text-sm self-end"
          size="custom"
          onClick={() => router.push("/buy_steps/delivery_info")}>
          Худалдан авах
        </Button>
      </Card>
    </div>
  );
};

export default Sags;
