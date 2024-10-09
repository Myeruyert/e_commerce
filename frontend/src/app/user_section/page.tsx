"use client";
import OrderHistory from "@/components/user_section/order_history";
import UserInfo from "@/components/user_section/user_info";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const OrderSection = () => {
  const [step, setStep] = useState(1);

  const handleShow = () => {
    setStep(1);
  };

  const handleClick = () => {
    setStep(2);
  };

  // console.log("STEP", step);
  return (
    <div className="flex gap-5 justify-center bg-gray-100 dark:bg-[#121212] pt-28 pb-60">
      <div className="flex flex-col self-start">
        <Button
          className="rounded-full px-8 py-2 bg-transparent hover:bg-white dark:hover:bg-black text-black dark:text-white mb-2 text-sm font-normal"
          onClick={handleShow}
        >
          Хэрэглэгчийн хэсэг
        </Button>
        <Button
          className="rounded-full px-8 py-2 bg-transparent hover:bg-white dark:hover:bg-black text-black dark:text-white mb-2 text-sm font-normal"
          onClick={handleClick}
        >
          Захиалгын түүх
        </Button>
      </div>
      {step === 1 && <UserInfo />}
      {step === 2 && <OrderHistory />}
    </div>
  );
};

export default OrderSection;
