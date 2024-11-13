import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductContext } from "../context/product_context";

export default function Carousel() {
  const { product, isLoading } = useContext(ProductContext);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="relative w-full h-96">
          <div className="w-full h-96 bg-gray-200 rounded-lg">
            <div className="absolute left-[200px] bottom-3">
              <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Swiper className="mySwiper">
        {product.slice(0, 5).map((prod, i) => (
          <SwiperSlide className="relative" key={i}>
            <div className="absolute left-[200px] bottom-3 z-30">
              <p className="text-lg mb-4">{prod.name}</p>
              <p className="text-4xl font-bold">
                {Intl.NumberFormat().format(prod.price)}₮
              </p>
            </div>
            <div className="relative w-full h-96">
              <div
                style={{
                  backgroundImage: "url('/images/guy.png')",
                }}
                className={`w-full h-96 bg-no-repeat z-0 bg-[length:100%] bg-center`}></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
