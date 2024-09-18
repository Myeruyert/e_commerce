import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

const RecoverPass = () => {
  return (
    <div className="flex h-[calc(100vh-290px)] justify-center bg-gray-100">
      <div className="w-1/5 mt-24">
        <h1 className="font-semibold text-2xl text-center mb-8">
          Нууц үг сэргээх
        </h1>
        <Input
          type="text"
          className="rounded-full grow border-none h-9 focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-1 mb-4"
          placeholder="И-мэйл хаяг оруулах"
        />
        <Button className="bg-[#2563EB] w-full" size="custom">
          Илгээх
        </Button>
      </div>
    </div>
  );
};

export default RecoverPass;
