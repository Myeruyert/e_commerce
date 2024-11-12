"use client";
import React, { useEffect, useState, useContext } from "react";
import { ProductCard } from "@/components/card/card";
import RatingSection from "@/components/category/rating";
import { ProductContext } from "@/components/context/product_context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useParams } from "next/navigation";
import { CartContext } from "@/components/context/cart_context";

const ProductDetailPage = () => {
  const { product, oneProduct, fetchProductData } = useContext(ProductContext);
  const [seeComments, setSeeComments] = useState<boolean>(false);
  const {
    count,
    minus,
    add,

    postCartData,
    productSize,
    setProductSize,
    sizeList,
  } = useContext(CartContext);

  const { id } = useParams();
  // console.log("++++++", id);

  const currentPrice =
    oneProduct.price -
    Math.floor((oneProduct.price * oneProduct.discount) / 100);

  const seeAllComments = () => {
    setSeeComments(!seeComments);
  };

  console.log("SIZE", productSize);

  const avg =
    oneProduct.comment?.reduce((r, c) => r + c.rating, 0) /
    oneProduct.comment?.length;

  useEffect(() => {
    fetchProductData(id);
  }, [id]);

  console.log("AVG", avg);

  return (
    <main className="w-1/2 m-auto">
      <div className="mt-16 mb-20 grid grid-cols-2 gap-5">
        <div className="flex gap-5">
          <aside className="flex flex-col gap-2 justify-center">
            <img
              src={oneProduct.images[0]}
              alt=""
              className="rounded w-14 hover:border border-black"
            />
            <img
              src={oneProduct.images[0]}
              alt=""
              className="rounded w-14 hover:border border-black"
            />
          </aside>
          <div>
            <img
              src={oneProduct.images[0]}
              alt=""
              className="rounded-2xl w-[420px] overflow-hidden "
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-end ">
          <Badge className="bg-transparent text-black border border-black w-16 text-xs text-center font-semibold">
            {oneProduct.isNew ? "Шинэ" : "Хуучин"}
          </Badge>
          <h2 className="font-bold text-2xl">{oneProduct.name}</h2>
          <p>{oneProduct.description}</p>
          <div className="flex flex-col gap-2 my-4">
            <p className="text-base underline">Хэмжээний загвар</p>
            <div className="flex gap-2">
              {sizeList?.map((s, i) => (
                <Button
                  key={i}
                  className={`rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-12 h-8 ${
                    productSize.size === s.size && "bg-black text-white"
                  }`}
                  onClick={() => {
                    setProductSize({ ...productSize, size: s.size, id: s.id });
                  }}
                  value={s.id}
                >
                  {s.size}
                </Button>
              ))}
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
            <div className="flex gap-2 items-center mb-2">
              {currentPrice !== oneProduct.price ? (
                <>
                  <span className="font-bold text-xl">
                    {Intl.NumberFormat().format(currentPrice)}₮
                  </span>
                  <span className="line-through text-[#71717A] text-xs">
                    {Intl.NumberFormat().format(oneProduct.price)}₮
                  </span>
                  <span className="font-bold text-[#EF4444]">
                    {oneProduct.discount}%
                  </span>
                </>
              ) : (
                <span className="font-bold">
                  {Intl.NumberFormat().format(currentPrice)}₮
                </span>
              )}
            </div>
            <Button
              className="bg-[#2563EB]"
              size="custom"
              onClick={postCartData}
            >
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
              <Rating
                style={{ color: "#e0e0e0", width: "120px", border: "none" }}
                value={avg ? avg : 0}
                readOnly
              />
              <span className="text-sm text-[#09090B]">
                {avg ? avg : "No rating"}
              </span>
              <span className="text-sm">({oneProduct.comment?.length})</span>
            </div>
          </div>
        </div>
        <div></div>
        <div>{seeComments ? <RatingSection /> : <div></div>}</div>
      </div>
      <div className="mb-24">
        <h1 className="text-3xl font-bold mb-6">Холбоотой бараа</h1>
        <div className="grid grid-cols-4 gap-8">
          {product?.map((c, i) => (
            <ProductCard
              key={i}
              name={c.name}
              price={c.price}
              _id={c._id}
              discount={c.discount}
              images={c.images}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
