import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

const moduleItem = curriculumData.find((module) => module.slug === "formulation")!;
const lessonIndex = 3; // 4.4 Setting Ingredient and Nutrient Constraints

export default function FormulationLesson4Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
    />
  );
}
