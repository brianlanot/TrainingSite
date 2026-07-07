import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "ingredients")!;
const lessonIndex = 2;
const summary = "Bring your ingredient data into the platform from an Excel spreadsheet.";
const steps = [
  "Format your Excel file with the required columns.",
  "Upload the spreadsheet using the import tool.",
  "Review and confirm the imported ingredient records.",
];

export default function IngredientsLesson3Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
      customSummary={summary}
      customSteps={steps}
    />
  );
}

