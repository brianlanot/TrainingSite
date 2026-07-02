import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the first nutrients lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "nutrients")!;
const lessonIndex = 0;
const summary = "Understand protein and energy needs for proper ration formulation.";
const steps = [
  "Review how crude protein supports growth and production.",
  "Compare different energy sources used in feed.",
  "See how protein and energy targets influence ingredient choice.",
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
