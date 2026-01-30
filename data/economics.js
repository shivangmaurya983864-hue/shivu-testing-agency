const questions = [
  {
    "id": 1,
    "question": "Economic variables such as ‘National Income’ and profits can be classified under which of the following heads?",
    "options": ["Stock concept", "Flow concept", "Depreciation", "Final goods"],
    "correct": 2
  },
  {
    "id": 2,
    "question": "Elasticity of demand is constant and equal to 1 at every point on the demand curve. The shape of such a demand curve would be:",
    "options": ["Rectangular hyperbola", "Downward sloping curve", "Vertical straight line", "Horizontal straight line"],
    "correct": 1
  },
  {
    "id": 3,
    "question": "Name the architect of Indian Planning.",
    "options": ["P.C. Mahalanobis", "William Digby", "Dadabhai Naoroji", "V.K.R.V. Rao"],
    "correct": 1
  },
  {
    "id": 4,
    "question": "Which of the following is not included in Human Development Indicators?",
    "options": ["Infant Mortality rate", "Women Empowerment", "Gross National Income per capital", "Access to basic sanitation"],
    "correct": 2
  },
  {
    "id": 5,
    "question": "Which of the following statements are incorrect? (A) Circular flow of income does not take place in a closed economy. (D) Money flow consists of flow of factor payments from households to firms.",
    "options": ["(A) and (D) only", "(A) and (B) only", "(C) and (D) only", "(A), (B) and (C) only"],
    "correct": 1
  },
  {
    "id": 6,
    "question": "Identify the correct statements regarding money supply. (A) Money supply is a stock concept. (C) Money supply is currency with public and demand deposits.",
    "options": ["(A) and (C)", "(B) and (E)", "(C) and (D)", "(A) and (D)"],
    "correct": 1
  },
  {
    "id": 7,
    "question": "Given the following set of data calculate equilibrium income: C = 100 + 0.8Y, Investment = 260 Cr.",
    "options": ["1,800 Cr", "1,500 Cr", "2,200 Cr", "2,300 Cr"],
    "correct": 1
  },
  {
    "id": 8,
    "question": "In 2001, nominal GDP is 1650 and real GDP is 1100 (base year 2000). Identify the pair:",
    "options": ["1,650 and 1,100", "1,550 and 1,000", "1,500 and 1,000", "1,400 and 2,000"],
    "correct": 1
  },
  {
    "id": 9,
    "question": "Identify quantitative tools used by RBI: (B) Bank Rate, (C) CRR, (D) OMO.",
    "options": ["(B), (C) and (D) only", "(B) and (C) only", "(A) only", "(A), (D) and (E) only"],
    "correct": 1
  },
  {
    "id": 10,
    "question": "Match: A-Planning Commission, B-Green Revolution, C-Karve Committee, D-First IPR.",
    "options": ["A-III, B-IV, C-II, D-I", "A-II, B-I, C-II, D-IV", "A-I, B-IV, C-II, D-II", "A-III, B-II, C-IV, D-I"],
    "correct": 1
  },
  {
    "id": 11,
    "question": "“48,000 cr is allotted for PM Awas Yojana.” Identify the government objective:",
    "options": ["Redistribution of income", "Economic stability", "Reducing regional disparities", "Reallocation of resources"],
    "correct": 4
  },
  {
    "id": 12,
    "question": "If reserve ratio is 10% and initial deposit is 450 cr, total money creation is:",
    "options": ["4,500 Cr", "4,000 Cr", "3,500 Cr", "5,000 Cr"],
    "correct": 1
  },
  {
    "id": 13,
    "question": "Which of the following is considered as an intermediate good?",
    "options": ["Mobile for student", "Car for household", "Seeds for farmer", "Vegetables for household"],
    "correct": 3
  },
  {
    "id": 14,
    "question": "Match: A-Monetary Base (III), B-Assets (I), C-Liabilities (IV), D-Credit control (II).",
    "options": ["(A)-(I), (B)-(II), (C)-(II), (D)-(IV)", "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)", "(A)-(II), (B)-(IV), (C)-(I), (D)-(III)", "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)"],
    "correct": 2
  },
  {
    "id": 15,
    "question": "Which one of the following is the apex body to coordinate rural financing?",
    "options": ["NSSO", "SEBI", "RBI", "NABARD"],
    "correct": 4
  },
  {
    "id": 16,
    "question": "Infrastructure is divided into two categories:",
    "options": ["Primary and Secondary", "Commercial and Social", "Service and Industry", "Social and Economic"],
    "correct": 4
  },
  {
    "id": 17,
    "question": "What would be the value of investment multiplier if MPC = MPS?",
    "options": ["4", "2", "3", "1"],
    "correct": 2
  },
  {
    "id": 18,
    "question": "Which of the following is a function of RBI?",
    "options": ["Accepting public deposits", "Giving public loans", "Banker to government", "Credit creation"],
    "correct": 3
  },
  {
    "id": 19,
    "question": "If MPC=0.75, a=100, Y=8000, find Consumption (C):",
    "options": ["7,000 crores", "6,100 crores", "6,900 crores", "7,100 crores"],
    "correct": 2
  },
  {
    "id": 20,
    "question": "Chronological order: PRC(1949), India Plan(1951), Pak Plan(1955), Culture Rev(1966), Pak Reform(1988).",
    "options": ["(A,B,C,D,E)", "(A,C,D,B,E)", "(A,D,C,B,E)", "(A,B,D,C,E)"],
    "correct": 3
  },
  {
    "id": 21,
    "question": "Which of the following is NOT a function of Central Bank?",
    "options": ["Bank rate", "Open market operation", "Lender of last resort", "Deficit financing"],
    "correct": 4
  },
  {
    "id": 22,
    "question": "Tea and coffee are substitutes. Correct statement:",
    "options": ["(A) and (E)", "(B) and (E)", "(C) and (D)", "(B) and (C) only"],
    "correct": 4
  },
  {
    "id": 23,
    "question": "Planned investment=100, Sales > Production by 30. Actual investment?",
    "options": ["100, 100", "100, 70", "70, 70", "70, 100"],
    "correct": 2
  },
  {
    "id": 24,
    "question": "Education cess levied on Union taxes is usually:",
    "options": ["5%", "10%", "12%", "2%"],
    "correct": 4
  },
  {
    "id": 25,
    "question": "Factors for land degradation: (B) Forest fire, (D) Fertilizers, (E) Shifting cultivation.",
    "options": ["(B), (D), (E) only", "(B), (D) only", "(A), (B) only", "(B), (E) only"],
    "correct": 1
  },
  {
    "id": 26,
    "question": "Which is NOT a reason for excess demand?",
    "options": ["Reduction in taxes", "Fall in propensity to consume", "Increase in investment", "Increase in govt spending"],
    "correct": 2
  },
  {
    "id": 27,
    "question": "Not a qualitative measure of monetary policy:",
    "options": ["Margin requirement", "Moral suasion", "Reverse Repo Rate", "Selective credit control"],
    "correct": 3
  },
  {
    "id": 28,
    "question": "Match: NSAP-Pension, MGNREGA-Wage, PMRY-Self, PMJDY-Savings.",
    "options": ["A-II, B-IV, C-III, D-I", "A-I, B-IV, C-III, D-II", "A-I, B-II, C-IV, D-I", "A-II, B-IV, C-I, D-II"],
    "correct": 1
  },
  {
    "id": 29,
    "question": "Commune system in China relates to:",
    "options": ["Informal", "Industry", "Service", "Agriculture"],
    "correct": 4
  },
  {
    "id": 30,
    "question": "True during deficient demand: (A) Actual < Potential, (C) Actual < Expected.",
    "options": ["(D) only", "(A) and (C) only", "(A) and (B) only", "(B) only"],
    "correct": 2
  },
  {
    "id": 31,
    "question": "To control rising revenue deficit, government should:",
    "options": ["Increase grants", "Increase subsidy", "Increase taxation", "Increase admin expenses"],
    "correct": 3
  },
  {
    "id": 32,
    "question": "Goals of Five Year Plans: (A) Modernisation, (B) Equity, (D) Self-reliance, (E) Growth.",
    "options": ["(A,B,C,E)", "(A,C,D,E)", "(B,C,D,E)", "(A,B,D,E)"],
    "correct": 4
  },
  {
    "id": 33,
    "question": "Identify the casual worker from the following:",
    "options": ["Santu, farm labourer", "Restaurant owner", "Lawyer", "Nurse"],
    "correct": 1
  },
  {
    "id": 34,
    "question": "Raising currency value under fixed exchange rate is:",
    "options": ["Devaluation", "Appreciation", "Revaluation", "Depreciation"],
    "correct": 3
  },
  {
    "id": 35,
    "question": "Match: High fertility-Pak, One child-China, Density-India, Mixed-Both.",
    "options": ["A-I, B-II, C-IV, D-III", "A-II, B-III, C-IV, D-I", "A-III, B-IV, C-I, D-II", "A-IV, B-I, C-II, D-III"],
    "correct": 3
  },
  {
    "id": 36,
    "question": "Consumption function starting from Y-axis indicates:",
    "options": ["C=0 at Y=0", "Positive C at zero income", "Saving positive", "Saving zero"],
    "correct": 2
  },
  {
    "id": 37,
    "question": "When Rupee depreciates against dollar, it leads to:",
    "options": ["(A) and (B)", "(B) and (D)", "(C) and (D)", "(B) and (C)"],
    "correct": 4
  },
  {
    "id": 38,
    "question": "Included in National Income:",
    "options": ["Sugar for restaurant", "Household expenditure on goods", "Social security contribution", "Steel for car firm"],
    "correct": 2
  },
  {
    "id": 39,
    "question": "Central problem “what to produce” does NOT deal with:",
    "options": ["Technique of production", "Distribution of resources", "Quantities of goods", "Combination of goods"],
    "correct": 1
  },
  {
    "id": 40,
    "question": "Calculate GDP MP: Firm A (Sales 50, Stock +20), Firm B (Sales 200, Stock -30, IC 100).",
    "options": ["270 Cr", "140 Cr", "330 Cr", "170 Cr"],
    "correct": 2
  },
  {
    "id": 41,
    "question": "(Passage) ‘Alternate fuel’ in the text refers to:",
    "options": ["Fossil fuel", "Conventional energy", "Non-conventional energy", "Non-biodegradable"],
    "correct": 3
  },
  {
    "id": 42,
    "question": "(Passage) New energy policies of the country aim at promoting:",
    "options": ["Fossil fuel", "Conventional source", "Crude oil imports", "Sustainable cleaner fuels"],
    "correct": 4
  },
  {
    "id": 43,
    "question": "(Passage) India meets its crude oil through domestic sources by:",
    "options": ["10%", "75%", "15%", "85%"],
    "correct": 3
  },
  {
    "id": 44,
    "question": "(Passage) Methanol is preferred because: (B) No food security debate, (D) Coal is abundant.",
    "options": ["(A) and (E) only", "(B) and (D) only", "(A), (C) and (D) only", "(E) only"],
    "correct": 2
  },
  {
    "id": 45,
    "question": "Match: A-Low carbon (IV), B-OMC (III), C-Methanol (I), D-Ethanol (II).",
    "options": ["A-IV, B-II, C-I, D-III", "A-IV, B-III, C-I, D-II", "A-I, B-II, C-III, D-IV", "A-III, B-IV, C-I, D-II"],
    "correct": 2
  },
  {
    "id": 46,
    "question": "(Budget Passage) For business community, Budget 2022 relates to:",
    "options": ["Economic stability", "Focus on growth/infra", "Reducing inequality", "Savings"],
    "correct": 2
  },
  {
    "id": 47,
    "question": "Identify direct taxes: (B) Corporate Tax, (C) Capital Gains Tax.",
    "options": ["(A) and (B) only", "(A), (B) and (C) only", "(B) and (C) only", "(D) only"],
    "correct": 3
  },
  {
    "id": 48,
    "question": "(Passage) Find out the fiscal deficit from the budget data provided:",
    "options": ["39,44,909", "22,83,713", "18,84,311", "16,61,196"],
    "correct": 4
  },
  {
    "id": 49,
    "question": "Match: A-Interest (III), B-Grants (I), C-Borrowings (IV), D-Flyover (II).",
    "options": ["A-III, B-I, C-IV, D-II", "A-III, B-IV, C-I, D-II", "A-I, B-II, C-III, D-IV", "A-II, B-I, C-IV, D-III"],
    "correct": 1
  },
  {
    "id": 50,
    "question": "True statement: The highest percentage-wise increase is for Ministry of Communications.",
    "options": ["Lowest for Jal Shakti", "Highest for Communications", "Relied on NSSF", "Bad tax collection"],
    "correct": 2
  }
];
