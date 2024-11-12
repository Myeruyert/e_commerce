import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductContext } from "../context/product_context";

export default function Carousel() {
  const { product } = useContext(ProductContext);
  return (
    <>
      <Swiper
        className="mySwiper"
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        // navigation={true}
        // modules={[Autoplay, Navigation]}
      >
        {product.slice(0, 5).map((prod, i) => (
          <SwiperSlide className="relative" key={i}>
            <div className="absolute left-[200px] bottom-3 z-30">
              <p className="text-lg mb-4">{prod.name}</p>
              <p className=" text-4xl font-bold">
                {Intl.NumberFormat().format(prod.price)}₮
              </p>
            </div>
            <div className="relative w-full h-96">
              {/* <div className="z-20 absolute m-auto left-[40%]">
                <img
                  src={prod.images[0]}
                  alt=""
                  className="object-contain w-80"
                />
              </div> */}
              <div
                style={{
                  // backgroundImage: `url(${prod.images[0]})`,
                  backgroundImage: "url('/images/guy.png')",
                }}
                className={`w-full h-96 bg-no-repeat z-0 bg-[length:100%] bg-center`}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
