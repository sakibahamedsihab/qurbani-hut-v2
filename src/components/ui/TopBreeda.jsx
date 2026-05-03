const breeds = [
  {
    name: "Brahman",
    type: "Cow",
    origin: "Sirajganj",
    description:
      "Massive and powerful bull, ideal for large family Qurbani. Known for high meat yield.",
    emoji: "🐂",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    name: "Black Bengal",
    type: "Goat",
    origin: "Cumilla",
    description:
      "Bangladesh's most prized goat breed. Tender meat and perfect for solo Qurbani.",
    emoji: "🐐",
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  {
    name: "Sahiwal",
    type: "Cow",
    origin: "Pabna",
    description:
      "Famous Pabna breed with excellent meat quality. A trusted choice for families.",
    emoji: "🐄",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    name: "Jamunapari",
    type: "Goat",
    origin: "Khulna",
    description:
      "Large goat breed with impressive weight. More meat than average goats.",
    emoji: "🐏",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "Hariana",
    type: "Cow",
    origin: "Rajshahi",
    description:
      "Giant ox perfect for 7-share Qurbani. Rajshahi's finest livestock breed.",
    emoji: "🐃",
    bg: "bg-purple-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    name: "Beetal",
    type: "Goat",
    origin: "Jessore",
    description:
      "Popular southern breed with great taste. Vet-checked and farm raised.",
    emoji: "🐑",
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
  },
];

export default function TopBreeds() {
  return (
    <section className="py-10 bg-linear-to-r from-green-50 via-sky-50 to-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Breeds</h2>
          <p className="text-sm text-gray-500">
            Discover the most popular and trusted livestock breeds for Qurbani
            in Bangladesh.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {breeds.map((breed) => (
            <div
              key={breed.name}
              className={`rounded-2xl border p-5 ${breed.bg} ${breed.border}`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{breed.emoji}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${breed.badge}`}
                >
                  {breed.type}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {breed.name}
              </h3>

              {/* Origin */}
              <p className="text-xs text-gray-400 mb-2">📍 {breed.origin}</p>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {breed.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
