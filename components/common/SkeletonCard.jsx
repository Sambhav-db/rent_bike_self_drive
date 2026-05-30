export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white rounded-[30px] overflow-hidden border border-gray-100">

      <div className="h-[220px] bg-gray-200" />

      <div className="p-5">

        <div className="h-5 bg-gray-200 rounded w-2/3 mb-4" />

        <div className="space-y-3 mb-5">

          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />

        </div>

        <div className="grid grid-cols-2 gap-3">

          <div className="h-11 bg-gray-200 rounded-full" />
          <div className="h-11 bg-gray-200 rounded-full" />

        </div>

      </div>

    </div>
  );
}