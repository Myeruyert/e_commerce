"use client";
import Loading from "@/components/recover_pass/loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiUrl } from "@/utils/util";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import EnterNewPass from "@/components/recover_pass/new_pass";

const RecoverPass = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [countDown, setCountDown] = useState(90);
  const [optValue, setOptValue] = useState("");

  const hadnleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSend = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${apiUrl}/api/v1/auth/resend-pass`, {
        email,
      });
      if (response.status === 200) {
        toast.success("Mail sent successfully");

        setStep(step + 1);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Couldn't sent the email");
    }
  };

  const handleConfirmOtp = async (value: string) => {
    setOptValue(value);
    console.log("VL", value.length);
    if (value.length === 4) {
      try {
        setIsLoading(true);
        const response = await axios.post(`${apiUrl}/api/v1/auth/verify-otp`, {
          email,
          otpValue: value,
        });
        if (response.status === 200) {
          toast.success("Mail sent successfully");
          router.push("/signin");
          // setStep(step + 1);
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("otp err", error);
        toast.error("Couldn't sent the otp");
      }
    }
  };

  console.log("OTPVALUE", optValue);

  const handleResendOpt = () => {
    setCountDown(30);
  };

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [countDown]);

  if (isLoading) return <Loading />;

  return (
    // {step === 2 && <GetNewPass/>}
    <div className="flex h-[calc(100vh-290px)] justify-center bg-gray-100 dark:bg-[#121212]">
      <div className="w-1/5 mt-24">
        {step === 1 && (
          <>
            <h1 className="font-semibold text-2xl text-center mb-8">
              Нууц үг сэргээх
            </h1>
            <Input
              type="email"
              className="rounded-full grow border-none h-9 focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-1 mb-4"
              placeholder="И-мэйл хаяг оруулах"
              onChange={hadnleEmail}
            />
            <Button
              className="bg-[#2563EB] w-full"
              size="custom"
              onClick={handleSend}
            >
              Илгээх
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <img src="/images/email.png" alt="" className="m-auto" />
            <h1 className="font-semibold text-2xl text-center mb-2 mt-6">
              Баталгаажуулах
            </h1>
            <p className="text-center">
              {`"${email}" хаягт илгээсэн баталгаажуулах кодыг оруулна уу`}
            </p>
            <div className="flex justify-center mt-6 mb-12">
              <InputOTP
                maxLength={4}
                value={optValue}
                onChange={handleConfirmOtp}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex flex-col gap-12">
              <Button
                variant="ghost"
                className="text-center underline text-sm text-[#71717A] mt-4 mb-12"
                onClick={handleResendOpt}
              >
                Дахин илгээх ({countDown})
              </Button>
            </div>
          </>
        )}
        {/* {step === 3 && (
          <div className="">
            <h1 className="font-semibold text-2xl text-center mb-8">
              Нууц үг сэргээх
            </h1>
            <Input
              type="password"
              className="rounded-full flex items-center px-4 py-1 grow border-none h-9 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Шинэ нууц үг"
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
            <Input
              type="password"
              className="rounded-full flex items-center px-4 py-1 grow border-none h-9 focus-visible:ring-0 focus-visible:ring-offset-0 my-4"
              placeholder="Шинэ нууц үг дахин оруулах"
              value={userData.rePassword}
              onChange={(e) => {
                setUserData({ ...userData, rePassword: e.target.value });
              }}
            />
            <ul className=" flex flex-col text-xs list-disc px-4 mb-4 gap-1">
              <li className="">Том үсэг орсон байх</li>
              <li>Жижиг үсэг орсон байх</li>
              <li>Тоо орсон байх</li>
              <li>Тэмдэгт орсон байх</li>
            </ul>
            <div className="flex flex-col gap-12">
              <Button
                className="bg-[#2563EB]"
                size="custom"
                onClick={createNewPass}
              >
                Үүсгэх
              </Button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default RecoverPass;
