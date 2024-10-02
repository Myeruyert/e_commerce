"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import OrderCard from "@/components/order_card";
import {
  Table,
  TableBody,
  TableCaption,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown } from "lucide-react";
import { AccordionHeader } from "@radix-ui/react-accordion";

const OrderHistory = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-bold">Захиалгын түүх</h1>
      <Separator className="my-6" />
      {/* <Card> */}
      <Accordion
        type="single"
        collapsible
        className="w-[572px] bg-white px-6 py-8 rounded-2xl mb-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <span className="text-base font-bold">2024-09-03 15:34</span>
              <Badge className="text-xs font-semibold text-[#FAFAFA] bg-[#2563EB]">
                хүргэлтэнд гарсан
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="">
            <OrderCard />
          </AccordionContent>
          <AccordionHeader>
            <div className="flex justify-between mt-4">
              <span className="text-base text-black">Үнийн дүн: </span>
              <span className="text-base text-black font-bold">240,000₮</span>
            </div>
          </AccordionHeader>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OrderHistory;
