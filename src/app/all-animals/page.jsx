import Gallery from "@/components/ui/Gallery";

import { getData } from "@/helpers/helper";

export default async function AllAnimals() {
  const cows = await getData();

  return (
    <section className="bg-linear-to-r from-green-50 via-sky-50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl text-[#1A6B3C] font-bold">All Animals</h1>
        <main>
          <Gallery cows={cows} />
        </main>
      </div>
    </section>
  );
}
