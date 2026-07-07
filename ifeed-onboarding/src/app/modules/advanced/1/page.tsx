import LessonView from "../../../../components/LessonView";
import { curriculumData } from "../../../../components/curriculumData";


// Introduces the first advanced lesson and sets up the lesson content for the learner.
const moduleItem = curriculumData.find((module) => module.slug === "advanced")!;
const lessonIndex = 0;


// The lesson's specific guidance now comes straight from curriculumData,
// so the full Advanced Interface lesson (steps, images, test cases) renders here.
export default function AdvancedLesson1Page() {
  return (
    <LessonView
      moduleItem={moduleItem}
      lessonIndex={lessonIndex}
    />
  );
}

