import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// Second lesson so the learner can compare different formulation scenarios.
const moduleItem = curriculumData.find((module) => module.slug === "advanced")!;
const lessonIndex = 1;
const summary = "Use scenario comparison to select the best feed formulation.";
const steps = [
  "Create two or more formulation scenarios.",
  "Compare cost, nutrient balance, and ingredient use.",
  "Pick the scenario that best fits your operational goals.",
];

// Lesson view displays the content in a consistent format.
export default function AdvancedLesson2Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
