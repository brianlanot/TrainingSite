import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the second formulation lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 1;
const summary = "Adjust your formulation based on feed cost and ingredient availability.";
const steps = [
  "Add Roughage  ",
  "Add Concentrate",
  "Add Vitamins/Minerals",
  "Search Ingredients",
  "Edit Formulation Information",
  "Delete Ingredients",

];

// Formulation module details.
export default function FormulationLesson2Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
