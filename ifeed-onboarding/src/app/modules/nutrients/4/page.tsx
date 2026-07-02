import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the fourth nutrients lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "nutrients")!;
const lessonIndex = 3;
const summary = "Make sense of nutrient gaps and how balanced feeds fill them.";
const steps = [
  "Analyze your current recipe to find missing nutrient values.",
  "Choose ingredients to correct any deficiencies.",
  "Check that the final formula stays within safe nutrient ranges.",
];

// Nutrients module details.
export default function NutrientsLesson4Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
