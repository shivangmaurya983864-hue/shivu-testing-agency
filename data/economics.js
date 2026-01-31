const questions = [
  // ✅ QUESTION 1
  {
    question: "Economic variables such as National Income and Profits can be classified under which of the following heads?",
    options: ["Stock concept", "Flow concept", "Capital formation", "Depreciation"],
    correct: 2,
    topic: "Flow and Stock Concepts",
    explanation:
      "Economics mein variables ko time ke hisaab se dekha jata hai.\n\n" +
      "Agar koi cheez ek period (jaise ek saal) ke liye measure hoti hai, toh woh 'Flow' hai.\n\n" +
      "Income aur Profit hamesha ek mahine ya saal ke liye hote hain, isliye yeh Flow Concept hain."
  },

  // ✅ QUESTION 2
  {
    question: "Elasticity of demand is constant and equal to 1 at every point on the demand curve. The shape of such a demand curve would be:",
    options: ["Horizontal straight line", "Vertical straight line", "Downward sloping curve", "Rectangular hyperbola"],
    correct: 4,
    topic: "Elasticity of Demand",
    explanation:
      "Jab Price aur Quantity ka percentage change hamesha barabar (e=1) ho, toh total kharcha (P × Q) constant rehta hai.\n\n" +
      "Aisi special shape ko geometry mein 'Rectangular Hyperbola' kehte hain.\n\n" +
      "Is curve par har point par elasticity hamesha 1 hi rehti hai."
  },

  // ✅ QUESTION 3
  {
    question: "Name the architect of Indian Planning.",
    options: ["William Digby", "P.C. Mahalanobis", "V.K.R.V. Rao", "Dadabhai Naoroji"],
    correct: 2,
    topic: "Indian Planning",
    explanation:
      "Independence ke baad India ki economy ka blueprint P.C. Mahalanobis ne banaya tha.\n\n" +
      "Inhe 'Father of Indian Statistics' bhi kaha jata hai.\n\n" +
      "Unhone hi 2nd Five Year Plan mein badi industries par zor diya tha."
  },

  // ✅ QUESTION 4
  {
    question: "Which of the following is not included in Human Development Indicators?",
    options: ["Women Empowerment", "Infant Mortality rate", "Access to basic sanitation", "Gross National Income per capita"],
    correct: 1,
    topic: "Human Development Index (HDI)",
    explanation:
      "HDI main 3 cheezon par focus karta hai: Health, Education aur Standard of Living.\n\n" +
      "Women Empowerment desh ke liye zaroori hai, par UNDP ke standard HDI formula mein ise direct measure nahi kiya jata.\n\n" +
      "HDI basic survival aur earning indicators par chalta hai."
  },

  // ✅ QUESTION 5
  {
    question: "Which of the following statements are incorrect? A. Circular flow of income does not take place in a closed economy. B. Real flow consists of flow of factor services from households to firms. C. In a two-sector economy, total production is always equal to total consumption. D. Money flow consists of flow of factor payments from households to firms..",
    options: ["(A) and (B) only", "(A), (B) and (C) only", "(A) and (D) only", "(C) and (D) only"],
    correct: 3,
    topic: "Circular Flow of Income",
    explanation:
      "Statement A galat hai kyunki closed economy mein bhi paisa ghoomta hai.\n\n" +
      "Statement D galat hai kyunki 'Factor Payments' (salary/rent) Firms se Households ko milti hain, na ki ulta.\n\n" +
      "Isliye A aur D dono incorrect hain."
  },

  // ✅ QUESTION 6
  {
    question: "Identify the correct statements regarding money supply: A. Money supply is a stock concept. B. Money supply is a flow concept. C. Money supply is the currency (cash and coins) with the public and demand deposit in banks. D. Money supply is the currency held with banks..",
    options: ["(A) and (C)", "(A) and (D)", "(B) and (E)", "(C) and (D)"],
    correct: 1,
    topic: "Money Supply",
    explanation:
      "Money supply ek 'Stock' concept hai kyunki ise ek point of time par measure karte hain (jaise aaj kitna paisa hai).\n\n" +
      "Ismein logon ke paas pada cash aur bank mein rakha paisa (Demand Deposits) dono shamil hote hain."
  },

  // ✅ QUESTION 7
  {
    question: "Given: C = 100 + 0.8Y and I = 260. Calculate equilibrium income (Y).",
    options: ["1,500 Cr", "2,300 Cr", "2,200 Cr", "1,800 Cr"],
    correct: 4,
    topic: "Equilibrium Income",
    explanation:
      "Formula: Y = C + I.\n\n" +
      "Maths lagao: Y = 100 + 0.8Y + 260 => Y - 0.8Y = 360.\n\n" +
      "0.2Y = 360, toh Y = 360 / 0.2 = 1,800 Cr."
  },

  // ✅ QUESTION 8
  {
    question: "Year 2000 (Base): 100 units at ₹10. Year 2001: 110 units at ₹15. Find Nominal and Real GDP for 2001.",
    options: ["₹1,550 and ₹1,000", "₹1,400 and ₹2,000", "₹1,650 and ₹1,100", "₹1,500 and ₹1,000"],
    correct: 3,
    topic: "Nominal vs Real GDP",
    explanation:
      "Nominal GDP (Today's Price) = 110 units × ₹15 = ₹1,650.\n\n" +
      "Real GDP (Old Price) = 110 units × ₹10 = ₹1,100.\n\n" +
      "Real GDP se pata chalta hai ki asli production kitna badha."
  },

  // ✅ QUESTION 9
  {
    question: "Identify quantitative tools used by RBI: (B) Bank Rate, (C) CRR, (D) OMO.",
    options: ["(A) only", "(B), (C) and (D) only", "(B) and (C) only", "(A), (D) and (E) only"],
    correct: 2,
    topic: "Monetary Policy",
    explanation:
      "Quantitative tools poori economy mein money ki 'quantity' ko control karte hain.\n\n" +
      "Bank Rate, CRR, aur OMO aise tools hain jo loan ko mehnga ya sasta kar dete hain.\n\n" +
      "Moral Suasion sirf ek advice hai, isliye woh Qualitative tool hai."
  },

  // ✅ QUESTION 10
  {
    question: "Arrange the following in chronological order: A. First Census, B. Year of Great Divide, C. Opening of Suez Canal, D. Introduction of Railways, E. Incorporation of TISCO",
    options: ["(a) A, B, C, D, E", "(b) E, D, C, B, A", "(c) D, C, A, E, B", "(d) A, C, D, B, E"],
    correct: 4,
    topic: "Indian Economic History (Colonial Period)",
    explanation:
      "Timeline: Railways (1853) -> Suez Canal (1869) -> First Census (1872) -> TISCO (1907) -> Great Divide (1921).\n\n" +
      "Option (d) sabse accurate sequence follow karta hai.\n\n" +
      "CUET mein dates exact na bhi yaad ho, toh sequence zaroor pucha jata hai."
  },

  // ✅ QUESTION 11
  {
    question: "₹48,000 cr allotted for PM Awas Yojana. Identify the government objective.",
    options: ["Reallocation of resources", "Economic stability", "Redistribution of income", "Reducing regional disparities"],
    correct: 1,
    topic: "Government Budget",
    explanation:
      "Jab sarkar kisi khas sector (jaise housing) mein paisa daalti hai, toh woh resources ko redirect kar rahi hoti hai.\n\n" +
      "Iska maqsad social welfare badhana hota hai, isliye ise 'Reallocation of Resources' kehte hain."
  },

  // ✅ QUESTION 12
  {
    question: "If reserve ratio is 10% and initial deposit is ₹450 cr, total money creation will be:",
    options: ["₹4,000 Cr", "₹5,000 Cr", "₹3,500 Cr", "₹4,500 Cr"],
    correct: 4,
    topic: "Money Creation",
    explanation:
      "Money Multiplier = 1 / Reserve Ratio = 1 / 0.1 = 10.\n\n" +
      "Total Money = Initial Deposit × Multiplier = 450 × 10 = ₹4,500 Cr.\n\n" +
      "Banks isi tarah thode se paise se zyaada loan baant paate hain."
  },

  // ✅ QUESTION 13
  {
    question: "Which of the following is considered an intermediate good?",
    options: ["Vegetables for household", "Mobile for student", "Car for household", "Seeds for farmer"],
    correct: 4,
    topic: "Final vs Intermediate Goods",
    explanation:
      "Intermediate goods woh hote hain jo naya maal banane mein kharch ho jayein.\n\n" +
      "Farmer seeds aur fertilizers ko use karke fasal ugata hai aur bechta hai.\n\n" +
      "Household ka saamaan 'Final Good' hota hai kyunki woh use khatam kar dete hain."
  },

  // ✅ QUESTION 14
 {
    question: "During the second half of the 19th century, modern industry in India initially developed in:",
    options: ["Cotton and jute textile mills", "Silk textile", "Sugar industry", "Paper industry"],
    correct: 1,
    topic: "Industrialisation in India",
    explanation:
      "British period ki shuruat mein 'Cotton' (Western India/Bombay) aur 'Jute' (Bengal) mills hi majorly setup hui thi.\n\n" +
      "Ye industries mainly Indians (Cotton) aur Britishers (Jute) ne control ki thi."
  },
  // ✅ QUESTION 15
  {
    question: "Which body coordinates all institutions in the rural financing system?",
    options: ["NABARD", "NSSO", "SEBI", "RBI"],
    correct: 1,
    topic: "Rural Development",
    explanation:
      "Gaon aur kheti ke loans ke liye ek 'Special Boss' banaya gaya hai jiska naam NABARD hai.\n\n" +
      "Yeh 1982 mein bana tha aur rural credit ka sara kaam yahi dekhta hai."
  },

  // ✅ QUESTION 16
  {
    question: "Infrastructure is divided into which two categories?",
    options: ["Primary and Secondary", "Commercial and Social", "Service and Industry", "Social and Economic"],
    correct: 4,
    topic: "Infrastructure",
    explanation:
      "Infrastructure do tarah ka hota hai: Ek jo paise kamane mein help kare (Economic - Roads, Power) aur ek jo logon ki life sudhare (Social - Schools, Hospitals)."
  },

  // ✅ QUESTION 17
  {
    question: "What is the value of the investment multiplier if MPC = MPS?",
    options: ["2", "4", "3", "1"],
    correct: 1,
    topic: "Multiplier",
    explanation:
      "MPC + MPS hamesha 1 hota hai. Agar dono barabar hain, toh dono 0.5 honge.\n\n" +
      "Multiplier ka formula hai: K = 1 / MPS.\n\n" +
      "Toh K = 1 / 0.5 = 2. Simple logic!"
  },

  // ✅ QUESTION 18
  {
    question: "Which of the following is a function of RBI?",
    options: ["Credit creation", "Accepting deposits from public", "Giving loans to public", "Banker to the government"],
    explanation:
      "RBI aam janta ka bank nahi hai, woh 'Sarkar ka Bank' hai.\n\n" +
      "Sarkar ka paisa aur accounts RBI hi manage karta hai.\n\n" +
      "Public se deal karna commercial banks (SBI, HDFC) ka kaam hai."
  },

  // ✅ QUESTION 19
  {
    question: "If MPC = 0.75 and autonomous consumption = 100, find consumption at income = 8,000.",
    options: ["7,000 crores", "6,100 crores", "6,900 crores", "7,100 crores"],
    correct: 2,
    topic: "Consumption Function",
    explanation:
      "C = 100 + 0.75(8000).\n\n" +
      "8000 ka 0.75 hota hai 6000.\n\n" +
      "Ab isme 100 (basic kharcha) jod do, toh total ho gaya 6,100 crores."
  },

  // ✅ QUESTION 20
  {
    question: "Which of the following is NOT an impact of the Green Revolution?",
    options: ["Increase in marketed surplus", "Prosperity of farmers", "Self-sufficiency in food grains", "Rise in food grain prices due to abundance"],
    correct: 4,
    topic: "Green Revolution",
    explanation:
      "Economics ka basic rule: Jab supply (abundance) badhti hai, toh prices niche jaati hain, badhti nahi.\n\n" +
      "Green Revolution se hum self-sufficient hue aur surplus market mein bechne layak anaaj paida hua."
  },
  {
    question: "Which of the following is not a function of the Central Bank?",
    options: ["Deficit financing", "Bank rate", "Open market operation", "Lender of last resort"],
    correct: 1,
    topic: "Central Bank Functions",
    explanation:
      "RBI (Central Bank) banks ko control karta hai (Bank Rate, OMO) aur unki madad karta hai (Lender of last resort).\n\n" +
      "Lekin 'Deficit Financing' sarkar ka ek tarika hai budget poora karne ka. Yeh RBI ka standard daily function nahi hai."
  },

  // ✅ QUESTION 22
  {
    question: "If tea and coffee are substitutes, an increase in the price of tea leads to:",
    options: ["Decrease in demand for coffee", "Increase in demand for coffee", "Decrease in price of coffee", "No change"],
    correct: 2,
    topic: "Substitute Goods",
    explanation:
      "Substitute goods matlab 'ek ke badle doosra'.\n\n" +
      "Agar Chai mehngi ho jayegi, toh log Chai chhod kar Coffee peene lagenge.\n\n" +
      "Is wajah se Coffee ki demand badh jayegi."
  },

  // ✅ QUESTION 23
  {
    question: "A producer plans to add ₹100 cr to stock, but sells ₹30 cr from it due to high demand. Determine Ex-ante and Ex-post Investment.",
    options: ["100 Cr, 100 Cr", "100 Cr, 70 Cr", "70 Cr, 70 Cr", "70 Cr, 100 Cr"],
    correct: 2,
    topic: "Ex-ante vs Ex-post Investment",
    explanation:
      "Ex-ante = Jo socha tha (Planned). Producer ne 100 Cr plan kiya tha.\n\n" +
      "Ex-post = Jo asliyat mein bacha (Actual). 100 mein se 30 bik gaya, toh bacha sirf 70 Cr."
  },

  // ✅ QUESTION 24
  {
    question: "What is the value of education cess levied on Union taxes by the Government of India?",
    options: ["12%", "5%", "10%", "2%"],
    correct: 4,
    topic: "Taxation",
    explanation:
      "Cess ek extra tax hota hai jo kisi maqsad ke liye liya jata hai. Education ke liye shuruat mein 2% fix kiya gaya tha."
  },

  // ✅ QUESTION 25
  {
    question: "Small-scale industries were protected by the government. Which statement is incorrect?",
    options: ["Reservation of products", "Lower bank rates", "Lower excise duty", "Partnership with large firms"],
    correct: 4,
    topic: "Industrial Policy – SSI",
    explanation:
      "Karve Committee (1955) ne SSI ko promote karne ke liye products reserve kiye aur tax benefits diye.\n\n" +
      "Large firms ke saath partnership protection ka part nahi tha balki wo competition badha sakta tha."
  },

  // ✅ QUESTION 26
  {
    question: "Which of the following is not a reason for excess demand?",
    options: ["Increase in investments", "Reduction in Taxes", "Fall in propensity to consume", "Increase in government spending"],
    correct: 3,
    topic: "Excess Demand",
    explanation:
      "Excess demand tab hoti hai jab sab kharch karne par utaru hon.\n\n" +
      "Agar logon ki 'Propensity to consume' (kharch karne ki aadat) gir jaye, toh demand kam hogi, badhegi nahi."
  },

  // ✅ QUESTION 27
  {
    question: "Which among the following is not a part of Qualitative measure of Monetary Policy?",
    options: ["Selective Credit Control", "Margin Requirement", "Moral Suasion", "Reverse Repo Rate"],
    correct: 4,
    topic: "Monetary Policy",
    explanation:
      "Quantitative tools numbers (Rates) hote hain. Qualitative tools rules hote hain.\n\n" +
      "Reverse Repo Rate ek number/rate hai, isliye yeh Quantitative measure hai."
  },

  // ✅ QUESTION 28
  {
    question: "Identify the correct order of events in India: A. Removal of quantitative restrictions, B. GST Act passed, C. Establishment of GATT, D. WTO founded",
    options: ["C, A, D, B", "B, A, D, C", "A, C, D, B", "C, D, A, B"],
    correct: 4,
    topic: "Globalisation & WTO",
    explanation:
      "GATT (1947) -> WTO (1995) -> QR Removal (2001) -> GST (2017).\n\n" +
      "World trade ke rules GATT se shuru hokar WTO tak pahuche aur India ne 2001 mein trade restrictions hataye."
  },
  // ✅ QUESTION 29
  {
    question: "In China, Commune system is related to the _________ sector.",
    options: ["Service", "Informal", "Industry", "Agriculture"],
    correct: 4,
    topic: "Comparative Development",
    explanation:
      "China mein 'Commune' ka matlab tha ki poora gaon milkar kheti karega. Yeh kheti (Agriculture) se juda hai."
  },

  // ✅ QUESTION 30
 {
    question: "Official poverty data in India is released by:",
    options: ["NSO", "NITI Aayog", "CSO", "Ministry of Social Welfare"],
    correct: 2,
    topic: "Poverty Estimation",
    explanation:
      "Pehle Planning Commission ye data deta tha, ab uska kaam NITI Aayog karta hai.\n\n" +
      "Data collect NSO (National Statistical Office) karta hai, par release aur estimate NITI Aayog ke task force ka kaam hai."
  },

  // ✅ QUESTION 31
  {
    question: "How would you suggest to control the rising Revenue Deficit?",
    options: ["Increase grants", "Increase subsidy", "Increase taxation", "Increase expenses"],
    correct: 3,
    topic: "Government Budget",
    explanation:
      "Ghaata (Deficit) kam karne ka ek hi tarika hai: Ya toh kharcha kam karo ya kamai (Tax) badhao."
  },

  // ✅ QUESTION 32
  {
    question: "Five Year Plans in India were guided by which of the following goals?:A. Modernisation, B. Equity, C. Subsidies, D. Self-Reliance, E. Growth",
    options: ["(A), (B), (C), (E) only", "(A), (C), (D), (E) only", "(B), (C), (D), (E) only", "(A), (B), (D), (E) only"],
    correct: 4,
    topic: "Goals of Plans",
    explanation:
      "India ke plans ke 4 main goals the: Growth, Modernisation, Self-Reliance aur Equity (GMSE)."
  },

  // ✅ QUESTION 33
  {
    question: "Identify the casual worker from the following:",
    options: ["Santu (farm worker)", "Raghav (restaurant owner)", "Angad (lawyer)", "Radha (nurse)"],
    correct: 1,
    topic: "Employment",
    explanation:
      "Santu ke paas apni zameen nahi hai aur woh kisi aur ke farm par kaam karta hai. Use kabhi bhi kaam se hataya ja sakta hai, isliye woh 'Casual' hai."
  },

  // ✅ QUESTION 34
  {
    question: "Raising the value of country's currency under fixed exchange rate system is:",
    options: ["Depreciation", "Devaluation", "Appreciation", "Revaluation"],
    correct: 4,
    topic: "Foreign Exchange",
    explanation:
      "Fixed rate system mein jab sarkar jaan-boojhkar currency ki value badhati hai, toh use 'Revaluation' kehte hain."
  },

  // ✅ QUESTION 35
 {
    question: "Which organisation facilitates institutions under the health sector in India?",
    options: ["Indian Commission for Medical Research", "Indian Council for Medical Research", "International Council for Medical Research", "NCERT"],
    correct: 2,
    topic: "Health Infrastructure",
    explanation:
      "Health sector mein research aur coordination ke liye ICMR (Indian Council for Medical Research) apex body hai.\n\n" +
      "Yahan 'Council' word par dhyan dena, CUET mein similar names de kar confuse karte hain."
  },

  // ✅ QUESTION 36
  {
    question: "When consumption function starts above zero on the y-axis, it indicates:",
    options: ["Saving is positive", "Consumption is zero", "Consumption is positive at zero income", "Saving is negative at positive income"],
    correct: 3,
    topic: "Consumption Function",
    explanation:
      "Insaan zero kamai par bhi kuch na kuch khata hai (Autonomous Consumption). Isliye graph zero ke upar se shuru hota hai."
  },

  // ✅ QUESTION 37
  {
    question: "Indian rupee depreciated against US dollar. The impact would be:",
    options: ["Rise in imports", "Fall in imports", "Rise in exports", "Fall in exports"],
    correct: 4, // Represents (B) and (C)
    topic: "Currency Depreciation",
    explanation:
      "Rupee girne se foreign maal mehnga ho jata hai (Imports fall) aur humara maal foreigners ke liye sasta ho jata hai (Exports rise)."
  },

  // ✅ QUESTION 38
  {
    question: "Which of the following is included in the estimation of National Income?",
    options: ["Sugar for restaurant", "Household expenditure", "Social security by employee", "Steel for car company"],
    correct: 2,
    topic: "National Income",
    explanation:
      "National Income mein sirf 'Final' kharcha judta hai. Household jo saaman kharidta hai woh final consumption hai."
  },

  // ✅ QUESTION 39
  {
    question: "The central problem 'what to produce' does not deal with:",
    options: ["Quantities", "Technique of production", "Distribution of resources", "Combination of goods"],
    correct: 2,
    topic: "Central Problems",
    explanation:
      "Production ki 'Technique' (Machine vs Labour) ka faisla 'How to Produce' mein liya jata hai, 'What' mein nahi."
  },

  // ✅ QUESTION 40
  {
    question: "Calculate GDP at Market Price for Firm A and B (Value Added).",
    options: ["₹140 Cr", "₹330 Cr", "₹170 Cr", "₹270 Cr"],
    correct: 1,
    
    topic: "Value Added Method",
    explanation:
      "Firm A: 50 + 20 - 0 = 70. Firm B: 200 - 30 - 100 = 70. Total GDP = 70 + 70 = 140 Cr."
  },
  // ✅ QUESTION 41
  {
    question: "Identify the correct statement regarding Human Capital and Human Development:",
    options: [
      "Human capital considers education as a means to increase productivity",
      "Human development is a means to an end",
      "Both are exactly the same concepts",
      "Human capital focuses on the well-being of the individual"
    ],
    correct: 1,
    topic: "Human Capital Formation",
    explanation:
      "Human Capital education ko 'Productivity' badhane ka ek investment maanta hai.\n\n" +
      "Jabki Human Development education ko insaan ka 'Fundamental Right' maanta hai, chahe usse productivity badhe ya na badhe."
  },

  // ✅ QUESTION 42
  {
    question: "The 'Great Leap Forward' (GLF) campaign was initiated in China in 1958. Its main objective was:",
    options: [
      "Massive industrialisation",
      "Privatisation of agriculture",
      "One child policy implementation",
      "Modernisation of defense"
    ],
    correct: 1,
    topic: "Comparative Development (China)",
    explanation:
      "GLF ka aim China ko agrarian economy se modern industrial economy banana tha.\n\n" +
      "Isme logo ko ghar ke 'backyards' mein furnace laga kar steel banane aur industry setup karne ke liye kaha gaya tha."
  },

  // ✅ QUESTION 43
  {
    question: "If the value of the Investment Multiplier (k) is 4, the value of MPS will be:",
    options: ["0.4", "0.25", "0.75", "1"],
    correct: 2,
    topic: "Income Determination",
    explanation:
      "Multiplier (k) aur MPS ka inverse relation hota hai.\n\n" +
      "Formula: $$k = \\frac{1}{MPS}$$\n" +
      "4 = 1/MPS => MPS = 1/4 = 0.25."
  },

  // ✅ QUESTION 44
  {
    question: "Which of the following is a 'Direct Tax' in India?",
    options: ["GST", "Customs Duty", "Corporate Tax", "Excise Duty"],
    correct: 3,
    topic: "Government Budget",
    explanation:
      "Direct Tax woh hai jiska bojh (incidence) kisi aur pe shift nahi kiya ja sakta.\n\n" +
      "Income Tax aur Corporate Tax direct hote hain. GST indirect tax hai kyunki iska bojh consumer pe shift hota hai."
  },

  // ✅ QUESTION 45
  {
    question: "Economic growth combined with 'Equity' means:",
    options: [
      "Increase in GDP only",
      "Increase in GDP + equal distribution of benefits",
      "Increase in foreign exchange reserves",
      "Complete removal of private sector"
    ],
    correct: 2,
    topic: "Five Year Plans Goals",
    explanation:
      "Planning ke 4 main goals mein se ek Equity hai.\n\n" +
      "Iska matlab hai ki growth ka fayda sirf ameero ko nahi, balki garib tabke tak bhi pahunchna chahiye (Social Justice)."
  },

  // ✅ QUESTION 46
  {
    question: "Which function of the Central Bank is responsible for maintaining the stability of the external value of currency?",
    options: [
      "Banker to the Government",
      "Custodian of Foreign Exchange Reserves",
      "Banker's Bank",
      "Currency Authority"
    ],
    correct: 2,
    topic: "Banking",
    explanation:
      "RBI foreign exchange (Dollar/Gold) ka 'Custodian' hota hai.\n\n" +
      "Wo in reserves ko manage karta hai taaki International market mein Rupee ki value stable rahe."
  },

  // ✅ QUESTION 47
  {
    question: "Assertion (A): Unemployment is a situation where people are willing to work but don't find work.\nReason (R): Disguised unemployment is mostly found in the industrial sector.",
    options: [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is not correct",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 3,
    topic: "Employment",
    explanation:
      "Assertion bilkul sahi hai. Par Reason galat hai kyunki 'Disguised Unemployment' (Chupi hui berozgari) Agriculture sector mein milti hai, Industry mein nahi."
  },

  // ✅ QUESTION 48
  {
    question: "The primary reason for the 'downward sloping' demand curve is:",
    options: [
      "Law of Diminishing Marginal Utility",
      "Law of Variable Proportions",
      "Rise in production cost",
      "Fixed Income"
    ],
    correct: 1,
    topic: "Theory of Consumer Behaviour",
    explanation:
      "Law of DMU kehta hai ki jaise-jaise consumption badhti hai, satisfaction girti hai.\n\n" +
      "Isliye consumer agla unit tabhi kharidega jab uski Price kam hogi. Isiko Law of Demand kehte hain."
  },

  // ✅ QUESTION 49
  {
    question: "Identify the 'non-tax' revenue of the government:",
    options: [
      "Income tax",
      "GST",
      "Dividends and Profits from PSUs",
      "Corporation tax"
    ],
    correct: 3,
    topic: "Government Budget",
    explanation:
      "Sarkar sirf tax se nahi kamati. Government companies (BHEL, SAIL, etc.) se milne wale profits aur fees/fines non-tax revenue hote hain."
  },

  // ✅ QUESTION 50
  {
    question: "Sustainable development is the development that meets the needs of the present without compromising the ability of future generations. This definition was given by:",
    options: [
      "Planning Commission",
      "Brundtland Commission",
      "World Bank",
      "United Nations"
    ],
    correct: 2,
    topic: "Sustainable Development",
    explanation:
      "1987 ki 'Our Common Future' report (Brundtland Report) ne hi ye famous definition di thi.\n\n" +
      "Iska focus 'Inter-generational equity' par hai."
  }
];
