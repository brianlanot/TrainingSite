import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the third nutrients lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "nutrients")!;
const lessonIndex = 2;
const summary = "Compare key minerals and vitamins that keep animals healthy.";
const steps = [
  "Identify essential minerals like calcium, phosphorus, and sodium.",
  "Review common vitamin supplements and their roles.",
  "Match nutrient levels to animal health outcomes.",
];

// Nutrients module details.
export default function NutrientsLesson3Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
