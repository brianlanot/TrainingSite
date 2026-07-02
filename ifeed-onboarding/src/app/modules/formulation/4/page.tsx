import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// The fourth formulation lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 3;
const summary = "Finalize a balanced formula and prepare it for production.";
const steps = [
  "Review nutrient compliance and ingredient costs.",
  "Apply any final formulation constraints.",
  "Save or export the finished feed recipe.",
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
