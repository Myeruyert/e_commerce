import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { CiHeart } from "react-icons/ci";

export function CardWithForm() {
  return (
    <div>
      <Card className="w-[245px] h-[333px] border-none relative">
        <CiHeart className="absolute right-3 top-2 text-2xl" />
        <img
          src="/images/image.png"
          alt=""
          className="rounded-lg object-cover overflow-hidden "
        />
      </Card>
      <div>
        <p className="text-base mt-2 mb-1">Wildflower Hoodie</p>
        <div className="flex gap-2 items-center">
          <span className="font-bold">108’000₮</span>
          <span className="line-through text-[#71717A] text-xs">120’000₮</span>
          <span className="font-bold text-[#EF4444]">10%</span>
        </div>
      </div>
    </div>
  );
}
