"use client";
import React from "react";

import { CircleCheckBig } from "lucide-react";
import { Card } from "@/components/ui/card";

const SuccessToast = () => {
  return (
    <div className="h-[calc(100vh-450px)] mt-20">
      <Card className="flex flex-col gap-3 border-none rounded-2xl items-center w-1/5 m-auto py-12">
        <div></div>
        <CircleCheckBig className="text-[#2563EB]" />
        <span className="text-center text-base text-[#18181B]">
          Захиалга амжилттай баталгаажлаа.
        </span>
      </Card>
    </div>
  );
};

export default SuccessToast;
