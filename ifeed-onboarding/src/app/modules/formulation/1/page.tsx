import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the first formulation lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 0;
const summary = "Learn how to set up your first feed formulation with ingredient ratios.";
const steps = [
  "Choose the base ingredients for your formula.",
  "Set target nutrient percentages for your mix.",
  "Run the solver and inspect the proposed formula.",
];

// Formulation module details.
export default function FormulationLesson1Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
