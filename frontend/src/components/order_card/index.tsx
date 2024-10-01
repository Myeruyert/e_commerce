import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    img: "imagesgirl.png",
    name: "Chunky Gliph Tee",
    amount: "120,000",
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

const OrderCard = () => {
  return (
    <Table>
      <TableBody>
        {invoices.map((data) => (
          <TableRow className="flex justify-between">
            <TableCell className="font-medium flex gap-2 px-0">
              <img src="/images/girl.png" alt="" className="w-12 rounded-sm" />
              <div className="flex flex-col justify-between p-1">
                <span className="text-xs">{data.name}</span>
                <span className="text-xs">
                  {data.quantity}*{data.amount}
                </span>
              </div>
            </TableCell>
            <TableCell className="flex flex-col"></TableCell>
            <TableCell className="text-right self-end px-0 text-xs font-bold">
              {data.totalAmount}₮
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderCard;
