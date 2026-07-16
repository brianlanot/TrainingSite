import Link from "next/link";
import { ChevronLeft, ChevronRight, PlayCircle, CheckSquare } from "lucide-react";
import type { ModuleItem } from "./curriculumData";

/** Renders step text, splitting out any "Try:" note into a callout box and linkifying URLs. */
function StepText({ text }: { text: string }) {
  let mainText = text;
  let tryText = "";
  let linkUrl = "";

  const linkMatch = mainText.match(/\n\nLink:\s*(https?:\/\/[^\s]+)/);
  if (linkMatch) {
    linkUrl = linkMatch[1];
    mainText = mainText.replace(linkMatch[0], "").trim();
  }

  const tryIndex = mainText.indexOf("\n\nTry:");
  if (tryIndex !== -1) {
    tryText = mainText.slice(tryIndex + 2).trim(); // keep "Try: ..."
    mainText = mainText.slice(0, tryIndex).trim();
  }

  const renderText = (t: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return t.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-[#4A7A5A] underline hover:text-[#1E5631] font-medium break-all">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const tryLines = tryText.split("\n");
  const tryLabel = tryLines[0];
  const tryRest = tryLines.slice(1).join("\n");

  return (
    <>
      {mainText && (
        <p className="mt-1 text-m text-gray-600 whitespace-pre-line">{renderText(mainText)}</p>
      )}

      {linkUrl && (
        <div className="mt-4 p-5 bg-[#F8FAF7] border border-[#D0E1D2] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-[#1E5631] font-bold text-sm tracking-wide mb-1">External Link</h4>
            <p className="text-sm text-gray-600">Access the iFeed V2 web application</p>
          </div>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#4A7A5A] hover:bg-[#1E5631] text-white rounded-xl font-semibold transition-colors shadow-sm whitespace-nowrap"
          >
            Open Link
          </a>
        </div>
      )}

      {tryText && (
        <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-sm text-amber-800 whitespace-pre-line leading-relaxed">
            <span className="font-bold">{tryLabel}</span>
            {tryRest ? "\n" : ""}
            {renderText(tryRest)}
          </p>
        </div>
      )}
    </>
  );
}


type LessonViewProps = {
  moduleItem: ModuleItem;
  lessonIndex: number;
  customSummary?: string;
  customSteps?: string[];
  customStepTitles?: string[];
  tabs?: React.ReactNode;
};

export default function LessonView({
  moduleItem,
  lessonIndex,
  customSummary,
  customSteps,
  customStepTitles,
  tabs,
}: LessonViewProps) {
  const lessonItem = moduleItem.lessons[lessonIndex];
  const summary = customSummary ?? lessonItem?.summary ?? "";
  const steps = customSteps ?? lessonItem?.steps ?? [];
  const stepTitles = customStepTitles ?? lessonItem?.stepTitles;
  const testCases = lessonItem?.testCases;
  const testCaseGroups = lessonItem?.testCaseGroups;
  const prevLesson = lessonIndex > 0 ? lessonIndex : null;
  const nextLesson = lessonIndex + 1 < moduleItem.lessons.length ? lessonIndex + 2 : null;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="space-y-4">

          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4E7B5A]">
            Module {moduleItem.id}
          </div>
          <h1 className="text-4xl font-bold text-[#1E5631]">
            Lesson {lessonIndex + 1}: {lessonItem?.title ?? "Untitled Lesson"}
          </h1>
          <p className="max-w-3xl text-gray-600 leading-7">{summary}</p>

        </div>

      </div>
      {tabs && <div className="px-2">{tabs}</div>}

      <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Overview */}
              <div className="rounded-2xl border border-gray-200 bg-[#F8FAF7] p-6">
                <div className="flex items-center gap-3 text-sm text-[#4A7A5A] font-semibold uppercase tracking-[0.16em] mb-4">
                  <PlayCircle className="w-4 h-4" />
                  Overview
                </div>
                <p className="text-gray-700 leading-7">{summary}</p>
              </div>

              {/* Steps — only shown when there are steps */}
              {steps.length > 0 && (
                <div className="space-y-6">
                  {steps.map((stepText, idx) => (
                    <div key={idx} className="flex gap-5">
                      <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-[#D0E1D2] bg-[#EAF2EA] text-sm font-bold text-[#1E5631]">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-[#1E5631]">
                          {stepTitles && stepTitles[idx]
                            ? `Step ${idx + 1}. ${stepTitles[idx]}`
                            : `Step ${idx + 1}`}
                        </div>
                        <StepText text={stepText} />

                        {/* Check if the step has an array of images and ensure it's not empty */}
                        {lessonItem?.stepImages && lessonItem.stepImages[idx] && lessonItem.stepImages[idx].length > 0 ? (
                          <div className="mt-4 flex flex-col gap-4"> {/* Stack multiple images vertically */}
                            {lessonItem.stepImages[idx].map((imgUrl, imgIdx) => (
                              // Only render if the string isn't empty
                              imgUrl && (
                                <div key={imgIdx} className="rounded-2xl border border-[#D8E4D7] bg-white p-4">
                                  <img
                                    src={imgUrl}
                                    alt={`${stepTitles?.[idx] || `Step ${idx + 1}`} - Visual ${imgIdx + 1}`}
                                    className="rounded-xl w-full max-w-3xl mx-auto h-auto object-contain max-h-[500px]"
                                  />
                                </div>
                              )
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              )}



              {/* Prev / Next Navigation */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-gray-100">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#7C9B7B]">Lesson duration</p>
                  <p className="text-lg font-semibold text-[#1E5631]">{lessonItem?.duration ?? ""}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={prevLesson ? `/modules/${moduleItem.slug}/${prevLesson}` : `/modules/${moduleItem.slug}/${lessonIndex + 1}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition ${prevLesson ? "border-[#1E5631] text-[#1E5631] hover:bg-[#ECF4EA]" : "cursor-not-allowed border-gray-200 text-gray-400"
                      }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Link>
                  <Link
                    href={nextLesson ? `/modules/${moduleItem.slug}/${nextLesson}` : `/modules/${moduleItem.slug}/${lessonIndex + 1}`}
                    className={`inline-flex items-center gap-2 rounded-full bg-[#A36A3B] px-4 py-3 text-sm font-semibold text-white transition ${nextLesson ? "hover:bg-[#8F5B30]" : "opacity-60 cursor-not-allowed"
                      }`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <aside className="space-y-6">
          {/* Test Cases Sidebar */}
          {(testCases && testCases.length > 0) || (testCaseGroups && testCaseGroups.length > 0) ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <CheckSquare className="w-5 h-5 text-[#4A7A5A]" />
                <h2 className="text-lg font-semibold text-[#1E5631]">Test Cases</h2>
              </div>

              {/* Single flat list */}
              {testCases && testCases.length > 0 && (
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#1E5631] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Test Case</th>
                        <th className="px-4 py-3 text-left font-semibold">Expected Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testCases.map((tc, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F8FAF7]"}>
                          <td className="px-4 py-3 text-gray-700 border-t border-gray-100">{tc.testCase}</td>
                          <td className="px-4 py-3 text-gray-600 border-t border-gray-100">{tc.expectedResult}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Grouped test cases */}
              {testCaseGroups && testCaseGroups.length > 0 && (
                <div className="space-y-5">
                  {testCaseGroups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-2">
                      <h4 className="text-sm font-bold text-[#1E5631]">{group.groupTitle}</h4>
                      <div className="overflow-hidden rounded-2xl border border-gray-200">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-[#1E5631] text-white">
                              <th className="px-4 py-3 text-left font-semibold">
                                {group.headerLabels ? group.headerLabels[0] : "Test Case"}
                              </th>
                              <th className="px-4 py-3 text-left font-semibold">
                                {group.headerLabels ? group.headerLabels[1] : "Expected Result"}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.cases.map((tc, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F8FAF7]"}>
                                <td className="px-4 py-3 text-gray-700 border-t border-gray-100">{tc.testCase}</td>
                                <td className="px-4 py-3 text-gray-600 border-t border-gray-100">{tc.expectedResult}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null}

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
