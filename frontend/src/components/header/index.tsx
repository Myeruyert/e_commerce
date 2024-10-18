"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./theme";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Heart, ShoppingCart, LogOut, User } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserContext } from "../context/user_context";
import SearchModalList from "../search_modal";
import { CategoryContext } from "../context/category_context";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { setSearchValue } = useContext(CategoryContext);
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/signin");
  };
  // console.log("CV", searchValue);
  return (
    <header className="bg-black text-white">
      <div className="h-[70px] flex justify-between items-center px-6">
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <img src="/images/logo.png" alt="" className="w-8" />
            <span className="text-sm">
              <Link href="/">ECOMMERCE</Link>{" "}
            </span>
          </div>
          <span className="text-sm">
            <Link href="./category">Ангилал</Link>
          </span>
        </div>
        <div className="">
          <Label className="flex items-center bg-zinc-800 gap-2 rounded-3xl px-4 h-8">
            <DropdownMenu>
              <DropdownMenuTrigger>
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
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl p-6">
                <DropdownMenuItem className="focus:bg-transparent">
                  <SearchModalList />
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-transparent">
                  <SearchModalList />
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-transparent">
                  <SearchModalList />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Бүтээгдэхүүн хайх"
                className="input w-24 md:w-auto border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </Label>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            <Link href="/wishlist">
              <Heart className="" />
            </Link>
            <Link href="/buy_steps">
              <ShoppingCart />
            </Link>

            <ModeToggle />
          </div>
          {user ? (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <User />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{user.firstname}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/user_section">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button onClick={logOut} variant="ghost">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
