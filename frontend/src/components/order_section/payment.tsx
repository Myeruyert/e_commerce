import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const Payment = () => {
  return (
    <div>
      <Card className="flex flex-col p-8 border-none rounded-2xl w-1/3 m-auto">
        <h1 className="text-lg font-semibold mb-12">3. Төлбөр төлөлт</h1>
        <div className="self-center">
          <Badge className="w-20">14:59</Badge>
          <img src="/images/Rectangle 12034.png" alt="" />
        </div>
        <Button className=" bg-transparent text-black border" size="custom">
          Буцах
        </Button>
      </Card>
    </div>
  );
};
