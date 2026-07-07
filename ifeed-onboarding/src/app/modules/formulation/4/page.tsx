import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// The fourth formulation lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 3;
const summary = "Finalize a balanced formula and prepare it for production.";
const steps = [
  "Run Optimization",
  "View Ingredient Breakdown",
  "View Nutrient Breakdown",
  "Generate PDF Report",
  "Return to the Editor",
  "Track Progress",

];

// Formulation module details.
export default function FormulationLesson4Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
