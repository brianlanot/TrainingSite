import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the first nutrients lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "nutrients")!;
const lessonIndex = 0;
const summary = "Understand nutrient abbreviations, descriptions, units, and nutrient groups.";
const steps = [
  "Click the Nutrients section in the Sidebar.",
  "View each nutrient's abbreviation, description, unit, and nutrient group.",
  "Use the Search button to look up nutrients by name.",
  "Sort by names or group and Filter nutrients using the Sort and Filter buttons."
];

// Nutrients module details.
export default function NutrientsLesson1Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
