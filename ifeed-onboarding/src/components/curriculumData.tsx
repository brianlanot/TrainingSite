export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
}

export interface ModuleItem {
  id: number;
  title: string;
  lessonsCount: number;
  duration: string;
  objective: string;
  completed: boolean;
  active: boolean;
  lessons: Lesson[];
}

export const curriculumData: ModuleItem[] = [
  {
    id: 1,
    title: "Getting Started with iFeed v2",
    lessonsCount: 3,
    duration: "20 min",
    objective: "Understand what iFeed V2 is, why it exists, and gain access to the platform using Google authentication.",
    completed: true,
    active: false,
    lessons: [
      { id: "1.1", title: "Welcome to iFeed V2", duration: "5 min", isCompleted: true },
      { id: "1.2", title: "The Science of Carabao Nutrition", duration: "10 min", isCompleted: true },
      { id: "1.3", title: "Setting up Google Authentication", duration: "5 min", isCompleted: true },
    ]
  },
  {
    id: 2,
    title: "Managing ingredients",
    lessonsCount: 4,
    duration: "45 min",
    objective: "Master Excel imports & library.",
    completed: false,
    active: true,
    lessons: [
      { id: "2.1", title: "Introduction to Feed Ingredients", duration: "10 min", isCompleted: true },
      { id: "2.2", title: "Navigating the Ingredient Library", duration: "15 min", isCompleted: true },
      { id: "2.3", title: "Importing Ingredients from Excel", duration: "12 min", isCompleted: true },
      { id: "2.4", title: "Troubleshooting Formatting Errors", duration: "8 min", isCompleted: true },
    ]
  },
  {
    id: 3,
    title: "Understanding nutrients",
    lessonsCount: 5,
    duration: "60 min",
    objective: "Explore primary nutritional metrics and feed constraints.",
    completed: false,
    active: false,
    lessons: [
      { id: "3.1", title: "Crude Protein & Energy Requirements", duration: "15 min", isCompleted: true },
      { id: "3.2", title: "Dry Matter Intake (DMI) Calculations", duration: "10 min", isCompleted: true },
      { id: "3.3", title: "Fiber and Minerals in Carabao Diets", duration: "15 min", isCompleted: true },
      { id: "3.4", title: "Understanding Feed Constraints", duration: "20 min", isCompleted: true },
    ]
  }
];