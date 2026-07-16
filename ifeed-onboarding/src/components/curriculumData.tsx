export interface TestCase {
  testCase: string;
  expectedResult: string;
}

export interface TestCaseGroup {
  groupTitle: string;
  headerLabels?: [string, string];
  cases: TestCase[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  summary: string;
  steps: string[];
  stepTitles?: string[];
  stepDetails?: string[][];
  stepImages?: string[][];
  testCases?: TestCase[];
  testCaseGroups?: TestCaseGroup[];
}

export interface ModuleItem {
  id: number;
  slug: string;
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
    slug: "introduction",
    title: "Introduction",
    lessonsCount: 3,
    duration: "15 min",
    objective: "Understand what iFeed V2 is, why it exists, and gain access to the platform using Google authentication.",
    completed: true,
    active: false,
    lessons: [
      {
        id: "1.1",
        title: "What is iFeed V2?",
        duration: "3 min",
        isCompleted: true,
        summary: "Learn what iFeed V2 is, how it helps formulate cost-effective carabao feeds using the Simplex Algorithm, and the different types of users who can benefit from the system (farmers and nutritionists).",
        steps: [
          "iFeed version 2 is a web-based feed formulation cost optimization system designed to assist carabao farmers in creating optimal feed formulations through ingredient and nutrient management. It utilizes the Simplex Algorithm to generate formulations based on nutritional requirements derived from user specifications. User specifications are made easier through a “google form like” survey to identify the proper feed nutrients the carabao needs. The system is purely focused on carabao feed formulations and formulation maintenance.\n\nLink: https://i-feed-v2.vercel.app/"
        ],
        stepTitles: ["Open ifeedv2 app"],

      },
      {
        id: "1.2",
        title: "Creating and Managing Your Account",
        duration: "5 min",
        isCompleted: true,
        summary: "Learn how to create an account, sign in using Google authentication, and securely sign out.",
        steps: [
          "Allow new users to create an account through Google, ensuring a secure, passwordless account.",
          "Enable existing users to log in through Google Sign-In for a secure and quick login experience.",
          "Allow users to securely log out, terminating active sessions to protect their information."
        ],
        stepTitles: ["Sign Up", "Sign In", "Sign Out"],
        stepImages: [
          ["/auth.jpg"],
          [""],
          ["/signout.jpg"]
        ],
        testCases: [
          { testCase: "Sign up using a valid Google account", expectedResult: "User account is created and redirected to dashboard" },
          { testCase: "Sign in using an existing Google account", expectedResult: "User successfully logs in" },
          { testCase: "Sign out from dashboard", expectedResult: "User session ends and is redirected to login page" }
        ]
      },
      {
        id: "1.3",
        title: "Reading the Dashboard",
        duration: "7 min",
        isCompleted: true,
        summary: "Understand the main sections of the dashboard including Start Formulating, My Formulations, and the Ingredients Library.",
        steps: [
          "Shows the ingredients provided by the application.",
          "Shows the nutritional information provided by the application.",
          "Displays the list of active formulations either created by the user or shared with the user."
        ],
        stepTitles: [
          "Navigate through Ingredients Library",
          "Navigate through Nutrients Library",
          "Navigate through Feed Formulation"
        ],
        stepImages: [
          ["/navIngre.jpg"],
          ["/navNutri.jpg"],
          ["/navFormu.jpg"]
        ],
        testCases: [
          { testCase: "Open Start Formulating", expectedResult: "Formulation options are displayed" },
          { testCase: "Open My Formulations", expectedResult: "User's formulations are displayed" },
          { testCase: "Open Ingredients Library", expectedResult: "Ingredient list is displayed" },
          { testCase: "Open a formulation from My Formulations", expectedResult: "Formulation details load successfully" }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "ingredients",
    title: "Managing Ingredients",
    lessonsCount: 3,
    duration: "20 min",
    objective: "Navigate the ingredients library, understand ingredient details, and import ingredient data from Excel.",
    completed: false,
    active: true,
    lessons: [
      {
        id: "2.1",
        title: "Understanding the Ingredients Library",
        duration: "7 min",
        isCompleted: true,
        summary: "Learn how to view ingredient information including nutritional composition and availability.",
        steps: [
          "Displays each ingredient's:\n• Name\n• Price (PHP/kg)\n• Availability\n• Picture (optional)\n• Ingredient Group\n• Nutritional Composition"
        ],
        stepTitles: ["View Ingredient"],
        stepImages: [
          ["/viewIngre.png"]
        ],
        testCases: [
          { testCase: "Open an ingredient", expectedResult: "Ingredient details are displayed" },
          { testCase: "View ingredient nutrition information", expectedResult: "Nutrient values are visible" },
          { testCase: "View ingredient pricing information", expectedResult: "Price is displayed correctly" }
        ]
      },
      {
        id: "2.2",
        title: "Searching and Filtering Ingredients",
        duration: "5 min",
        isCompleted: true,
        summary: "Use search, sorting, and filtering features to locate ingredients quickly.",
        steps: [
          "Click the Search button.",
          "Enter the name of the ingredient.",
          "Filter the ingredient list using the Sort and Filter buttons."
        ],
        stepTitles: ["Click the Search button", "Enter the name of the ingredient", "Sort and Filter"],
        stepImages: [
          ["/searchIngre.jpg"],
          [""],
          ["/sortIngre.jpg"]
        ],
        testCaseGroups: [
          {
            groupTitle: "Search Test Cases",
            headerLabels: ["Input", "Expected Result"],
            cases: [
              { testCase: "Rice Bran", expectedResult: "Rice Bran appears in results" },
              { testCase: "Corn", expectedResult: "Ingredients containing \"Corn\" appear" },
              { testCase: "Rice Barn", expectedResult: "No results found message appears" },
              { testCase: "Empty search field", expectedResult: "Complete ingredient list is displayed" }
            ]
          },
          {
            groupTitle: "Filter Test Cases",
            headerLabels: ["Action", "Expected Result"],
            cases: [
              { testCase: "Filter by ingredient group", expectedResult: "Only ingredients from selected group appear" },
              { testCase: "Sort A\u2013Z", expectedResult: "Ingredients sorted alphabetically" },
              { testCase: "Clear filters", expectedResult: "Complete ingredient list is restored" }
            ]
          }
        ]
      },
      {
        id: "2.3",
        title: "Importing Ingredients from Excel (Admin Only)",
        duration: "8 min",
        isCompleted: false,
        summary: "Import ingredient and nutrient data using an Excel template.",
        steps: [
          "Click the Import button to import ingredients with nutrient data from an Excel (.xlsx) file.\n\nStep 1.1: Click Choose File and select the ingredients Excel file.",
          "Click Add New to create a new ingredient.",
          "Click the Pencil icon to modify ingredient information and configure heavy constraints when necessary.\n\nExample: Cassava Meal \u2264 15% due to bloating risks.",
          "Click the Delete Ingredient button or Trash icon.",
          "Click the Export button to download ingredient and nutrient data.",
          "Click the Search button.",
          "Search for the desired ingredient.",
          "Use Sort and Filter buttons to organize ingredient data."
        ],
        stepTitles: [
          "Bulk Import from Excel (Admin)",
          "Add Ingredient (Admin Only)",
          "Edit Ingredient (Admin Only)",
          "Delete Ingredient (Admin)",
          "Export to Excel (Admin)",
          "Search for an Ingredient",
          "Enter the Ingredient Name",
          "Sort and Filter"
        ],
        testCaseGroups: [
          {
            groupTitle: "Import Test Cases",
            cases: [
              { testCase: "Upload valid Excel template", expectedResult: "Ingredients imported successfully" },
              { testCase: "Upload file with missing columns", expectedResult: "Validation error displayed" },
              { testCase: "Upload unsupported file type", expectedResult: "Upload rejected" },
              { testCase: "Upload duplicate ingredient", expectedResult: "System handles duplicate based on import rules" }
            ]
          },
          {
            groupTitle: "Add / Edit / Delete Test Cases",
            cases: [
              { testCase: "Add valid ingredient", expectedResult: "Ingredient appears in library" },
              { testCase: "Edit ingredient details", expectedResult: "Changes are saved" },
              { testCase: "Delete ingredient", expectedResult: "Ingredient removed from list" },
              { testCase: "Add heavy constraint", expectedResult: "Constraint saved successfully" }
            ]
          },
          {
            groupTitle: "Export Test Cases",
            cases: [
              { testCase: "Export ingredient library", expectedResult: "Excel file downloads successfully" },
              { testCase: "Open exported file", expectedResult: "Data matches system records" }
            ]
          },
          {
            groupTitle: "Search & Filter Test Cases",
            cases: [
              { testCase: "Rice Bran", expectedResult: "Rice Bran appears in results" },
              { testCase: "Corn", expectedResult: "Ingredients containing \"Corn\" appear" },
              { testCase: "Invalid ingredient name", expectedResult: "No results found message appears" },
              { testCase: "Filter by ingredient group", expectedResult: "Only ingredients from selected group appear" },
              { testCase: "Sort A\u2013Z", expectedResult: "Ingredients sorted alphabetically" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "nutrients",
    title: "Understanding Nutrients",
    lessonsCount: 1,
    duration: "10 min",
    objective: "Identify key nutrients used in carabao feed formulation and understand how they are organized within the system.",
    completed: false,
    active: false,
    lessons: [
      {
        id: "3.1",
        title: "Navigating the Nutrients Module",
        duration: "10 min",
        isCompleted: true,
        summary: "Understand nutrient abbreviations, descriptions, units, and nutrient groups.",
        steps: [
          "Click the Nutrients section in the Sidebar.",
          "View each nutrient's:\n• Abbreviation\n• Name\n• Unit\n• Description\n• Nutrient Group",
          "Use the Search button to look up nutrients by name.",
          "Sort by names or group and Filter nutrients using the Sort and Filter buttons."
        ],
        stepTitles: [
          "Click the Nutrients section in the Sidebar",
          "View each nutrient's details",
          "Use the Search button",
          "Sort and Filter"
        ],
        stepImages: [
          ["/navNutri.jpg"],
          ["/viewNutri.png"],
          ["/searchNutri.jpg"],
          ["/sortNutri.jpg"]
        ],
        testCaseGroups: [
          {
            groupTitle: "Search Test Cases",
            headerLabels: ["Input", "Expected Result"],
            cases: [
              { testCase: "Dry Matter", expectedResult: "Dry Matter nutrient appears" },
              { testCase: "Crude Protein", expectedResult: "Crude Protein appears" },
              { testCase: "Invalid nutrient name", expectedResult: "No results found" }
            ]
          },
          {
            groupTitle: "Filter Test Cases",
            headerLabels: ["Action", "Expected Result"],
            cases: [
              { testCase: "Filter by nutrient group", expectedResult: "Relevant nutrients displayed" },
              { testCase: "Sort A\u2013Z", expectedResult: "Nutrients sorted alphabetically" },
              { testCase: "Clear filters", expectedResult: "Complete nutrient list restored" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "formulation",
    title: "Feed Formulation",
    lessonsCount: 6,
    duration: "40 min",
    objective: "Create single and group carabao formulations, configure carabao profiles, add ingredients and nutrients, set formulation constraints, and interpret optimization results.",
    completed: false,
    active: false,
    lessons: [
      {
        id: "4.1",
        title: "Single Carabao Formulation",
        duration: "8 min",
        isCompleted: false,
        summary: "Learn how to create a formulation for a single carabao by entering the required information and understanding formulation access permissions.",
        stepTitles: [
          "Open the Formulate Module",
          "Create a New Formulation",
          "Set Up Initial Details",
          "Configure Carabao Details",
          "Confirm Information",
          "View the Formulation"
        ],
        steps: [
          "Click Formulate from the sidebar.",
          "Click Add New. Select Add Single Carabao.",
          "Enter the Farmer\u2019s Name.\n\nTry:\nFarmer name: Juan Dela Cruz",
          "Enter the Carabao Name.\nEnter the Body Weight.\nSelect the Carabao Type from the dropdown list.\nEnter a Description (optional).\nClick Continue.\n\nTry:\nCarabao name: Carabao01\nBody Weight: 200 kg\nCarabao Category: Growing Calves\nDescription: Healthy",
          "Review all entered information.\nSelect from the dropdown options.\nClick Create.\n\nTry:\nNot Pregnant\nAverage Daily Gain: 0.25 kg",
          "Open the Single Formulation tab.\nLocate the created formulation.\nClick View.\n\nTry: View Carabao01"
        ],
        stepImages: [
          ["/navFormu.jpg"],
          ["/createFormuS.jpg", "/selectSingle.jpg"],
          ["/setupInitial.jpg"],
          ["/configCarabao.jpg"],
          ["/confirmInfo.jpg"],
          ["/viewFormuS.jpg"]
        ],
        testCaseGroups: [
          {
            groupTitle: "Single Carabao Formulation",
            headerLabels: ["Field", "Sample Input"],
            cases: [
              { testCase: "Farmer Name", expectedResult: "Juan Dela Cruz" },
              { testCase: "Carabao Name", expectedResult: "Carabao01" },
              { testCase: "Body Weight", expectedResult: "200 kg" },
              { testCase: "Carabao Category", expectedResult: "Growing Calves" },
              { testCase: "Description", expectedResult: "Healthy growing carabao" }
            ]
          }
        ]
      },
      {
        id: "4.2",
        title: "Group Carabao Formulation",
        duration: "6 min",
        isCompleted: false,
        summary: "Learn how to create a formulation for multiple carabaos with similar nutritional requirements.",
        stepTitles: [
          "Create a New Formulation",
          "Enable Multiple Carabao Configuration",
          "Enter Group Information",
          "Set Up Initial Details",
          "Enter Carabao Details",
          "Confirm Details",
          "View the Group Formulation"
        ],
        steps: [
          "Click Add New.",
          "Turn on the Multiple Carabao Configuration toggle.",
          "Enter the Number of Carabaos.\nSelect the appropriate Phase.\nClick Continue.\n\nTry:\nNumber of carabaos: 3\nPhase: Junior Bull",
          "Enter the Farmer Name.\n\nTry: Jose Mari",
          "Select the Carabao Category.\nEnter Body Weight.\nEnter the Name for each carabao.\nClick Continue.\n\nTry:\nCarabao Category: Junior Bull\nBody Weight: 200\nCarabao name 1: Cara-01\nCarabao name 2: Cara-02\nCarabao name 3: Cara-03",
          "Review all information.\nClick Create.",
          "Open the Group Formulation tab.\nLocate the created formulation.\nClick View."
        ],
        stepImages: [
          ["/createFormuS.jpg"],
          ["/mod4.1.2.jpg"],
          ["/mod4.1.3.jpg"],
          ["/groupc1.jpg"],
          ["/groupc2.jpg"],
          ["/groupc3.jpg"],
          ["/mod4.1.7.jpg"]
        ],
        testCaseGroups: [
          {
            groupTitle: "Group Carabao Formulation",
            headerLabels: ["Field", "Sample Input"],
            cases: [
              { testCase: "Number of Carabaos", expectedResult: "3" },
              { testCase: "Phase", expectedResult: "Junior Bull" },
              { testCase: "Farmer Name", expectedResult: "Jose Mari" },
              { testCase: "Category", expectedResult: "Junior Bull" },
              { testCase: "Body Weight", expectedResult: "200 kg" },
              { testCase: "Carabao Names", expectedResult: "Cara-01, Cara-02, Cara-03" },
              { testCase: "Average Daily Gain", expectedResult: "0.25 kg" }
            ]
          }
        ]
      },
      {
        id: "4.3",
        title: "Adding Ingredients to a Formulation",
        duration: "10 min",
        isCompleted: false,
        summary: "Learn how to add roughages, concentrates, mineral supplements, and manage formulation ingredients.\n\nRecommended Ingredient Ratios:\n• Roughage: 60\u2013100%\n• Concentrate: 0\u201340%\n• Minerals/Vitamins: 0\u20133%",
        stepTitles: [
          "Add Roughage",
          "Add Concentrate",
          "Add Vitamins/Minerals",
          "Search Ingredients",
          "Edit Formulation Information",
          "Delete Ingredients"
        ],
        steps: [
          "Click Add Roughage.\nSelect the desired ingredients.\nClick Add.\n\nTry: Napier Grass",
          "Click Add Concentrate.\nSelect the desired ingredients.\nClick Add.\n\nTry: Ipil ipil leaves",
          "Click Add Vitamins Minerals.\nSelect the desired ingredients.\nClick Add.\n\nTry: Salt",
          "Use the Search Ingredients field.\nEnter the ingredient name.\nSelect the ingredient.\nClick Add.\n\nTry: Malungay",
          "1. Click Edit/Update Parameters below the Save button.\n2.Update:\n  • Formulation Code\n  • Formulation Name\n   • Description\n   • Animal Group\n3. Expand View More Details if necessary.\n4. Refresh the page once done.\n\nTry:\nCode: Farmer1\nName: Cara1\nAnimal Group: Senior Bull\nBody Weight: 300 kg",
          "Click the Trash icon beside an ingredient or nutrient.\n\nTry: Delete Malungay"
        ],
        stepImages: [
          ["/addRoughage.jpg", "/addRoughage2.jpg"],
          ["/addconst1.jpg"],
          ["/addVits.jpg"],
          ["/searchIng.jpg"],
          ["/editFormu.jpg"],
          ["/deleteIngre.jpg"]
        ],
        testCaseGroups: [
          {
            groupTitle: "Add Roughages",
            headerLabels: ["Select", "Expected Result"],
            cases: [
              { testCase: "Napier Grass", expectedResult: "Roughage added to formulation" }
            ]
          },
          {
            groupTitle: "Add Concentrates",
            headerLabels: ["Select", "Expected Result"],
            cases: [
              { testCase: "Ipil ipil Leaves", expectedResult: "Concentrate added to formulation" }
            ]
          },
          {
            groupTitle: "Add Vitamins/Minerals",
            headerLabels: ["Select", "Expected Result"],
            cases: [
              { testCase: "Salt", expectedResult: "Vitamin/Mineral added to formulation" }
            ]
          },
          {
            groupTitle: "Edit Formulation",
            headerLabels: ["Field", "Sample Input"],
            cases: [
              { testCase: "Formulation Code", expectedResult: "Farmer1" },
              { testCase: "Name", expectedResult: "Carabao002" },
              { testCase: "Animal Group", expectedResult: "Senior Bull" },
              { testCase: "Body Weight", expectedResult: "300 kg" }
            ]
          }
        ]
      },
      {
        id: "4.4",
        title: "Setting Ingredient and Nutrient Constraints",
        duration: "6 min",
        isCompleted: false,
        summary: "Learn how to configure ingredient limits and nutrient constraints before optimization.",
        stepTitles: [
          "Display Constraint Fields",
          "Set Ingredient Limits"
        ],
        steps: [
          "Click Add/Show Amount Limit.",
          "Enter the Minimum and Maximum values for each ingredient."
        ],
        stepImages: [
          ["/displayConstraints.jpg"],
          ["/setIngre.jpg"]
        ],
        testCaseGroups: [
          {
            groupTitle: "Set Roughage Constraints",
            headerLabels: ["Ingredient", "Minimum / Maximum"],
            cases: [
              { testCase: "Napier Grass", expectedResult: "Min 10 kg / Max 20 kg" },
              { testCase: "Napier Grass (updated)", expectedResult: "Min 15 kg / Max 20 kg" }
            ]
          },
          {
            groupTitle: "Set Concentrate Constraints",
            headerLabels: ["Concentrate", "Minimum / Maximum"],
            cases: [
              { testCase: "Ipil ipil Leaves", expectedResult: "Min 1 kg / Max 5 kg" },
              { testCase: "Ipil ipil Leaves (updated)", expectedResult: "Min 3 kg / Max 5 kg" }
            ]
          }
        ]
      },
      {
        id: "4.5",
        title: "Running Optimization and Reading Results",
        duration: "10 min",
        isCompleted: false,
        summary: "Learn how to optimize formulations and interpret optimization results.",
        stepTitles: [
          "Run Optimization",
          "View Ingredient Breakdown",
          "View Nutrient Breakdown",
          "AI Insights",
          "Generate PDF Report",
          "Return to the Editor",
          "Track Progress"
        ],
        steps: [
          "Click Optimize.\nSelect:\n• Simplex Hard Constraint\n• Simplex Soft Constraint",
          "Open the Breakdown tab.\nReview ingredient amounts per kilogram.",
          "Open the Nutrients tab.\nCompare:\n• Required Nutrients\n• Total Nutrients",
          "Open the AI Insights tab.\nReview results and recommendations by AI.",
          "Click Generate PDF Report.",
          "Click Back to Editor.",
          "Click Progress at the top of the Formulation Summary."
        ],
        stepImages: [
          ["/runOptimization.jpg"],
          ["/breakdown.jpg"],
          ["/nutrients.jpg"],
          ["/aiinsights1.jpg"],
          ["/generate.jpg"],
          ["/return.jpg"],
          ["/track.jpg", "/track2.jpg"],
        ],
        testCases: [
          { testCase: "Optimize using Simplex Hard Constraint", expectedResult: "Optimal formulation computed with hard constraints applied" },
          { testCase: "Optimize using Simplex Soft Constraint", expectedResult: "Optimal formulation computed with soft constraints applied" },
          { testCase: "View Ingredient Breakdown", expectedResult: "Ingredient amounts per kilogram are displayed" },
          { testCase: "View Nutrient Breakdown", expectedResult: "Required and total nutrient values are compared" },
          { testCase: "Generate PDF Report", expectedResult: "PDF report is downloaded successfully" },
          { testCase: "Return to Editor", expectedResult: "Editor view is restored" },
          { testCase: "Open Progress", expectedResult: "Progress summary is displayed" }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "advanced",
    title: "Advanced Features",
    lessonsCount: 1,
    duration: "15 min",
    objective: "Use advanced formulation tools, configure detailed constraints, and utilize AI-powered formulation assistance.",
    completed: false,
    active: false,
    lessons: [
      {
        id: "5.1",
        title: "Advanced Interface",
        duration: "10 min",
        isCompleted: false,
        summary: "Learn how to use the Advanced Interface for detailed formulation configuration, including No Limits, Fixed (kg), and Manual Percentage (%) constraint types.",
        steps: [
          "Click Show Advanced.\nSelect:\n• Kg-Based Constraints (Recommended)\n• Percentage-Based Constraints (Recommended for nutritionists)",
          "Click the Trash icon.",
          "Choose one of the following:\n• No Limits\n• Fixed (kg)\n• Manual Percentage (%)",
          "Click Add Ingredients.\n\nTry:\nNapier Grass\nIpil Ipil Leaves\nSalt",
          "Click Add Nutrient.",
          "Click Add Ratio.\nSelect two nutrients.\nEnter the ratio value.",
          "Enter minimum and maximum nutrient values.\n\nTry:\nTotal Digestible Nutrients: Min 2024 g / Max 3036 g\nCrude Protein: Min 224.8 g / Max 337.2 g\nCalcium: Min 8 g / Max 12 g\nPhosphorous: Min 7.2 g / Max 10.8 g\nDry Matter: Min 3780 g / Max 5760 g",
          "Click the Trash icon.",
          "Click Add Ingredient.\n\nTry:\nNapier Grass\nIpil ipil Leaves\nSalt",
          "Click Add Nutrient.",
          "Click Add Ratio.",
          "Enter minimum and maximum values for ingredients and nutrients.\n\nTry:\nNapier Grass: Min 10 kg / Max 20 kg\nIpil ipil Leaves: Min 1 kg / Max 20 kg\nSalt: N/A",
          "Click the Trash icon.",
          "Click Add Ingredient.\n\nTry:\nNapier Grass\nIpil ipil Leaves\nSalt",
          "Enter the desired percentage for each ingredient.\n\nTry:\nNapier Grass: 10%\nIpil ipil Leaves: 1%\nSalt: N/A",
          "Click Optimize.",
          "Click the Trash icon."
        ],
        stepTitles: [
          "Open the Advanced Interface",
          "Delete Ingredients or Nutrients",
          "Select Constraint Type",
          "No Limits \u2013 Add Ingredients",
          "No Limits \u2013 Add Nutrients",
          "No Limits \u2013 Add Nutrient Ratio Constraint",
          "No Limits \u2013 Configure Nutrient Limits",
          "No Limits \u2013 Delete Entries",
          "Fixed (kg) \u2013 Add Ingredients",
          "Fixed (kg) \u2013 Add Nutrients",
          "Fixed (kg) \u2013 Add Nutrient Ratio",
          "Fixed (kg) \u2013 Configure Limits",
          "Fixed (kg) \u2013 Delete Entries",
          "Manual Percentage (%) \u2013 Add Ingredients",
          "Manual Percentage (%) \u2013 Set Ingredient Percentages",
          "Manual Percentage (%) \u2013 Optimize",
          "Manual Percentage (%) \u2013 Delete Ingredients"
        ],
        stepImages: [
          ["/advancedShowAdvanced.jpg"],
          ["/advancedDeleteEntry.jpg"],
          ["/advancedConstraintType.jpg"],
          ["/advancedNoLimitsAddIngredient.jpg"],
          ["/advancedNoLimitsAddNutrient.jpg"],
          ["/advancedNoLimitsAddRatio.jpg", "/advancedNoLimitsSelectNutrients.jpg", "/advancedNoLimitsEnterRatio.jpg"],
          ["/advancedNoLimitsNutrientLimits.jpg"],
          ["/advancedNoLimitsDeleteEntry.jpg"],
          ["/advancedFixedAddIngredient.jpg"],
          ["/advancedFixedAddNutrient.jpg"],
          ["/advancedFixedAddRatio.jpg"],
          ["/advancedFixedConfigureLimits.jpg"],
          ["/advancedFixedDeleteEntry.jpg"],
          ["/advancedManualAddIngredient.jpg"],
          ["/advancedManualSetPercentages.jpg"],
          ["/advancedManualOptimize.jpg", "/advancedManualOptimizeResults.jpg"],
          ["/advancedFixedDeleteEntry.jpg"]
        ],
        testCaseGroups: [
          {
            groupTitle: "No Limits \u2013 Add Ingredients",
            headerLabels: ["Ingredient", "Expected Result"],
            cases: [
              { testCase: "Napier Grass", expectedResult: "Ingredient is added to the formulation" },
              { testCase: "Ipil Ipil Leaves", expectedResult: "Ingredient is added to the formulation" },
              { testCase: "Salt", expectedResult: "Ingredient is added to the formulation" }
            ]
          },
          {
            groupTitle: "No Limits \u2013 Nutrient Constraints",
            headerLabels: ["Nutrient", "Minimum (g) / Maximum (g)"],
            cases: [
              { testCase: "Total Digestible Nutrients", expectedResult: "Min 2024 g / Max 3036 g" },
              { testCase: "Crude Protein", expectedResult: "Min 224.8 g / Max 337.2 g" },
              { testCase: "Calcium", expectedResult: "Min 8 g / Max 12 g" },
              { testCase: "Phosphorous", expectedResult: "Min 7.2 g / Max 10.8 g" },
              { testCase: "Dry Matter", expectedResult: "Min 3780 g / Max 5760 g" }
            ]
          },
          {
            groupTitle: "Fixed (kg) \u2013 Ingredient Constraints",
            headerLabels: ["Ingredient", "Minimum (kg) / Maximum (kg)"],
            cases: [
              { testCase: "Napier Grass", expectedResult: "Min 10 kg / Max 20 kg" },
              { testCase: "Ipil ipil Leaves", expectedResult: "Min 1 kg / Max 20 kg" },
              { testCase: "Salt", expectedResult: "N/A" }
            ]
          },
          {
            groupTitle: "Manual Percentage (%) \u2013 Ingredient Percentages",
            headerLabels: ["Ingredient", "Percentage"],
            cases: [
              { testCase: "Napier Grass", expectedResult: "10%" },
              { testCase: "Ipil ipil Leaves", expectedResult: "1%" },
              { testCase: "Salt", expectedResult: "N/A" }
            ]
          }
        ]
      }
    ]
  }
];