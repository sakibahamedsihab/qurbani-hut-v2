// components/QurbaniTips.jsx

const tips = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
        />
      </svg>
    ),
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Health Check",
    description:
      "Learn how to identify physical signs of a healthy animal, ensuring your sacrifice meets all requirements.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "Halal Practices",
    description:
      "A complete guide to the Sunnah practices and ethical treatment of animals during the Qurbani process.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 6h18M3 12h18M3 18h18"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 6V4m8 2V4M8 18v2m8-2v2"
        />
      </svg>
    ),
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Weight Guide",
    description:
      "Understanding live weight versus meat yield to help you choose the right sized animal for your family.",
  },
];

export default function QurbaniTips() {
  return (
    <section className="py-12 sm:py-16 bg-linear-to-r from-green-50 via-sky-50 to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4a3a] mb-2 sm:mb-3">
            Expert Qurbani Tips
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Essential guidance for a meaningful and hygienic Qurbani experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              {/* Icon box */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${tip.iconBg} ${tip.iconColor}`}
              >
                {tip.icon}
              </div>

              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
