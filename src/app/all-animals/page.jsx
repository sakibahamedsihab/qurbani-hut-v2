import Gallery from "@/components/ui/Gallery";

import { getData } from "@/helpers/helper";

export default async function AllAnimals() {
  const cows = await getData();

  return (
    <section className="bg-linear-to-r from-green-50 via-sky-50 to-slate-50 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-xl sm:text-2xl text-[#1A6B3C] font-bold mb-4 sm:mb-5">
          All Animals
        </h1>
        <main>
          <Gallery cows={cows} />
        </main>
      </div>
    </section>
  );
}
