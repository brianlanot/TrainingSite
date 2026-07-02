import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the third formulation lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 2;
const summary = "Refine your recipe for animal performance, moisture, and pellet quality.";
const steps = [
  "Compare several example formulas for performance outcomes.",
  "Adjust moisture or processing additives as needed.",
  "Finalize the recipe and prepare it for use or export.",
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
