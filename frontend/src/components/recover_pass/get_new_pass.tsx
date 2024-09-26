import React from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const GetNewPass = () => {
  return (
    <div className="flex h-[calc(100vh-290px)] justify-center bg-gray-100 dark:bg-[#121212]">
      <div className="w-2/5 mt-24">
        <img src="/images/email.png" alt="" className="m-auto" />
        <h1 className="font-semibold text-2xl text-center mb-2 mt-6">
          Баталгаажуулах
        </h1>
        <p className="text-center">
          “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
        </p>
        <div className="flex justify-center mt-6 mb-12">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="flex flex-col gap-12">
          <a
            href=""
            className="text-center underline text-sm text-[#71717A] mt-4 mb-12"
          >
            Дахин илгээх (30)
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetNewPass;
