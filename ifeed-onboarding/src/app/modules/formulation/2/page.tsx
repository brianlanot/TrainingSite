import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 1; // 4.2 Group Carabao Formulation

export default function FormulationLesson2Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
    />
  );
}
