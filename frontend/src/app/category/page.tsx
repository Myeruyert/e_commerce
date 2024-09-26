import { CardWithForm } from "@/components/card/card";
import { CategoryLabel } from "@/components/category";
import { SizeLabel } from "@/components/category/size_label";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="mt-16 mb-24 w-3/4 m-auto flex gap-32">
      <aside className="flex flex-col gap-12">
        <CategoryLabel />
        <SizeLabel />
      </aside>
      <main className="grid grid-cols-3 gap-8 w-2/3 mx-auto">
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
      </main>
    </div>
  );
};

export default CategoryPage;
