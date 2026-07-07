import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the third formulation lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 2;
const summary = "Learn how to configure ingredient limits and nutrient constraints before optimization.";
const steps = [
  "Display Constraint Fields",
  "Set Ingredient Limits",
];

// Formulation module details.
export default function FormulationLesson3Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
