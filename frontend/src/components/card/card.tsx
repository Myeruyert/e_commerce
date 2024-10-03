"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

type CardProps = { name: string; price: number; _id: string };

export function ProductCard({ name, price, _id }: CardProps) {
  return (
    <div>
      <Link href={"/" + _id}>
        <Card className="border-none relative">
          <CiHeart className="absolute right-3 top-2 text-2xl" />
          <img
            src="/images/image.png"
            alt=""
            className="rounded-lg w-full overflow-hidden "
          />
        </Card>
        <div>
          <p className="text-base mt-2 mb-1">{name}</p>
          <div className="flex gap-2 items-center">
            <span className="font-bold">{price}</span>
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
