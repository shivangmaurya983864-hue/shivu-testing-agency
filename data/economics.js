const questions = [
  {
    id: 1,
    question: "Economic variables such as National Income and profits are:",
    options: ["Stock concept", "Flow concept", "Depreciation", "Final goods"],
    correct: 2
  },
  {
    id: 2,
    question: "Elasticity of demand is equal to 1 at every point on the demand curve. The curve is:",
    options: ["Horizontal straight line", "Vertical straight line", "Downward sloping straight line", "Rectangular hyperbola"],
    correct: 4
  },
  {
    id: 3,
    question: "Architect of Indian Planning is:",
    options: ["William Digby", "P.C. Mahalanobis", "V.K.R.V. Rao", "Dadabhai Naoroji"],
    correct: 2
  },
  {
    id: 4,
    question: "Which is NOT included in Human Development Index?",
    options: ["Women empowerment", "Infant Mortality Rate", "Access to sanitation", "GNI per capita"],
    correct: 1
  },
  {
    id: 5,
    question: "Which statements are incorrect? (A. Circular flow doesn't occur in closed economy, D. Money flow is factor payments from HH to firms)",
    options: ["(A) & (B)", "(A), (B) & (C)", "(A) & (D)", "(C) & (D)"],
    correct: 3
  },
  {
    id: 6,
    question: "Correct statements about money supply are: (A. Stock concept, C. Currency with public + demand deposits)",
    options: ["(A) & (C)", "(A) & (D)", "(B) & (C)", "(C) & (D)"],
    correct: 1
  },
  {
    id: 7,
    question: "If C = 100 + 0.8Y and I = 260, equilibrium income is:",
    options: ["1500 Cr", "2300 Cr", "2200 Cr", "1800 Cr"],
    correct: 4
  },
  {
    id: 8,
    question: "Nominal and Real GDP for 2001 are:",
    options: ["1550 and 1000", "1400 and 2000", "1650 and 1100", "1500 and 1000"],
    correct: 3
  },
  {
    id: 9,
    question: "Quantitative tools of monetary policy are: (Bank rate, CRR, OMO)",
    options: ["(A) only", "(B), (C) & (D)", "(B) & (C)", "(A), (D) & (E)"],
    correct: 2
  },
  {
    id: 10,
    question: "Correct matching is: (PC-1950, GR-1960s, Karve-1955, IPR-1948)",
    options: ["All correct", "A & B only", "B & C only", "A, C & D only"],
    correct: 1
  },
  {
    id: 11,
    question: "₹48,000 crore allocation to PM Awas Yojana shows objective of:",
    options: ["Economic stability", "Redistribution of income", "Reallocation of resources", "Regional balance"],
    correct: 2
  },
  {
    id: 12,
    question: "Reserve ratio = 10%, initial deposit = 450 Cr. Credit creation =",
    options: ["4000 Cr", "5000 Cr", "4500 Cr", "3500 Cr"],
    correct: 3
  },
  {
    id: 13,
    question: "Which is an intermediate good?",
    options: ["Mobile bought by student", "Car bought by household", "Seeds bought by farmer", "Vegetables bought by household"],
    correct: 3
  },
  {
    id: 14,
    question: "Apex institution for rural credit in India is:",
    options: ["NABARD", "RBI", "SEBI", "NSSO"],
    correct: 1
  },
  {
    id: 15,
    question: "Infrastructure is divided into:",
    options: ["Primary & Secondary", "Commercial & Social", "Social & Economic", "Public & Private"],
    correct: 3
  },
  {
    id: 16,
    question: "If MPC = MPS, investment multiplier is:",
    options: ["4", "3", "2", "1"],
    correct: 3
  },
  {
    id: 17,
    question: "Which is a function of RBI?",
    options: ["Accepting deposits from public", "Giving loans to public", "Banker to government", "Credit creation"],
    correct: 3
  },
  {
    id: 18,
    question: "If MPC = 0.75 and autonomous consumption = 100, consumption at income 8000 is:",
    options: ["7000", "6100", "6900", "6000"],
    correct: 2
  },
  {
    id: 19,
    question: "Which is NOT a function of Central Bank?",
    options: ["Bank rate", "OMO", "Lender of last resort", "Deficit financing"],
    correct: 4
  },
  {
    id: 20,
    question: "If tea and coffee are substitutes:",
    options: ["Price of tea ↑ → demand for coffee ↑", "Price of tea ↓ → price of coffee ↑", "Both A & B", "None"],
    correct: 1
  },
  {
    id: 21,
    question: "Planned investment = 100 Cr, actual sale = 70 Cr. Ex-ante and Ex-post investment:",
    options: ["100, 70", "70, 100", "100, 100", "70, 70"],
    correct: 1
  },
  {
    id: 22,
    question: "Education cess on Union taxes is:",
    options: ["5%", "10%", "2%", "12%"],
    correct: 3
  },
  {
    id: 23,
    question: "NOT a cause of excess demand is:",
    options: ["Reduction in taxes", "Fall in MPC", "Increase in investment", "Increase in government spending"],
    correct: 2
  },
  {
    id: 24,
    question: "Which is NOT a qualitative credit control?",
    options: ["Margin requirement", "Moral suasion", "Reverse repo rate", "Selective credit control"],
    correct: 3
  },
  {
    id: 25,
    question: "Commune system in China relates to:",
    options: ["Industry", "Services", "Agriculture", "Informal sector"],
    correct: 3
  },
  {
    id: 26,
    question: "Deficient demand means:",
    options: ["Actual output < potential output", "Aggregate demand < aggregate supply", "Both A & B", "None"],
    correct: 3
  },
  {
    id: 27,
    question: "Measure to reduce revenue deficit is:",
    options: ["Increase taxes", "Increase subsidy", "Increase grants", "Increase admin expense"],
    correct: 1
  },
  {
    id: 28,
    question: "Goal of Five Year Plans is:",
    options: ["Growth, equity, self-reliance, modernisation", "Only growth", "Subsidies & growth", "Only equity"],
    correct: 1
  },
  {
    id: 29,
    question: "Casual worker is:",
    options: ["Farm labourer", "Restaurant owner", "Lawyer", "Nurse"],
    correct: 1
  },
  {
    id: 30,
    question: "Raising currency value under fixed exchange rate is:",
    options: ["Devaluation", "Appreciation", "Revaluation", "Depreciation"],
    correct: 3
  },
  {
    id: 31,
    question: "Consumption function cutting Y-axis shows:",
    options: ["Zero consumption at zero income", "Positive consumption at zero income", "Positive saving", "Zero income"],
    correct: 2
  },
  {
    id: 32,
    question: "Rupee depreciates → impact is:",
    options: ["Exports increase", "Imports fall", "Both A & B", "Imports rise"],
    correct: 3
  },
  {
    id: 33,
    question: "Included in National Income is:",
    options: ["Sugar used by restaurant", "Household consumption", "Social security contribution", "Steel used by car company"],
    correct: 2
  },
  {
    id: 34,
    question: "“What to produce” does NOT concern:",
    options: ["Technique", "Quantity", "Combination", "Resource allocation"],
    correct: 1
  },
  {
    id: 35,
    question: "GDP at MP = ? (A: Sales 50, ΔStock +20; B: Sales 200, ΔStock -30, IC 100)",
    options: ["140", "270", "170", "330"],
    correct: 1
  },
  {
    id: 36,
    question: "Alternate fuel means:",
    options: ["Fossil fuel", "Non-conventional energy", "Conventional energy", "Non-biodegradable"],
    correct: 2
  },
  {
    id: 37,
    question: "New energy policy focuses on:",
    options: ["Cleaner fuels", "Fossil fuels", "Conventional sources", "Oil imports"],
    correct: 1
  },
  {
    id: 38,
    question: "India meets crude oil needs domestically by about:",
    options: ["15%", "85%", "10%", "75%"],
    correct: 1
  },
  {
    id: 39,
    question: "Ethanol is blended with:",
    options: ["Petrol", "Diesel", "Coal", "Natural gas"],
    correct: 1
  },
  {
    id: 40,
    question: "Main feedstock of methanol globally is:",
    options: ["Coal", "Natural gas", "Biomass", "Naphtha"],
    correct: 2
  }
],
{
    id: 41,
    question: "‘Alternate fuel’ refers to:",
    options: ["Fossil fuel", "Conventional energy sources", "Non-conventional energy sources", "Non-biodegradable energy sources"],
    correct: 3
  },
  {
    id: 42,
    question: "New energy policies of the country aim at promoting:",
    options: ["Fossil fuel sources", "Conventional energy sources", "Crude oil imports", "Sustainable use of cleaner fuels"],
    correct: 4
  },
  {
    id: 43,
    question: "India meets its crude oil requirements through domestic sources of:",
    options: ["10%", "75%", "15%", "85%"],
    correct: 3
  },
  {
    id: 44,
    question: "Methanol is preferred over ethanol because: (B) No food vs food security debate, (D) Coal is abundantly available.",
    options: ["(A) and (E) only", "(B) and (D) only", "(A), (C) and (D) only", "(E) only"],
    correct: 2
  },
  {
    id: 45,
    question: "Match: A.Low carbon-IV, B.OMCs-III, C.Methanol-I, D.Ethanol-II",
    options: ["(A)-(IV), (B)-(II), (C)-(I), (D)-(III)", "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)", "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)", "None of these"],
    correct: 2
  },
  {
    id: 46,
    question: "For the business community, Budget 2022 relates to:",
    options: ["Economic stability", "Focus on growth and infrastructure", "Reduction of inequalities", "Encouragement to save more"],
    correct: 2
  },
  {
    id: 47,
    question: "Identify direct taxes: B. Corporate Tax, C. Capital Gains Tax.",
    options: ["(A) and (B) only", "(A), (B) and (C) only", "(B) and (C) only", "Only D"],
    correct: 3
  },
  {
    id: 48,
    question: "Based on budget data, find out the fiscal deficit:",
    options: ["39,44,909", "22,83,713", "18,84,311", "16,61,196"],
    correct: 4
  },
  {
    id: 49,
    question: "Match: A.Interest-III, B.Grants-I, C.Borrowings-IV, D.Flyover-II",
    options: ["(A)-(III), (B)-(I), (C)-(IV), (D)-(II)", "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)", "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)", "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)"],
    correct: 1
  },
  {
    id: 50,
    question: "Which one of the following statement is true?",
    options: ["Lowest increase for Jal Shakti", "Highest increase for Communications", "Relied heavily on NSSF", "Bad tax collection"],
    correct: 2
  }
];
