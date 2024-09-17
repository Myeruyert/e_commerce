"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Header from "@/components/header";

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
      <Header />

      {/* <div>
        <Button onClick={minus}>-</Button>
        <Label className="4xl mx-5">{count}</Label>
        <Button onClick={add}>+</Button>
      </div> */}
    </div>
  );
}
