import React from "react";
import { Separator } from "../ui/separator";
// import Rating from "@mui/material/Rating";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

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

const Comments = ({ com }: any) => {
  return (
    <div className="">
      <div className="w-[510px] mt-5">
        <div className="flex gap-2 mb-1">
          <span className="text-sm font-semibold">{com.user.firstname}</span>
          <span className="flex">
            <Rating style={{ width: "120px" }} value={com.rating} readOnly />
          </span>
        </div>
        <p className="text-sm text-[#71717A] mb-5">
          {/* Ваав материал ёстой гоё байна 😍 */}
          {com.comment}
        </p>
        <Separator className=" border-dashed" />
      </div>
    </div>
  );
};

export default Comments;
