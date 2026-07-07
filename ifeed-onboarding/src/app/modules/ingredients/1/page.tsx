import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the first ingredients lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "ingredients")!;

// Ingredients module details.
export default function IngredientsLesson1Page() {
  return <LessonView moduleItem={moduleItem} lessonIndex={0} />;
}
