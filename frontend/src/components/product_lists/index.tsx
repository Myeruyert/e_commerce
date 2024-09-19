import React from "react";
import { CardWithForm } from "../card/card";

const ProductLists = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-col gap-5 w-3/5 m-auto mt-5 my-24">
      {/* <div className="row-span-2 col-span-2">
        <CardWithForm />
        aa
      </div> */}
      <div className="row-span-1 col-span-1">
        <CardWithForm />
      </div>
      <div className="row-span-1 col-span-1">
        <CardWithForm />
      </div>
      <div className="row-span-1 col-span-1">
        <CardWithForm />
      </div>
      <div className="row-span-1 col-span-1">
        <CardWithForm />
      </div>
    </div>
  );
};

export default ProductLists;
