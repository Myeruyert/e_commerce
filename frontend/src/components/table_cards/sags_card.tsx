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
  const { deleteProduct, addCount, reduceCount } = useContext(CartContext);

  // console.log("SUMAmount", i.totalAmount);

  return (
    <div className="mt-5">
      <Card className="rounded-2xl m-auto bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img
            src={i.product.images[0]}
            alt=""
            className="rounded-2xl w-24 h-24 object-fill"
          />
          <div className="flex flex-col justify-between">
            <div className="flex gap-2">
              <p className="text-base">{i.product.name}</p>
              <p>{i.size}</p>
            </div>

            <div className="">
              <Button
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                onClick={() => {
                  reduceCount(i.product._id);
                }}
              >
                -
              </Button>
              <Label className="4xl mx-4">{i.quantity}</Label>
              <Button
                onClick={() => {
                  addCount(i.product._id);
                }}
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
              >
                +
              </Button>
            </div>
            <p className="text-base font-bold">
              {Intl.NumberFormat().format(i.totalAmount)}₮
            </p>
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
