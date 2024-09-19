import React from "react";
import { ModeToggle } from "./theme";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="h-[70px] flex justify-between items-center px-6">
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <img src="/images/logo.png" alt="" className="w-8" />
            <span className="text-sm">ECOMMERCE</span>
          </div>
          <span className="text-sm">Ангилал</span>
        </div>
        <div className="">
          <Label className="flex items-center bg-zinc-800 gap-2 rounded-3xl px-4 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <Input
              type="text"
              placeholder="Бүтээгдэхүүн хайх"
              className="input w-24 md:w-auto border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </Label>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            <Heart className="" />
            <ShoppingCart />
            <ModeToggle />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={"outline"}
              size="custom"
              className="text-black dark:text-white"
            >
              <Link href="/signUp">Бүртгүүлэх</Link>
            </Button>
            <Button className="bg-[#2563EB]" size="custom">
              <Link href="/signin">Нэвтрэх</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
