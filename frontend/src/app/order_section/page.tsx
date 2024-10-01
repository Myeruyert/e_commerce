"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import SavedProduct from "@/components/saved_product";
import OrderCard from "@/components/order_card";
import {
  Table,
  TableBody,
  TableCaption,
  TableRow,
} from "@/components/ui/table";

const Order = () => {
  return (
    <div className="flex gap-5 justify-center bg-gray-100 dark:bg-[#121212] pt-28 pb-60">
      <div className="flex flex-col self-start">
        <Badge className="px-8 py-2 bg-transparent hover:bg-white dark:hover:bg-black text-black dark:text-white mb-2 text-sm font-normal">
          Хэрэглэгчийн хэсэг
        </Badge>
        <Badge className="px-8 py-2 bg-transparent hover:bg-white dark:hover:bg-black text-black dark:text-white mb-2 text-sm font-normal">
          Захиалгын түүх
        </Badge>
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">Захиалгын түүх</h1>
        <Separator className="my-6" />
        {/* <Card> */}
        <Accordion
          type="single"
          collapsible
          className="w-fit bg-white px-6 py-8 rounded-2xl mb-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center gap-2">
              <span className="text-base font-bold">2024-09-03 15:34</span>
              <Badge className="text-xs font-semibold text-[#FAFAFA] bg-[#2563EB]">
                хүргэлтэнд гарсан
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="w-[572px]">
              <OrderCard />
            </AccordionContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCaption className="flex justify-between">
                    <span className="text-base text-black">Үнийн дүн: </span>
                    <span className="text-base text-black font-bold">
                      240,000₮
                    </span>
                  </TableCaption>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="w-fit bg-white px-6 py-8 rounded-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center gap-2">
              <span className="text-base font-bold">2024-09-03 15:34</span>
              <Badge className="text-xs font-semibold text-[#FAFAFA] bg-[#2563EB]">
                хүргэлтэнд гарсан
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="w-[572px]">
              <OrderCard />
            </AccordionContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCaption className="flex justify-between">
                    <span className="text-base text-black">Үнийн дүн: </span>
                    <span className="text-base text-black font-bold">
                      240,000₮
                    </span>
                  </TableCaption>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Order;
