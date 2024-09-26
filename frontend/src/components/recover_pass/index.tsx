"use client";
import GetNewPass from "@/components/recover_pass/get_new_pass";
import Loading from "@/components/recover_pass/loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

const ForgetPass = () => {
  return (
    // {step === 2 && <GetNewPass/>}
    <div className="flex h-[calc(100vh-290px)] justify-center bg-gray-100 dark:bg-[#121212]">
      <div className="w-1/5 mt-24">
        <h1 className="font-semibold text-2xl text-center mb-8">
          Нууц үг сэргээх
        </h1>
        <Input
          type="email"
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

export default ForgetPass;
