import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "ingredients")!;

export default function IngredientsLesson1Page() {
  return <LessonView moduleItem={moduleItem} lessonIndex={0} />;
}
