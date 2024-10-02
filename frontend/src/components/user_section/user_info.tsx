import React from "react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const UserInfo = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-bold">Хэрэглэгчийн хэсэг</h1>
      <Separator className="my-6" />
      <div className="mb-4">
        <h6 className="text-sm mb-2">Овог:</h6>
        <Input className="rounded-full h-7 w-[620px]" />
      </div>
      <div className="mb-4">
        <h6 className="text-sm mb-2">Нэр:</h6>
        <Input className="rounded-full h-7 w-[620px]" />
      </div>
      <div className="mb-4">
        <h6 className="text-sm mb-2">Утасны дугаар:</h6>
        <Input className="rounded-full h-7 w-[620px]" />
      </div>
      <div className="mb-4">
        <h6 className="text-sm mb-2">Имэйл хаяг:</h6>
        <Input className="rounded-full h-7 w-[620px]" />
      </div>
      <div className="mb-4">
        <h6 className="text-sm mb-2">Хаяг:</h6>
        <Textarea className="rounded-2xl" />
      </div>
      <Button className="self-end bg-[#2563EB]" size="custom">
        Мэдээлэл шинэчлэх
      </Button>
    </div>
  );
};

export default UserInfo;
