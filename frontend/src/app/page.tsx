"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Header from "@/components/header";
import SignUp from "@/app/(auth)/signUp/page";
import { Footer } from "@/components/footer";
import GetNewPass from "@/components/recover_pass/get_new_pass";
import Loading from "@/components/recover_pass/loading";
import { CardWithForm } from "@/components/card/card";
import SavedProduct from "@/components/saved_product";
import RecoverPass from "@/components/recover_pass";
import EnterNewPass from "@/components/recover_pass/new_pass";
// import Footer from "@/components/footer/index";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* <div>
        <Button onClick={minus}>-</Button>
        <Label className="4xl mx-5">{count}</Label>
        <Button onClick={add}>+</Button>
      </div> */}
      <CardWithForm />
    </div>
  );
}
