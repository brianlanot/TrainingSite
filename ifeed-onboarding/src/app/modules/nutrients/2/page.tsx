import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the second nutrients lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "nutrients")!;
const lessonIndex = 1;
const summary = "Learn how to use nutrient targets when selecting ingredient ratios.";
const steps = [
  "Set nutrient targets based on the animal and production stage.",
  "Adjust ingredient ratios to meet protein and energy requirements.",
  "Validate the formula with standard nutrient ranges.",
];

// Nutrients module details.
export default function NutrientsLesson2Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
