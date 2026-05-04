import { getDatWithId } from "@/helpers/helper";
import CowDetailPage from "@/components/ui/CowDetail";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Spinner } from "@heroui/react";

export default async function DetailPage({ params }) {
  const { id } = await params;
  const cow = await getDatWithId(id);

  if (!cow) {
    return <h1>Animal not found</h1>;
  }

  console.log(cow);
  return (
    <section className="bg-linear-to-r from-green-50 via-sky-50 to-slate-50 py-8 sm:py-10">
      <div className="flex flex-col gap-4 sm:gap-5 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <Link
          href={"/all-animals"}
          className="flex items-center gap-2 text-[#1A6B3C] text-lg sm:text-xl md:text-2xl font-semibold hover:text-[#0d5a3d] transition-colors"
        >
          <ArrowLeft size={20} className="sm:w-6 sm:h-6" /> Back to All Animals
        </Link>
        <main>
            {<CowDetailPage key={cow.id} cow={cow} />}
        </main>
      </div>
    </section>
  );
}
