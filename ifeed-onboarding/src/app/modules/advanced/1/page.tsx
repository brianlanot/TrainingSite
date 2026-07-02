import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// Introduces the first advanced lesson and sets up the lesson content for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "advanced")!;
const lessonIndex = 0;
const summary = "Apply advanced formulation controls and custom feed scenarios.";
const steps = [
  "Explore advanced constraints like nutrient ranges and ingredient exclusions.",
  "Build a custom scenario for your target animal and cost goals.",
  "Run the advanced solver and compare results.",
];

// The lesson's specific guidance.
export default function AdvancedLesson1Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
