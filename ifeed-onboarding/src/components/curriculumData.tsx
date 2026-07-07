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
    duration: "20 min",
    objective: "Understand what iFeed V2 is, why it exists, and gain access to the platform using Google authentication.",
    completed: true,
    active: false,
    lessons: [
      {
        id: "1.1",
        title: "What is iFeed V2?",
        duration: "5 min",
        isCompleted: true,
        summary: "Learn what iFeed V2 is, how it helps formulate cost-effective carabao feeds using the Simplex Algorithm, and the different types of users who can benefit from the system (farmers and nutritionists).",
        steps: []
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
          { testCase: "Sign out from dashboard", expectedResult: "User session ends and is redirected to login page" },
          { testCase: "Attempt to access dashboard after signing out", expectedResult: "User is prompted to log in again" }
        ]
      },
      {
        id: "1.3",
        title: "Reading the Dashboard",
        duration: "10 min",
        isCompleted: true,
        summary: "Understand the main sections of the dashboard including Start Formulating, My Formulations, and the Ingredients Library.",
        steps: [
          "Shows the ingredients provided by the application.",
          "Shows the nutritional information provided by the application",
          "Displays the list of active formulations either created by the user or shared with the user."

        ],
        stepTitles: ["Navigate through Ingredients Library", "Navigate through Nutrients Library", "Navigate through Feed Formulation"],
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
    duration: "35 min",
    objective: "Navigate the ingredients library, understand ingredient details, and import ingredient data from Excel.",
    completed: false,
    active: true,
    lessons: [
      {
        id: "2.1",
        title: "Understanding the Ingredients Library",
        duration: "10 min",
        isCompleted: true,
        summary: "Learn how to view ingredient information including nutritional composition and availability.",
        steps: [
          "Displays each ingredient's: Name, Price (PHP/kg), Ingredient Group, and Nutritional Composition."
        ],
        stepTitles: ["View Ingredient"],
        stepImages: [
          ["/viewIngre.png"],

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
        stepImages: [
          ["/searchIngre.jpg"],
          [""],
          ["/sortIngre.jpg"]
        ],
        
        stepTitles: ["Click the Search button", "Enter the name of the ingredient", "Sort and Filter"],
        testCaseGroups: [
          {
            groupTitle: "Search Test Cases",
            headerLabels: ["Input", "Expected Result"],
            cases: [
              { testCase: "Rice Bran", expectedResult: "Rice Bran appears in results" },
              { testCase: "Corn", expectedResult: "Ingredients containing \"Corn\" appear" },
              { testCase: "Invalid ingredient name", expectedResult: "No results found message appears" },
              { testCase: "Empty search field", expectedResult: "Complete ingredient list is displayed" }
            ]
          },
          {
            groupTitle: "Filter Test Cases",
            headerLabels: ["Action", "Expected Result"],
            cases: [
              { testCase: "Filter by ingredient group", expectedResult: "Only ingredients from selected group appear" },
              { testCase: "Sort A–Z", expectedResult: "Ingredients sorted alphabetically" },
              { testCase: "Sort by price ascending", expectedResult: "Lowest priced ingredients appear first" },
              { testCase: "Clear filters", expectedResult: "Complete ingredient list is restored" }
            ]
          }
        ]
      },
      {
        id: "2.3",
        title: "Importing Ingredients from Excel (Admin Only)",
        duration: "20 min",
        isCompleted: false,
        summary: "Import ingredient and nutrient data using an Excel template.",
        steps: [
          "Click the Import button to import ingredients with nutrient data from an Excel (.xlsx) file. Then click Choose File and select the ingredients Excel file.",
          "Click Add New to create a new ingredient.",
          "Click the Pencil icon to modify ingredient information and configure heavy constraints when necessary. Example: Cassava Meal ≤ 15% due to bloating risks.",
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
          "Delete Ingredient",
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
              { testCase: "Sort A–Z", expectedResult: "Ingredients sorted alphabetically" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "nutrients",
    title: "Understanding nutrients",
    lessonsCount: 1,
    duration: "15 min",
    objective: "Identify key nutrients used in carabao feed formulation and understand how they are organized within the system.    ",
    completed: false,
    active: false,
    lessons: [
      {
        id: "3.1",
        title: "Navigating the Nutrients Module",
        duration: "15 min",
        isCompleted: true,
        summary: "Understand nutrient abbreviations, descriptions, units, and nutrient groups.",
        steps: [
          "Click the Nutrients section in the Sidebar.",
          "View each nutrient's abbreviation, description, unit, and nutrient group.",
          "Use the Search button to look up nutrients by name.",
          "Sort by names or group and Filter nutrients using the Sort and Filter buttons."
        ],  
        stepImages: [
          ["/navNutri.jpg"],
          ["/viewNutri.png"],
          ["/searchNutri.jpg"],
          ["/sortNutri.jpg"]
        ],
      
      },
      
    ]
  },
  {
    id: 4,
    slug: "formulation",
    title: "Feed Formulation",
    lessonsCount: 4,
    duration: "40 min",
    objective: " Create single and group carabao formulations, configure carabao profiles, add ingredients and nutrients, set formulation constraints, and interpret optimization results.    ",
    completed: false,
    active: false,
    lessons: [
      {
        id: "4.1",
        title: "Formulation Principles",
        duration: "15 min",
        isCompleted: false,
        summary: "Learn the basic principles of feed formulation and planning.",

        stepTitles: [
          "Open the Formulate Module",
          "Create a New Formulation",
          "Set Up Initial Details",
          "Configure Carabao Details",
          "Confirm Information",
          "View the Formulation",

        ],

        steps: [
          "",
          "Click Add New. Select Add Single Carabao",
          "Enter the Farmer's Name",
          "• Enter the Carabao Name\n • Enter the Body Weight.\n • Select the Carabao Type from the dropdown list\n • Enter a Description (optional)\n • Click Continue.",
          "• Review all entered information\n • Select from the dropdown options\n  • Click Create\n",
          "• Open the Single Formulation tab\n• Locate the created formulation\n• Click View\n",


        ],

        stepImages: [
          ["/navFormu.jpg"],
          ["/createFormuS.jpg","/selectSingle.jpg"],
          ["/setupInitial.jpg"],
          ["/configCarabao.jpg"],
          ["/confirmInfo.jpg"],
          ["/viewFormuS.jpg"]
        ],
        testCaseGroups: [
          {
            groupTitle: "Test Cases",
            headerLabels: ["Field", "Sample Input"],
            cases: [
              { testCase: "Farmer Name", expectedResult: "Juan Dela Cruz" },
              { testCase: "Formulation Name", expectedResult: "Lactating Feed Mix" },
              { testCase: "Carabao Name", expectedResult: "Bessie" },
              { testCase: "Body Weight", expectedResult: "450 kg" },
              { testCase: "Carabao Type", expectedResult: "Lactating" },
              { testCase: "Description", expectedResult: "Healthy adult lactating carabao" }

            ]
          }
        ]
      },

      {
        id: "4.2",
        title: "Adding Ingredients to a Formulation",
        duration: "10 min",
        isCompleted: false,
        summary: "Learn how to add roughages, concentrates, mineral supplements, and manage formulation ingredients.",
        steps: [
          "Add Roughage  ",
          "Add Concentrate",
          "Add Vitamins/Minerals",
          "Search Ingredients",
          "Edit Formulation Information",
          "Delete Ingredients",
          
        ],
        stepImages: [
          ["/addRoughage.jpg", "/addRoughage2.jpg"],
          ["/addConcentrate.jpg"],
          ["/addVits.jpg"],
          ["/searchIng.jpg"],
          ["/editFormu.jpg"],
          ["/deleteIngre.jpg"]
        ],
        
      },
      {
        id: "4.3",
        title: "Setting Ingredient and Nutrient Constraints",
        duration: "6 min",
        isCompleted: false,
        summary: "Learn how to configure ingredient limits and nutrient constraints before optimization.",
        steps: [
          "Display Constraint Fields",
          "Set Ingredient Limits",
        ],
        stepImages: [
          ["/displayConstraints.jpg"],
          ["/setIngre.jpg"],
        ]
      },
      {
        id: "4.4",
        title: "Running Optimization and Reading Results",
        duration: "10 min",
        isCompleted: false,
        summary: "Learn how to optimize formulations and interpret optimization results.",
        steps: [
          "Run Optimization",
          "View Ingredient Breakdown",
          "View Nutrient Breakdown",
          "Generate PDF Report",
          "Return to the Editor",
          "Track Progress",

        ],
        stepImages: [
          ["/runOptimization.jpg"],
          ["/breakdown.jpg"],
          ["/nutrients.jpg"],
          ["/generate.jpg"],
          ["/return.jpg"],
          ["/track.jpg", "/track2.jpg"],




          
        ]

      }
    ]
  },
  {
  id: 5,
  slug: "advanced",
  title: "Advanced Features",
  lessonsCount: 3,
  duration: "40 min",
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
        "Click Show Advanced, then select Kg-Based Constraints (Recommended) or Percentage-Based Constraints (Recommended for nutritionists).",
        "Click the Trash icon to delete an ingredient or nutrient.",
        "Choose one of the following constraint types: No Limits, Fixed (kg), or Manual Percentage (%).",
        "Click Add Ingredients.",
        "Click Add Nutrient.",
        "Click Add Ratio, select two nutrients, and enter the ratio value.",
        "Enter minimum and maximum nutrient values.",
        "Click the Trash icon to delete entries.",
        "Click Add Ingredient.",
        "Click Add Nutrient.",
        "Click Add Ratio.",
        "Enter minimum and maximum values for ingredients and nutrients.",
        "Click the Trash icon to delete entries.",
        "Click Add Ingredient.",
        "Enter the desired percentage for each ingredient.",
        "Click Optimize.",
        "Click the Trash icon to delete ingredients."
      ],
      stepTitles: [
        "Open the Advanced Interface",
        "Delete Ingredients or Nutrients",
        "Select Constraint Type",
        "No Limits – Add Ingredients",
        "No Limits – Add Nutrients",
        "No Limits – Add Nutrient Ratio Constraint",
        "No Limits – Configure Nutrient Limits",
        "No Limits – Delete Entries",
        "Fixed (kg) – Add Ingredients",
        "Fixed (kg) – Add Nutrients",
        "Fixed (kg) – Add Nutrient Ratio",
        "Fixed (kg) – Configure Limits",
        "Fixed (kg) – Delete Entries",
        "Manual Percentage (%) – Add Ingredients",
        "Manual Percentage (%) – Set Ingredient Percentages",
        "Manual Percentage (%) – Optimize",
        "Manual Percentage (%) – Delete Ingredients"
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
        ["/advancedManualDeleteIngredient.jpg"]
      ],
      testCaseGroups: [
        {
          groupTitle: "Add Ingredients",
          headerLabels: ["Ingredient", "Expected Result"],
          cases: [
            { testCase: "Napier Grass", expectedResult: "Ingredient is added to the formulation" },
            { testCase: "Rice Bran", expectedResult: "Ingredient is added to the formulation" },
            { testCase: "Corn Meal", expectedResult: "Ingredient is added to the formulation" },
            { testCase: "Molasses", expectedResult: "Ingredient is added to the formulation" }
          ]
        },
        {
          groupTitle: "Add Nutrients",
          headerLabels: ["Nutrient", "Expected Result"],
          cases: [
            { testCase: "Crude Protein", expectedResult: "Nutrient is added to the formulation" },
            { testCase: "Dry Matter", expectedResult: "Nutrient is added to the formulation" },
            { testCase: "Calcium", expectedResult: "Nutrient is added to the formulation" },
            { testCase: "Phosphorus", expectedResult: "Nutrient is added to the formulation" }
          ]
        },
        {
          groupTitle: "Add Nutrient Ratio",
          headerLabels: ["Nutrient 1 : Nutrient 2", "Ratio"],
          cases: [
            { testCase: "Calcium : Phosphorus", expectedResult: "2 : 1" }
          ]
        },
        {
          groupTitle: "Configure Fixed (kg)",
          headerLabels: ["Ingredient", "Minimum / Maximum"],
          cases: [
            { testCase: "Napier Grass", expectedResult: "Min 25 kg / Max 40 kg" },
            { testCase: "Rice Bran", expectedResult: "Min 5 kg / Max 10 kg" },
            { testCase: "Corn Meal", expectedResult: "Min 3 kg / Max 8 kg" }
          ]
        },
        {
          groupTitle: "Configure Manual Percentage",
          headerLabels: ["Ingredient", "Percentage"],
          cases: [
            { testCase: "Napier Grass", expectedResult: "65%" },
            { testCase: "Rice Bran", expectedResult: "20%" },
            { testCase: "Corn Meal", expectedResult: "12%" },
            { testCase: "Mineral Mix", expectedResult: "3%" }
          ]
        }
      ]
    },
    {
      id: "5.2",
      title: "Analytics and Reporting",
      duration: "15 min",
      isCompleted: false,
      summary: "Learn how to generate reports and use analytics for decision-making.",
      steps: [
        "Open the reporting dashboard and review key metrics.",
        "Use filters to focus on the data you need.",
        "Apply insights to improve future plans."
      ]
    },
    {
      id: "5.3",
      title: "Advanced Workflow Tips",
      duration: "10 min",
      isCompleted: false,
      summary: "Discover expert workflow tips for faster and more accurate planning.",
      steps: [
        "Use templates and shortcuts to save time.",
        "Keep your ingredient library well organized.",
        "Leverage advanced features for repeatable success."
      ]
    }
  ]
}
];