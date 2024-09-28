import React from "react";
import Comments from "./comment";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";

const RatingSection = () => {
  return (
    <div className="">
      <Comments />
      <div className="mt-6">
        <Card className="w-[510px] p-6 bg-[#F4F4F5]">
          <div>
            <span className="text-sm font-semibold mb-4">Одоор үнэлэх:</span>
            <FaStar className="text-[#FDE047] text-xl" />
          </div>
          <div className="my-6">
            <span className="text-sm font-semibold">Сэтгэгдэл үлдээх:</span>
            <Textarea className="mt-2" placeholder="Энд бичнэ үү" />
          </div>

          <Button className="bg-[#2563EB]" size="custom">
            Үнэлэх
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default RatingSection;
