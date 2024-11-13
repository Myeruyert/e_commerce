const ProductDetailSkeleton = () => {
  return (
    <main className="w-1/2 m-auto">
      <div className="mt-16 mb-20 grid grid-cols-2 gap-5">
        {/* Left side - Images */}
        <div className="flex gap-5">
          <aside className="flex flex-col gap-2 justify-center">
            <div className="w-14 h-14 bg-gray-200 rounded animate-pulse" />
            <div className="w-14 h-14 bg-gray-200 rounded animate-pulse" />
          </aside>
          <div className="w-[420px] h-[420px] bg-gray-200 rounded-2xl animate-pulse" />
        </div>

        {/* Right side - Product details */}
        <div className="flex flex-col gap-3 justify-end">
          <div className="w-16 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />

          {/* Size section */}
          <div className="flex flex-col gap-2 my-4">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-8 bg-gray-200 rounded-full animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Quantity and price */}
          <div className="flex gap-2 items-center mb-2">
            <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="w-full h-12 bg-gray-200 rounded animate-pulse mt-4" />

          {/* Rating section */}
          <div className="mt-4">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="flex gap-2">
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-8 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mb-24">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6" />
        <div className="grid grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="w-full h-48 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailSkeleton;
