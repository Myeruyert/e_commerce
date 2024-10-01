"use client";
import { CardWithForm } from "@/components/card/card";
import DetailInfo from "@/components/category/detail_info";
import RatingSection from "@/components/category/rating";
import { ProductContext } from "@/components/context/product_context";
import ProductDetail from "@/components/product_lists/product_detail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailPage = () => {
  const { product } = useContext(ProductContext);
  const [count, setCount] = useState<number>(0);
  const [seeComments, setSeeComments] = useState<boolean>(false);

  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  const seeAllComments = () => {
    setSeeComments(!seeComments);
  };

  return (
    <main className="w-1/2 m-auto">
      <div className="mt-16 mb-20 grid grid-cols-2 gap-5">
        <ProductDetail />
        {/* <DetailInfo /> */}
        <div className="flex flex-col gap-3 justify-end ">
          <Badge className="bg-transparent text-black border border-black w-14 text-xs font-semibold">
            Шинэ
          </Badge>
          <h2 className="font-bold text-2xl">Wildflower Hoodie</h2>
          <p>Зэрлэг цэцгийн зурагтай даавуун цамц</p>
          <div className="flex flex-col gap-2 my-4">
            <p className="text-base underline">Хэмжээний загвар</p>
            <div className="flex gap-2">
              <Button className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8">
                S
              </Button>
              <Button className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8">
                M
              </Button>
            </div>
            <div className="mt-4">
              <Button
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                onClick={minus}
              >
                -
              </Button>
              <Label className="4xl mx-4">{count}</Label>
              <Button
                onClick={add}
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
              >
                +
              </Button>
            </div>
          </div>
          <div className="mt-6 mb-14">
            <p className="text-xl font-bold mb-2">120,000₮</p>
            <Button className="bg-[#2563EB]" size="custom">
              Сагсанд нэмэх
            </Button>
          </div>
          <div>
            <div className="mb-1">
              <span className="mr-2 text-sm">Үнэлгээ</span>
              <Button
                className="text-sm text-[#2563EB] underline"
                variant="ghost"
                onClick={seeAllComments}
              >
                бүгдийг харах
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                <FaStar className="text-[#FDE047] " />
                <FaStar className="text-[#FDE047] " />
                <FaStar className="text-[#FDE047] " />
                <FaStar className="text-[#FDE047] " />
              </div>
              <span className="text-sm text-[#09090B]">4.6</span>
              <span className="text-sm">(24)</span>
            </div>
          </div>
        </div>
        <div></div>
        <div>{seeComments ? <RatingSection /> : <div></div>}</div>
      </div>
      <div className="mb-24">
        <h1 className="text-3xl font-bold mb-6">Холбоотой бараа</h1>
        <div className="grid grid-cols-4 gap-8">
          {product?.map((c) => (
            <CardWithForm name={c.name} price={c.price} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;