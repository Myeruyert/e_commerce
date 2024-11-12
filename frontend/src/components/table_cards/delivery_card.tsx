import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const invoices = [
  {
    img: "imagesgirl.png",
    name: "Chunky Gliph Tee",
    amount: "130,000",
    quantity: 1,
    totalAmount: "120,000",
  },
  {
    img: "imagesgirl.png",
    name: "Chunky Gliph Tee",
    amount: "120,000",
    quantity: 1,
    totalAmount: "120,000",
  },
];

const DeliveryCard = () => {
  return (
    <Table>
      <TableBody>
        {invoices.map((data, i) => (
          <TableRow className="flex justify-between" key={i}>
            <TableCell className="font-medium flex gap-2 px-0">
              <img src="/images/girl.png" alt="" className="w-20 rounded-2xl" />
              <div className="flex flex-col justify-between p-1">
                <span className="text-base">{data.name}</span>
                <span className="text-xs">
                  {data.quantity}*{data.amount}
                </span>
                <span className=" px-0 text-base font-bold">
                  {data.totalAmount}₮
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DeliveryCard;
