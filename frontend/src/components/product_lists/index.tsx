import React from "react";
import { CardWithForm } from "../card/card";

const ProductLists = () => {
  return (
    <div className="grid grid-cols-4 max-w-[1200px] mx-auto my-5 gap-4">
      {/* <div className="row-span-2 col-span-2">
        <CardWithForm />
        aa
      </div> */}
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
      <div className="row-span-2 col-span-2">
        <CardWithForm />
      </div>
      <CardWithForm />
      <CardWithForm />
    </div>
  );
};

export default ProductLists;
