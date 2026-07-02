import Link from "next/link";
import { notFound } from "next/navigation";
import { curriculumData } from "../../../../components/curriculumData";
import { ChevronLeft, ChevronRight, PlayCircle, CheckCircle2, Lock, Download } from "lucide-react";

interface LessonPageProps {
  params: Promise<{ slug: string; lesson: string }>;
}

 // Page that brings the selected module
export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lesson } = await params;

  // Matching module from the curriculum data, that show the right content.
  const moduleItem = curriculumData.find((mod) => mod.slug === slug);
  const lessonIndex = Number(lesson) - 1;

  // If it cannot be found, the page shows a not found error.
  if (!moduleItem || Number.isNaN(lessonIndex) || lessonIndex < 0 || lessonIndex >= moduleItem.lessons.length) {
    notFound();
  }

  // Specific lesson details and lessons as navigation options.
  const lessonItem = moduleItem.lessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? lessonIndex : null;
  const nextLesson = lessonIndex + 1 < moduleItem.lessons.length ? lessonIndex + 2 : null;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Reading the lesson content. */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="space-y-4">

          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4E7B5A]">
            Module {moduleItem.id}
          </div>
          <h1 className="text-4xl font-bold text-[#1E5631]">
            Lesson {lessonIndex + 1}: {lessonItem.title}
          </h1>
          <p className="max-w-3xl text-gray-600 leading-7">
            {lessonItem.summary}
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
        {/* The walkthrough steps are front and center. */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-[#F8FAF7] p-6">
                <div className="flex items-center gap-3 text-sm text-[#4A7A5A] font-semibold uppercase tracking-[0.16em]">
                  <PlayCircle className="w-4 h-4" />
                  In this lesson
                </div>
                <p className="mt-4 text-gray-700 leading-7">
                  {lessonItem.summary}
                </p>
              </div>

              <div className="space-y-8">
                {lessonItem.steps.map((stepText, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D0E1D2] bg-[#EAF2EA] text-sm font-bold text-[#1E5631]">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-[#1E5631]">{idx + 1}. Step {idx + 1}</div>
                      <p className="mt-2 text-gray-600 leading-7">
                        {stepText}
                      </p>
                      {idx === 0 ? (
                        <div className="mt-4 rounded-3xl border border-[#D8E4D7] bg-white p-4">
                          <div className="h-48 rounded-2xl bg-[#F3F6F3] flex items-center justify-center text-sm text-gray-400">
                            Screenshot / Media
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#7C9B7B]">Lesson duration</p>
                  <p className="text-lg font-semibold text-[#1E5631]">{lessonItem.duration}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={prevLesson ? `/modules/${slug}/${prevLesson}` : `/modules/${slug}/${lessonIndex + 1}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition ${prevLesson ? "border-[#1E5631] text-[#1E5631] hover:bg-[#ECF4EA]" : "cursor-not-allowed border-gray-200 text-gray-400"}`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Link>
                  <Link
                    href={nextLesson ? `/modules/${slug}/${nextLesson}` : `/modules/${slug}/${lessonIndex + 1}`}
                    className={`inline-flex items-center gap-2 rounded-full bg-[#A36A3B] px-4 py-3 text-sm font-semibold text-white transition ${nextLesson ? "hover:bg-[#8F5B30]" : "opacity-60 cursor-not-allowed"}`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Materials and module context without pulling attention away from the lesson itself. */}
        <aside className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#1E5631]">Essential Documents</h2>
            <div className="mt-5 space-y-3">
              {[
                "Inventory Excel Template",
                "Local Ingredient Guide",
                "Nutrient Cheat Sheet",
              ].map((label) => (
                <button key={label} className="w-full flex items-center justify-between gap-3 rounded-2xl bg-[#A36A3B]/10 px-4 py-3 text-sm text-[#8B5A2B] transition hover:bg-[#A36A3B]/20">
                  <span>{label}</span>
                  <Download className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7C9B7B]">Module details</h3>
            <div className="mt-4 text-sm text-gray-600 space-y-3">
              <p><span className="font-semibold text-[#1E5631]">Module:</span> {moduleItem.title}</p>
              <p><span className="font-semibold text-[#1E5631]">Lessons:</span> {moduleItem.lessonsCount}</p>
              <p><span className="font-semibold text-[#1E5631]">Duration:</span> {moduleItem.duration}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
