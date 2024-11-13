export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[400px] bg-gray-200 rounded-lg mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="space-y-4">
            <div className="h-48 bg-gray-200 rounded-lg" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
