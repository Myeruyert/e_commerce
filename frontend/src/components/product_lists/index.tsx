import React, { useContext } from "react";
import { CardWithForm } from "../card/card";
import { ProductContext } from "../context/product_context";

const ProductLists = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-4 max-w-[1200px] mx-auto my-5 gap-4">
      {product?.map((c) => (
        <CardWithForm name={c.name} price={c.price} />
      ))}
      {/* <div className="row-span-2 col-span-2">
        <CardWithForm />
      </div> */}
    </div>
  );
};

export default ProductLists;
