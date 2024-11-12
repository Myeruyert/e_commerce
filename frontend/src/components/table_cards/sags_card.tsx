"use client";
import React, { useContext } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartContext } from "../context/cart_context";

const SagsCardTable = ({ i }: any) => {
  const {
    deleteProduct,
    sizeList,
    setProductSize,
    productSize,
    updateCartData,
  } = useContext(CartContext);

  const changeSize = (e: any) => {
    setProductSize({ ...productSize, id: e.target.value });
  };

  const currentPrice =
    i.product.price - Math.floor((i.product.price * i.product.discount) / 100);

  // console.log("CURRENTT", currentPrice);

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
            <p className="text-base">{i.product.name}</p>
            <div className="flex gap-4 items-center">
              <div>
                <Button
                  className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                  onClick={() => {
                    // reduceCount(i.product._id);
                    updateCartData(i.product._id, Math.max(0, i.quantity - 1));
                  }}
                >
                  -
                </Button>
                <Label className="4xl mx-4">{i.quantity}</Label>
                <Button
                  onClick={() => {
                    // addCount(i.product._id);
                    updateCartData(i.product._id, Math.max(0, i.quantity + 1));
                  }}
                  className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                >
                  +
                </Button>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder={`${i.size.size}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Available Sizes</SelectLabel>
                      {sizeList?.map((s, i) => (
                        <SelectItem value={s.id} onChange={changeSize} key={i}>
                          {s.size}
                        </SelectItem>
                      ))}
                      {/* <SelectItem
                        value={productSize.id}
                        onChange={(e: any) => {
                          setProductSize({
                            ...productSize,
                            id: e.target.value,
                          });
                        }}
                      >
                        {productSize.size}
                      </SelectItem> */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-2">
              {/* <p>Size: {i.size}</p> */}
              <p className="text-base font-bold">
                {Intl.NumberFormat().format(currentPrice * i.quantity)}₮
              </p>
            </div>
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
