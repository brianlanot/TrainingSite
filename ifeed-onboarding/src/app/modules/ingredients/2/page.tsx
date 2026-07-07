import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the second ingredients lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "ingredients")!;

// Ingredients module details.
export default function IngredientsLesson2Page() {
  return <LessonView moduleItem={moduleItem} lessonIndex={1} />;
}
