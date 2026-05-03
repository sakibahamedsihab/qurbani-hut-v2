"use client";
import CowCard from "./Card";

import { useState } from "react";

export default function Gallery({ cows }) {
  const [sortedCows, setSortedCows] = useState(
    [...cows].sort((a, b) => a.price - b.price),
  );

  return (
    <div>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {sortedCows.map((item) => (
          <CowCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}
