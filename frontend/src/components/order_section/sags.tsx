"use client";
import React from "react";
import { Card } from "../ui/card";
import SagsCardTable from "../table_cards/sags_card";
import { Button } from "../ui/button";

const Sags = () => {
  return (
    <div className="h-[calc(100vh-380px)] flex items-center">
      <Card className="flex flex-col p-8 w-1/3 m-auto bg-white rounded-2xl border-none ">
        <div className="text-xl font-bold">1.Сагс (4)</div>
        <SagsCardTable />
        <SagsCardTable />
        <div className="flex justify-between mt-4 mb-6">
          <span className="text-lg text-black">Нийт төлөх дүн: </span>
          <span className="text-xl text-black font-bold">240,000₮</span>
        </div>
        <Button
          variant={"outline"}
          className="bg-[#2563EB] text-white text-sm self-end"
          size="custom"
        >
          Худалдан авах
        </Button>
      </Card>
    </div>
  );
};

export default Sags;
