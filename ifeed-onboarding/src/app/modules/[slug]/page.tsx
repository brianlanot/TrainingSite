import Link from "next/link";
import { notFound } from "next/navigation";
import { curriculumData } from "../../../components/curriculumData";
import { ArrowRight, ChevronLeft } from "lucide-react";

interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;
  const moduleItem = curriculumData.find((module) => module.slug === slug);
  if (!moduleItem) notFound();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <Link
          href="/curriculum"
          className="inline-flex items-center gap-2 rounded-full border border-transparent bg-white/90 px-4 py-2 text-sm font-semibold text-[#1E5631] transition hover:bg-white"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to curriculum
        </Link>
      </div>
      <div className="rounded-3xl border border-[#D7E3D4] bg-[#F6FAF5] p-10 shadow-sm">
        <div className="space-y-4">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4E7B5A]">Module {moduleItem.id}</div>
          <h1 className="text-4xl font-bold text-[#1E5631]">{moduleItem.title}</h1>
          <p className="max-w-3xl text-gray-600 leading-7">{moduleItem.objective}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7B9A7B]">Lessons</p>
              <p className="mt-2 text-2xl font-semibold text-[#1E5631]">{moduleItem.lessonsCount}</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7B9A7B]">Duration</p>
              <p className="mt-2 text-2xl font-semibold text-[#1E5631]">{moduleItem.duration}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {moduleItem.lessons.map((lesson, idx) => (
          <Link
            key={lesson.id}
            href={`/modules/${moduleItem.slug}/${idx + 1}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7C9B7B]">Lesson {idx + 1}</p>
                <h2 className="mt-2 text-xl font-semibold text-[#1E5631]">{lesson.title}</h2>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-[#E4F0E6] flex items-center justify-center text-sm font-bold text-[#2F5E3C]">{idx + 1}</div>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">{lesson.duration}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A36A3B]">
              Continue
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
