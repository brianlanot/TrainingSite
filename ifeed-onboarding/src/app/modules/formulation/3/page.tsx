import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 2; // 4.3 Adding Ingredients to a Formulation

export default function FormulationLesson3Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
    />
  );
}
