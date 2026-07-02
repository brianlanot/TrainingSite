import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// Third lesson around ingredient quality and sourcing decisions.
const moduleItem = curriculumData.find((module) => module.slug === "advanced")!;
const lessonIndex = 2;
const summary = "Review best practices for ingredient sourcing and feed quality.";
const steps = [
  "Assess ingredient sourcing options and cost tradeoffs.",
  "Check formulation quality for consistency and palatability.",
  "Plan how to maintain feed quality in production.",
];

// Lesson component.
export default function AdvancedLesson3Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}
