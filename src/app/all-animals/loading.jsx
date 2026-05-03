// app/all-animals/loading.jsx

export default function Loading() {
  return (
    <section className="bg-gradient-to-r from-green-50 via-sky-50 to-slate-50 py-8 sm:py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="h-8 w-40 bg-gray-200 rounded-lg animate-pulse mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100"
            >
              {/* Image skeleton */}
              <div className="w-full h-48 bg-gray-200 animate-pulse" />
              <div className="p-4 space-y-3">
                {/* Name */}
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                {/* Breed */}
                <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2" />
                {/* Stats */}
                <div className="flex gap-3">
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-1/3" />
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-1/3" />
                </div>
                {/* Button */}
                <div className="h-9 bg-gray-200 rounded-xl animate-pulse w-full mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
