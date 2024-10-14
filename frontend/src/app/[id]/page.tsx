"use client";
import React, { useEffect, useState, useContext } from "react";
import { ProductCard } from "@/components/card/card";
import RatingSection from "@/components/category/rating";
import { ProductContext } from "@/components/context/product_context";
import ProductDetail from "@/components/product_detail/product_detail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { Input } from "@/components/ui/input";
import { CartContext } from "@/components/context/cart_context";
import { UserContext } from "@/components/context/user_context";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const { product } = useContext(ProductContext);
  const [seeComments, setSeeComments] = useState<boolean>(false);
  const { count, minus, add, addCount, reduceCount, postCartData } =
    useContext(CartContext);

  const { id } = useParams();
  // console.log("++++++", id);
  const [oneProduct, setOneProduct] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    isNewProduct: true,
    images: [],
  });

  const currentPrice =
    oneProduct.price -
    Math.floor((oneProduct.price * oneProduct.discount) / 100);

  const fetchProductData = async (id: string | string[]) => {
    // console.log("id", id);
    try {
      const res = await axios.get(`${apiUrl}/api/v1/product/${id}`);

      if (res.status === 200) {
        const { product } = res.data;
        setOneProduct(product);
      }
    } catch (error) {
      console.log("cant fetch product lists", error);
    }
  };

  const seeAllComments = () => {
    setSeeComments(!seeComments);
  };

  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const value = 3.5;

  useEffect(() => {
    fetchProductData(id);
  }, [id]);

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
            {oneProduct.isNewProduct ? "Шинэ" : "Хуучин"}
          </Badge>
          <h2 className="font-bold text-2xl">{oneProduct.name}</h2>
          <p>{oneProduct.description}</p>
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
              <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                <Rating
                  name="text-feedback"
                  value={value}
                  className="text-[#FDE047]"
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ color: "#e0e0e0" }} fontSize="inherit" />
                  }
                />
                {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
              </Box>
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
            <ProductCard
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
