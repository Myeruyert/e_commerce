import SavedProduct from "@/components/saved_product";
import React from "react";

const Wishlists = () => {
  return (
    <div className="w-1/2 h-[calc(100vh-290px)] m-auto pt-16">
      <h1 className="text-xl font-bold mb-4">Хадгалсан бараа (3) </h1>
      <SavedProduct />
      <SavedProduct />
      <SavedProduct />
    </div>
  );
};

export default Wishlists;
