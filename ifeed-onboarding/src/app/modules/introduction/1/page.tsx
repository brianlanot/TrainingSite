import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the first introduction lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "introduction")!;
const lessonIndex = 0;

// Introduction module details.
export default function IntroductionLesson1Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
    />
  );
}
