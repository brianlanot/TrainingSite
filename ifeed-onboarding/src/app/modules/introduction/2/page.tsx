import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the second introduction lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "introduction")!;
const lessonIndex = 1;

// Introduction module details.
export default function IntroductionLesson2Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
    />
  );
}
