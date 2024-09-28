import React from "react";
import { FaStar } from "react-icons/fa";
import { Separator } from "../ui/separator";

const Comments = () => {
  return (
    <div className="">
      <div className="w-[510px] mt-5">
        <div className="flex gap-2 mb-1">
          <span className="text-sm font-semibold">Saraa</span>
          <span className="flex">
            <FaStar className="text-[#FDE047] " />
            <FaStar className="text-[#FDE047] " />
          </span>
        </div>
        <p className="text-sm text-[#71717A] mb-5">
          Ваав материал ёстой гоё байна 😍
        </p>
        <Separator className=" border-dashed" />
      </div>
      <div className="w-[510px] mt-5">
        <div className="flex gap-2 mb-1">
          <span className="text-sm font-semibold">Saraa</span>
          <span className="flex">
            <FaStar className="text-[#FDE047] " />
            <FaStar className="text-[#FDE047] " />
          </span>
        </div>
        <p className="text-sm text-[#71717A] mb-5">
          Ваав материал ёстой гоё байна 😍
        </p>
        <Separator className=" border-dashed" />
      </div>
    </div>
  );
};

export default Comments;
