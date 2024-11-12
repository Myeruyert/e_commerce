import React from "react";
import { Button } from "../ui/button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-black text-sm text-white ">
      <div className="w-3/4 m-auto py-10">
        <div className="flex justify-between items-center border-b border-zinc-600 pb-10">
          <img src="/images/logo.png" alt="" />
          <div className="flex items-center gap-8">
            <div className="flex gap-5 items-center">
              <Button variant={"ghost"} className="border p-3" size="sm">
                <IoCallOutline className="text-base" />
              </Button>
              <span>(976) 7007-1234</span>
            </div>
            <div className="flex gap-5 items-center">
              <Button variant={"ghost"} className="border p-3" size="sm">
                <IoMailOutline className="text-base" />
              </Button>
              <span>contact@ecommerce.mn</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <span>© 2024 Ecommerce MN</span>
          <div className="flex gap-6">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};
