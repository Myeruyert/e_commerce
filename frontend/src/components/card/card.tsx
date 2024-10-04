"use client";
import React, { useContext, useState } from "react";
import { Card } from "@/components/ui/card";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import Link from "next/link";
import { Button } from "../ui/button";
import { ProductContext } from "../context/product_context";
import { CardProps } from "@/interface";

export function ProductCard({ name, price, _id, discount }: CardProps) {
  const { product } = useContext(ProductContext);

  const currentPrice = price - Math.floor((price * discount) / 100);

  const [loved, setLoved] = useState(false);

  const wishList = () => {
    setLoved(!loved);
  };

  return (
    <div>
      <Card className="border-none relative">
        <Button
          variant="ghost"
          className="p-0 absolute right-3 top-2 text-2xl hover:scale-150 hover:bg-transparent"
          onClick={wishList}
        >
          {loved ? <VscHeartFilled /> : <VscHeart />}
        </Button>
        <Link href={"/" + _id}>
          <img
            src="/images/image.png"
            alt=""
            className="rounded-lg w-full overflow-hidden "
          />
        </Link>
      </Card>
      <Link href={"/" + _id}>
        <div>
          <p className="text-base mt-2 mb-1">{name}</p>
          <div className="flex gap-2 items-center">
            {currentPrice !== price ? (
              <>
                <span className="font-bold">{currentPrice}</span>
                <span className="line-through text-[#71717A] text-xs">
                  {price}₮
                </span>
                <span className="font-bold text-[#EF4444]">{discount}%</span>
              </>
            ) : (
              <span className="font-bold">{currentPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
