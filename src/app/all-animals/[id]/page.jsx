import { getDatWithId } from "@/helpers/helper";
import CowDetailPage from "@/components/ui/CowDetail";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function DetailPage({ params }) {
  const { id } = await params;
  const cow = await getDatWithId(id);

  if (!cow) {
    return <h1>Animal not found</h1>;
  }

  console.log(cow);
  return (
    <section className="bg-linear-to-r from-green-50 via-sky-50 to-slate-50 py-10">
      <div className="flex flex-col gap-5 max-w-6xl mx-auto">
        <Link
          href={"/all-animals"}
          className="flex items-center gap-2 text-[#1A6B3C] text-2xl font-semibold"
        >
          <ArrowLeft /> Back to All Animals
        </Link>
        <main>{<CowDetailPage key={cow.id} cow={cow} />}</main>
      </div>
    </section>
  );
}
