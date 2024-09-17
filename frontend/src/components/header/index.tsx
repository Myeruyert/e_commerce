import React from "react";
import { ModeToggle } from "./theme";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="h-[70px] border border-white flex justify-between items-center px-6">
      <div className="flex gap-8">
        <div className="flex gap-2">
          <img src="/images/logo.png" alt="" />
          <span>ECOMMERCE</span>
        </div>
        <span>Ангилал</span>
      </div>
      <div>
        <div className="form-control">
          <Input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          <Heart />
          <ShoppingCart />
          <ModeToggle />
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"outline"} size="custom">
            Бүртгүүлэх
          </Button>
          <Button className="bg-[#2563EB]" size="custom">
            Нэвтрэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
