import React, { useContext } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { IoMdHeart } from "react-icons/io";
import { WishListProps } from "@/interface";
import { WishListContext } from "../context/wishlist_context";
import Link from "next/link";

const SavedProduct = ({ name, price, images, _id }: WishListProps) => {
  const { deleteList } = useContext(WishListContext);
  return (
    <div className="my-5 ">
      <Card className="w- h-[132px] m-auto bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src={images[0]} alt="" className="rounded-xl" />
          <div className="flex flex-col justify-between">
            <p className="text-base">{name}</p>
            <p className="text-sm font-bold">
              {Intl.NumberFormat().format(price)}₮
            </p>
            <Link href={"/" + _id}>
              <Button
                variant={"outline"}
                className="bg-[#2563EB] text-white text-sm w-20"
                size="custom"
              >
                Сагслах
              </Button>
            </Link>
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-2xl hover:scale-150 hover:bg-transparent"
          onClick={() => deleteList(_id)}
        >
          <IoMdHeart className=" text-2xl" />
        </Button>
      </Card>
    </div>
  );
};

export default SavedProduct;
