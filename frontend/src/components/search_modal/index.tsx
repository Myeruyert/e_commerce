import React from "react";
import { format } from "date-fns";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { IoMdHeart } from "react-icons/io";

const SearchModalList = () => {
  return (
    <div className="m-5">
      <Card className="w-[532px] bg-white dark:bg-black p-4 flex justify-between">
        <div className="flex gap-6">
          <img src="\images\girl.png" alt="" className="rounded-xl w-20" />
          <div className="flex flex-col gap-4">
            <p className="text-base">Chunky Glyph Tee</p>
            <p className="text-sm font-bold">120’000₮</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SearchModalList;
