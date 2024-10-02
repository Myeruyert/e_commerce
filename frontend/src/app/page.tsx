"use client";
import Carousel from "@/components/main_page/slider";
import ProductLists from "@/components/main_page/product_lists";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Carousel />
      <ProductLists />
    </div>
  );
}
