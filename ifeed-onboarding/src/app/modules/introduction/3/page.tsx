import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";

// This page sets up the third introduction lesson for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "introduction")!;
const lessonIndex = 2;

// Introduction module details.
export default function IntroductionLesson3Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
    />
  );
}
