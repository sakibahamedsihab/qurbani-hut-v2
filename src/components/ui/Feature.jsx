import { Button } from "@heroui/react";
import CowCard from "./Card";
import { getData } from "@/helpers/helper";

export default async function Feature() {
  const cows = await getData();
  const firstFourCows = cows.slice(0, 4);

  return (
    <section className="py-10 bg-linear-to-r from-green-50 via-sky-50 to-slate-50">
      <div className="max-w-6xl mx-auto  space-y-5">
        <h1 className="text-2xl text-[#1A6B3C] font-bold">Feature Section</h1>
        <main className="grid grid-cols-4 gap-5">
          {firstFourCows.map((item) => (
            <CowCard key={item.id} item={item} />
          ))}
        </main>
      </div>
    </section>
  );
}
