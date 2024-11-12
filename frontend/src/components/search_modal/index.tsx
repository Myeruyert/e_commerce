import React from "react";
import { Card } from "../ui/card";

const SearchModalList = () => {
  return (
    <Card className="w-[532px] shadow border-none rounded-xl dark:bg-black flex justify-between hover:bg-accent mb-1">
      <div className="flex gap-4">
        <img src="\images\girl.png" alt="" className="rounded-xl w-16" />
        <div className="flex flex-col gap-1">
          <p className="text-base">Chunky Glyph Tee</p>
          <p className="text-sm font-bold">120’000₮</p>
        </div>
      </div>
    </Card>
  );
};

export default SearchModalList;
