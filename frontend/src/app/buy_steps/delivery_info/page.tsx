"use client";
import DeliveryCard from "@/components/table_cards/delivery_card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React from "react";

const DeliveryInfo = () => {
  const router = useRouter();
  return (
    <div className="h-[calc(100vh-380px)] flex items-center">
      <div className="grid grid-cols-10 w-3/5 m-auto gap-5">
        <div className="col-span-3">
          <Card className="px-6 py-8 m-auto bg-white rounded-2xl border-none">
            <div className="text-lg font-bold">Сагс (4)</div>
            <DeliveryCard />
            <DeliveryCard />
            <div className="flex justify-between mt-4">
              <span className="text-base text-black">Нийт төлөх дүн: </span>
              <span className="text-lg text-black font-bold">240,000₮</span>
            </div>
          </Card>
        </div>
        <div className="col-span-7">
          <Card className="flex-2 p-8 border-none rounded-2xl">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold mb-12">
                2. Хүргэлтийн мэдээлэл оруулах
              </h1>
              <div className="mb-12">
                <div className="mb-6">
                  <h6 className="text-sm mb-2">Овог:</h6>
                  <Input className="rounded-full h-7" />
                </div>
                <div className="mb-6">
                  <h6 className="text-sm mb-2">Нэр:</h6>
                  <Input className="rounded-full h-7 " />
                </div>
                <div className="mb-6">
                  <h6 className="text-sm mb-2">Утасны дугаар:</h6>
                  <Input className="rounded-full h-7 " />
                </div>
                <div className="mb-6">
                  <h6 className="text-sm mb-2">Хаяг:</h6>
                  <Textarea className="rounded-2xl" />
                </div>
                <div className="mb-2">
                  <h6 className="text-sm mb-2">Нэмэлт мэдээлэл:</h6>
                  <Textarea className="rounded-2xl" />
                </div>
                <p className="text-[#71717A] text-sm">
                  Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
                </p>
              </div>
              <div className="flex justify-between">
                <Button
                  className=" bg-transparent text-black border"
                  size="custom">
                  Буцах
                </Button>
                <Button
                  className=" bg-[#2563EB]"
                  size="custom"
                  onClick={() => router.push("/buy_steps/payment")}>
                  Төлбөр төлөх
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
