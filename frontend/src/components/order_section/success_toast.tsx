import React from "react";
import { Card } from "../ui/card";
import { CircleCheckBig } from "lucide-react";

const SuccessToast = () => {
  return (
    <>
      <Card className="flex flex-col gap-3  items-center w-1/5 m-auto py-12">
        <div></div>
        <CircleCheckBig className="text-[#2563EB]" />
        <span className="text-center text-base text-[#18181B]">
          Захиалга амжилттай баталгаажлаа.
        </span>
      </Card>
    </>
  );
};

export default SuccessToast;
