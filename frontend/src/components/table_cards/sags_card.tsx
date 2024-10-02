"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Label } from "../ui/label";

const SagsCardTable = () => {
  const [count, setCount] = useState<number>(0);

  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div className="mt-5">
      <Card className="rounded-2xl m-auto bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src="\images\girl.png" alt="" className="rounded-2xl" />
          <div className="flex flex-col justify-between">
            <p className="text-base">Chunky Glyph Tee</p>
            <div className="">
              <Button
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
                onClick={minus}
              >
                -
              </Button>
              <Label className="4xl mx-4">{count}</Label>
              <Button
                onClick={add}
                className="rounded-full bg-transparent border border-black text-black dark:text-white dark:border-white w-8 h-8"
              >
                +
              </Button>
            </div>
            <p className="text-base font-bold">120’000₮</p>
          </div>
        </div>
        <RiDeleteBin6Line className="font-thin text-2xl" />
      </Card>
    </div>
  );
};

export default SagsCardTable;
