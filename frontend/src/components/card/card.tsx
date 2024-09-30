"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { useState, useContext } from "react";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { ProductContext } from "../context/product_context";

export function CardWithForm() {
  const { product } = useContext(ProductContext);
  return (
    <div>
      <Link href="/product_detail">
        <Card className="border-none relative">
          <CiHeart className="absolute right-3 top-2 text-2xl" />
          <img
            src="/images/image.png"
            alt=""
            className="rounded-lg w-full overflow-hidden "
          />
        </Card>
        <div>
          <p className="text-base mt-2 mb-1">{product.name}</p>
          <div className="flex gap-2 items-center">
            <span className="font-bold">{product.price}</span>
            <span className="line-through text-[#71717A] text-xs">
              120’000₮
            </span>
            <span className="font-bold text-[#EF4444]">10%</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
