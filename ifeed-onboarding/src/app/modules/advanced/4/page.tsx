import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// Wraps up the advanced module with a lesson focused on evaluation and improvement.
const moduleItem = curriculumData.find((module) => module.slug === "advanced")!;
const lessonIndex = 3;
const summary = "Practice continuous improvement with formula tracking and evaluation.";
const steps = [
  "Track formula changes and performance outcomes.",
  "Evaluate what worked well and what could improve.",
  "Apply those lessons to your next feed plan.",
];

// Final advanced lesson content in the same clear format as the others.
export default function AdvancedLesson4Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
