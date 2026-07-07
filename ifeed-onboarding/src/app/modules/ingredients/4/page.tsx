import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the fourth ingredients lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "ingredients")!;
const lessonIndex = 3;
const summary = "Resolve common import issues and make sure your data is ready for use.";
const steps = [
  "Identify missing or incorrectly named columns.",
  "Fix units and data formats in the Excel file.",
  "Re-upload the corrected file and validate the results.",
];

// Ingredients module details.
export default function IngredientsLesson4Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
