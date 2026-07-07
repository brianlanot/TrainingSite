"use client";

import { useState } from "react";
import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 0;

// const tabData = {
//   single: {
//     summary: "Learn how to create a formulation for a single carabao by entering the required information and understanding formulation access permissions.",
//     steps: [
//       "Open the Formulate Module",
//       "Create a New Formulation",
//       "Set Up Initial Details      ",
//       " Configure Carabao Details      ",
//       "Confirm Information",
//       "View the Formulation",

//     ],
//     stepImages: [
//       ["/navFormu.jpg"],
//       ["/createFormuS.jpg","selectSingle.jpg"],
//       ["/setupInitial.jpg"],
//       ["/configCarabao.jpg"],
//       ["/confirmInfo.jpg"],
//       ["/viewFormuS.jpg"]

//     ],
//   },
//   multiple: {
//     summary: "Master multi-mix formulations. Learn how to balance multiple formulas across batches simultaneously.",
//     steps: [
//       "Select a group of target formulas to batch process.",
//       "Allocate shared ingredients and bulk nutrient constraints.",
//       "Execute multi-formulation optimization and compare outputs side-by-side.",
//     ],
//     stepImages: [
//       ["/navFormu.jpg"],
//       ["/createFormuS.jpg","selectSingle.jpg"],
//       ["/setupInitial.jpg"],
//       ["/configCarabao.jpg"],
//       ["/confirmInfo.jpg"],
//       ["/viewFormuS.jpg"]

//     ],
//   },
// };

export default function FormulationLesson1Page() {
  const [activeTab, setActiveTab] = useState<"single" | "multiple">("single");

  // Create the JSX for the tab buttons
  // const tabsJSX = (
  //   <div className="flex border-b border-gray-200">
  //     <button
  //       onClick={() => setActiveTab("single")}
  //       className={`py-3 px-6 font-semibold text-sm transition-all border-b-2 -mb-[2px] ${
  //         activeTab === "single"
  //           ? "border-[#1E5631] text-[#1E5631]"
  //           : "border-transparent text-gray-400 hover:text-gray-600"
  //       }`}
  //     >
  //       Single Formulation
  //     </button>
  //     <button
  //       onClick={() => setActiveTab("multiple")}
  //       className={`py-3 px-6 font-semibold text-sm transition-all border-b-2 -mb-[2px] ${
  //         activeTab === "multiple"
  //           ? "border-[#1E5631] text-[#1E5631]"
  //           : "border-transparent text-gray-400 hover:text-gray-600"
  //       }`}
  //     >
  //       Multiple Formulation
  //     </button>
  //   </div>
  // );

  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      // customSummary={tabData[activeTab].summary}
      // customSteps={tabData[activeTab].steps}
      // customStepImages={tabData[activeTab].stepImages}
    />
  );
}