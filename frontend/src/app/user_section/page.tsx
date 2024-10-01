import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const UserInfo = () => {
  return (
    <div className="flex gap-5 h-[calc(100vh-290px)] justify-center bg-gray-100 dark:bg-[#121212] pt-28">
      <div className="flex flex-col self-start">
        <Badge className="px-8 py-2 bg-transparent hover:bg-white dark:hover:bg-black text-black dark:text-white mb-2 text-sm font-normal">
          Хэрэглэгчийн хэсэг
        </Badge>
        <Badge className="px-8 py-2 bg-transparent hover:bg-white dark:hover:bg-black text-black dark:text-white mb-2 text-sm font-normal">
          Захиалгын түүх
        </Badge>
      </div>
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
    </div>
  );
};

export default UserInfo;
