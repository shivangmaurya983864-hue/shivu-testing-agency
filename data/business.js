const questions = [

  // ✅ QUESTION 1
  {
    question: "_____ is the managerial function that monitors organisational performance towards attainment of goals.",
    options: ["Planning", "Directing", "Controlling", "Organising"],
    correct: 3,
    topic: "Functions of Management – Controlling",
    explanation:
      "Controlling ka main kaam hota hai actual performance ko pehle se set kiye gaye standards ke saath compare karna. Agar performance kam ya zyada ho, to corrective action liya jaata hai."
  },

  // ✅ QUESTION 2
  {
    question: "_____ is the scientific technique through which F.W. Taylor devised the concept of assembly line.",
    options: ["Time study", "Motion study", "Method study", "Standardisation and simplification"],
    correct: 2,
    topic: "Scientific Management – Taylor",
    explanation:
      "Motion study me worker ke har movement ko analyse kiya jaata hai. F.W. Taylor ne unnecessary movements hatakar assembly line concept develop kiya, jisse productivity badhi."
  },

  // ✅ QUESTION 3
  {
    question: "Rate of saving and investment, money supply, public debt, imports and exports are components of which dimension of business environment?",
    options: ["Political", "Legal", "Economic", "Social"],
    correct: 3,
    topic: "Business Environment – Economic Dimension",
    explanation:
      "Economic environment me paisa, income, savings, investment aur inflation jaise factors shamil hote hain jo directly business decisions ko affect karte hain."
  },

  // ✅ QUESTION 4
  {
    question: "Identify the statement which does not refer to features of business environment.",
    options: ["Dynamic nature", "Innovative", "Specific and general forces", "Totality of external forces"],
    correct: 2,
    topic: "Features of Business Environment",
    explanation:
      "Business environment dynamic aur complex hota hai. 'Innovative' hona business ya entrepreneur ki quality hai, environment ka inherent feature nahi."
  },

  // ✅ QUESTION 5
  {
    question: "Mr. Raj systematically divided work among departments for smooth functioning. Identify the importance of planning highlighted.",
    options: [
      "Planning promotes innovative ideas",
      "Planning facilitates decision making",
      "Planning reduces the risk of uncertainty",
      "Planning reduces overlapping and wasteful activities"
    ],
    correct: 4,
    topic: "Planning – Importance",
    explanation:
      "Proper division of work se duplication aur confusion kam hota hai. Planning ensures ki resources waste na ho aur kaam systematic chale."
  },

  // ✅ QUESTION 6
  {
    question: "Division of work into production, purchase, marketing, accounts, etc. highlights which structure?",
    options: ["Functional structure", "Divisional structure", "Organisational structure", "Rational structure"],
    correct: 1,
    topic: "Organising – Functional Structure",
    explanation:
      "Jab kaam functions (Production, Marketing, etc.) ke basis par divide hota hai, toh use Functional structure kehte hain. Isse specialisation badhta hai."
  },

  // ✅ QUESTION 7
  {
    question: "Framework within which managerial and operational tasks are performed is called:",
    options: ["Span of management", "Delegation", "Organisational structure", "Informal organisation"],
    correct: 3,
    topic: "Organising – Organisational Structure",
    explanation:
      "Organisational structure ek aisa framework hai jo authority-responsibility relationships aur reporting levels ko define karta hai."
  },

  // ✅ QUESTION 8
  {
    question: "Vasu expected promotion but external recruitment was done, causing dissatisfaction. Identify limitation of external sources of recruitment.",
    options: [
      "Lengthy process",
      "Dissatisfaction among existing staff",
      "Danger of inbreeding",
      "Competition spirit is hampered"
    ],
    correct: 2,
    topic: "Recruitment – External Sources",
    explanation:
      "Bahar se log recruit karne par existing employees ko lagta hai unke growth opportunities kam ho gaye hain, jisse dissatisfaction paida hoti hai."
  },

  // ✅ QUESTION 9
  {
    question: "Controlling function of an organisation is:",
    options: [
      "Forward looking",
      "Backward looking",
      "Both forward and backward looking",
      "Neither forward nor backward looking"
    ],
    correct: 3,
    topic: "Controlling – Nature",
    explanation:
      "Controlling past performance ko check karta hai (Backward) aur future improvements suggest karta hai (Forward)."
  },

  // ✅ QUESTION 10
  {
    question: "Defective bulbs beyond permissible limit are reported to supervisor. Identify the concept highlighted.",
    options: ["Controlling", "Key result areas", "Control by exception", "Planning"],
    correct: 3,
    topic: "Controlling – Control by Exception",
    explanation:
      "Control by exception (Management by Exception) kehta hai ki sirf wahi deviations report karni chahiye jo significant ya critical limits ke bahar hon."
  },

  // ✅ QUESTION 11
  {
    question: "Which of the following is not a limitation of controlling?",
    options: [
      "Difficulty in setting quantitative standards",
      "Resistance from employees",
      "Costly affair",
      "Planning"
    ],
    correct: 4,
    topic: "Controlling – Limitations",
    explanation:
      "Planning controlling ka ek function hai, limitation nahi. Baaki teen options (Difficulty in standards, Resistance, Cost) controlling ki limitations hain."
  },

  // ✅ QUESTION 12
  {
    question: "Setting quantitative standards to match performance relates to which function?",
    options: ["Controlling", "Staffing", "Directing", "Organising"],
    correct: 1,
    topic: "Controlling – Process",
    explanation:
      "Controlling process ka sabse pehla step 'Setting performance standards' hota hai, jiske basis par evaluation kiya jata hai."
  },

  // ✅ QUESTION 13
  {
    question: "Cost incurred to raise funds through equity is called:",
    options: ["Floatation cost", "Financial risk", "Cost of debt", "Cost of capital"],
    correct: 1,
    topic: "Financial Management – Floatation Cost",
    explanation:
      "Naye shares ya debentures issue karte waqt jo kharche (Brokerage, Underwriting, Ads) hote hain, unhe floatation cost kehte hain."
  },

  // ✅ QUESTION 14
  {
    question: "A trading organisation needs _____ investment in fixed assets compared to manufacturing concern.",
    options: ["Larger", "Lesser", "Moderate", "Negligible"],
    correct: 2,
    topic: "Fixed Capital",
    explanation:
      "Trading firms sirf goods buy/sell karti hain, unhe heavy machinery ya factories ki zarurat nahi hoti, isliye unhe kam fixed capital chahiye."
  },

  // ✅ QUESTION 15
  {
    question: "Rajat plans breakup of finance to purchase fixed and current assets. Identify the decision.",
    options: ["Financial decision", "Dividend decision", "Capital structure", "Investment decision"],
    correct: 4,
    topic: "Investment Decision",
    explanation:
      "Ye decide karna ki paisa kin assets (Fixed or Current) me lagega, Investment Decision (Capital Budgeting) kehlata hai."
  },

  // ✅ QUESTION 16
  {
    question: "Debt normally does not cause:",
    options: [
      "Dilution of control",
      "Dilution of flexibility",
      "Dilution of equity",
      "Dilution of cost"
    ],
    correct: 1,
    topic: "Capital Structure – Debt",
    explanation:
      "Debenture holders ya lenders ke paas voting rights nahi hote, isliye debt lene se management ka control dilute nahi hota."
  },

  // ✅ QUESTION 17
  {
    question: "Offer to existing shareholders to buy new shares in proportion is called:",
    options: ["Private placement", "Offer for sale", "Offer through prospectus", "Right issue"],
    correct: 4,
    topic: "Issue of Shares – Right Issue",
    explanation:
      "Jab company existing shareholders ko unki current holding ke ratio me naye shares offer karti hai, toh use 'Right Issue' kehte hain."
  },

  // ✅ QUESTION 18
  {
    question: "Beneficial owner account with depository participant is known as:",
    options: ["Securities account", "Demat account", "Share owner account", "Securities owner account"],
    correct: 2,
    topic: "Stock Market – Demat Account",
    explanation:
      "Shares ko electronic/paperless form me hold karne ke liye jo account khulwaya jata hai use Demat (Dematerialized) account kehte hain."
  },

  // ✅ QUESTION 19
  {
    question: "Who cannot file a complaint under Consumer Protection Act, 2019?",
    options: [
      "Registered consumer association",
      "Central/State Government",
      "Consumer for commercial purpose",
      "Group of consumers"
    ],
    correct: 3,
    topic: "Consumer Protection Act, 2019",
    explanation:
      "Agar koi vyakti 're-sale' ya 'commercial purpose' ke liye saman kharidta hai, toh use Consumer Protection Act ke tahat 'Consumer' nahi mana jata."
  },

  // ✅ QUESTION 20
  {
    question: "Shopkeeper forces Mohini to buy a particular brand. Which right is violated?",
    options: [
      "Right to be informed",
      "Right to safety",
      "Right to choose",
      "Right to be heard"
    ],
    correct: 3,
    topic: "Consumer Rights – Right to Choose",
    explanation:
      "Har consumer ke paas variety of products me se apni pasand ka product select karne ka haq hai. Force karna is right ka violation hai."
  },

  // ✅ QUESTION 21
  {
    question: "ISI mark is found on:",
    options: ["Spices", "Jewellery", "Woollen clothes", "Electric goods"],
    correct: 4,
    topic: "Consumer Protection – Quality Marks",
    explanation:
      "ISI mark electrical items aur industrial products ki quality aur safety ensure karne ke liye use hota hai."
  },

  // ✅ QUESTION 22
  {
    question: "Availability of technology to convert idea into product is called:",
    options: ["Economic feasibility", "Financial feasibility", "Technical feasibility", "Social feasibility"],
    correct: 3,
    topic: "Entrepreneurship – Feasibility Analysis",
    explanation:
      "Technical feasibility me check kiya jata hai ki kya product banane ke liye zaroori technology, raw material aur labour available hai."
  },

  // ✅ QUESTION 23
  {
    question: "Too much advertising makes it difficult to hear message. It affects _____ of advertising.",
    options: ["Preference", "Effectiveness", "Criticism", "Reach"],
    correct: 2,
    topic: "Advertising – Limitations",
    explanation:
      "Ad clutter (bahut saari ads) ki wajah se consumer main message bhool jata hai, jisse advertising ki 'Effectiveness' kam ho jati hai."
  },

  // ✅ QUESTION 24
  {
    question: "Part of brand which can be recognised but not uttered is:",
    options: ["Brand name", "Brand mark", "Trademark", "Patent"],
    correct: 2,
    topic: "Branding",
    explanation:
      "Brand mark (Logo/Symbol) ko dekha ja sakta hai par bola nahi ja sakta. Jo bola ja sakta hai wo Brand Name hota hai."
  },

  // ✅ QUESTION 25
  {
    question: "Which is not true about objections to advertising?",
    options: ["Confuses buyers", "Undermines social values", "Economical mode of communication", "Promotes materialism"],
    correct: 3,
    topic: "Advertising – Objections",
    explanation:
      "Advertising ko costly aur wasteful mana jata hai. 'Economical mode' hona iska objection nahi balki iska feature/advantage ho sakta hai."
  },

  // ✅ QUESTION 26
  {
    question: "Using religious norms to improve tax compliance relates to which dimension?",
    options: ["Economic", "Social", "Technological", "Political"],
    correct: 2,
    topic: "Business Environment – Social Dimension",
    explanation:
      "Dharmik vishwas (Religious norms) aur society ke values 'Social Environment' ka part hote hain."
  },

  // ✅ QUESTION 27
  {
    question: "Correct sequence of planning process:",
    options: [
      "A, D, C, E, B",
      "A, B, C, E, D",
      "D, A, C, B, E",
      "C, B, A, D, E"
    ],
    correct: 1,
    topic: "Planning Process",
    explanation:
      "Sahi order: Setting objectives -> Developing premises -> Identifying alternatives -> Evaluating -> Selecting -> Implementation -> Follow-up."
  },

  // ✅ QUESTION 28
  {
    question: "Correct sequence of organising process:",
    options: [
      "C, D, A, B",
      "D, C, B, A",
      "A, C, B, D",
      "B, D, C, A"
    ],
    correct: 1,
    topic: "Organising Process",
    explanation:
      "Identification of work -> Departmentalization -> Assignment of duties -> Establishing reporting relationships."
  },

  // ✅ QUESTION 29
  {
    question: "Correct sequence of staffing process:",
    options: [
      "D, B, C, E, A",
      "D, B, E, C, A",
      "D, E, C, A, B",
      "E, D, B, C, A"
    ],
    correct: 4,
    topic: "Staffing Process",
    explanation:
      "Staffing me sequence wise activities: Estimating manpower -> Recruitment -> Selection -> Placement -> Training."
  },

  // ✅ QUESTION 30
  {
    question: "Correct sequence of staffing steps:",
    options: [
      "A, B, C, D, E",
      "B, A, D, E, C",
      "C, B, A, D, E",
      "E, A, C, D, B"
    ],
    correct: 3,
    topic: "Staffing – Development",
    explanation:
      "Placement and Orientation ke baad Training, phir Performance Appraisal aur Compensation decide hota hai."
  },

  // ✅ QUESTION 31
  {
    question: "Statements related to limitations of planning are:",
    options: ["A, B, C, D", "A, C, D", "B, C, D, E", "A, C, D, E"],
    correct: 2,
    topic: "Planning – Limitations",
    explanation:
      "Planning rigidity lata hai, huge cost involve karta hai aur dynamic environment me fail ho sakta hai. Ye iski main limitations hain."
  },

  // ✅ QUESTION 32
  {
    question: "Capital market consists of:",
    options: ["A, C, E", "A, B, C", "A, D, E", "C, D, E"],
    correct: 2,
    topic: "Financial Market – Capital Market",
    explanation:
      "Capital market me Stock Exchange, Development Banks aur Commercial Banks shamil hote hain long-term funds ke liye."
  },

  // ✅ QUESTION 33
  {
    question: "External sources of recruitment are:",
    options: ["A, C, D", "A, B, C", "B, C, D", "A and C"],
    correct: 1,
    topic: "Recruitment – Sources",
    explanation:
      "Campus recruitment, Advertising aur Employment exchanges external sources hain. Transfer aur Promotion internal sources hote hain."
  },

  // ✅ QUESTION 34
  {
    question: "Correct statements about SEBI:",
    options: ["A, C, E", "A, B, D", "A and E", "B, C, D"],
    correct: 3,
    topic: "SEBI",
    explanation:
      "SEBI ek statutory regulatory body hai (Act passed in 1992) jo investors ko protect karti hai."
  },

  // ✅ QUESTION 35
  {
    question: "Drawbacks of external recruitment:",
    options: ["B, C, E", "B, C, D", "A, B, C", "B, D, E"],
    correct: 2,
    topic: "Recruitment – External Sources",
    explanation:
      "External recruitment costly hai, lamba process hai aur existing staff ka morale down karta hai (Dissatisfaction)."
  },

  // ✅ QUESTION 36
  {
    question: "Match List I with List II (Fayol’s principles).",
    options: [
      "A–II, B–I, C–IV, D–III",
      "A–II, B–III, C–IV, D–I",
      "A–II, B–IV, C–I, D–III",
      "A–III, B–II, C–I, D–IV"
    ],
    correct: 1,
    topic: "Principles of Management – Fayol",
    explanation:
      "Matching Fayol's principles like Unity of Command (One boss) and Division of Work with their respective definitions."
  },

  // ✅ QUESTION 37
  {
    question: "Match steps of controlling with techniques.",
    options: [
      "A–I, B–III, C–II, D–IV",
      "A–II, B–I, C–IV, D–III",
      "A–IV, B–I, C–II, D–III",
      "A–III, B–II, C–I, D–IV"
    ],
    correct: 1,
    topic: "Controlling Process",
    explanation:
      "Setting standards, measurement of performance, comparison and taking corrective actions are the core steps."
  },

  // ✅ QUESTION 38
  {
    question: "Match Acts with their objectives.",
    options: [
      "A–I, B–II, C–III, D–IV",
      "A–II, B–I, C–III, D–IV",
      "A–III, B–IV, C–I, D–II",
      "A–IV, B–III, C–II, D–I"
    ],
    correct: 1,
    topic: "Business Laws",
    explanation:
      "Correctly matching acts like Consumer Protection Act, Companies Act, and SEBI Act with their respective focus areas."
  },

  // ✅ QUESTION 39
  {
    question: "Match Taylor’s techniques with statements.",
    options: [
      "A–I, B–III, C–II, D–IV",
      "A–IV, B–I, C–II, D–III",
      "A–III, B–II, C–IV, D–I",
      "A–II, B–III, C–I, D–IV"
    ],
    correct: 1,
    topic: "Scientific Management – Taylor",
    explanation:
      "Matching Taylor's Scientific techniques like Functional Foremanship, Standardisation, and Time Study."
  },

  // ✅ QUESTION 40
  {
    question: "Match markets with statements.",
    options: [
      "A–II, B–IV, C–III, D–I",
      "A–II, B–III, C–I, D–IV",
      "A–III, B–IV, C–I, D–II",
      "A–IV, B–III, C–II, D–I"
    ],
    correct: 1,
    topic: "Financial Markets",
    explanation:
      "Matching Money Market (Short term) and Capital Market (Long term) instruments and features."
  },

  // ✅ QUESTION 41
  {
    question: "Mr. Murthy working level of management is:",
    options: ["Top level", "Middle level", "Lower level", "Operational level"],
    correct: 4,
    topic: "Levels of Management",
    explanation:
      "Supervisors aur Operational managers directly workers se deal karte hain, isliye inhe Lower/Operational level kehte hain."
  },

  // ✅ QUESTION 42
  {
    question: "Quality of leader shown by grabbing opportunities and leading by example:",
    options: ["Integrity", "Knowledge", "Initiative", "Motivation skill"],
    correct: 3,
    topic: "Leadership Qualities",
    explanation:
      "Initiative ka matlab hai mauka milte hi action lena aur dusron ko inspire karne ke liye aage badhna."
  },

  // ✅ QUESTION 43
  {
    question: "Ensuring hiring of competent people relates to which function?",
    options: ["Planning", "Organising", "Staffing", "Controlling"],
    correct: 3,
    topic: "Staffing",
    explanation:
      "Staffing is all about putting the right people on the right jobs. Isme selection aur recruitment main kaam hota hai."
  },

  // ✅ QUESTION 44
  {
    question: "Training, defined jobs and feedback relate to which step?",
    options: ["Selection", "Implementing plan", "Performance appraisal", "Taking corrective action"],
    correct: 2,
    topic: "Implementation of Plan",
    explanation:
      "Plan ko execute karne ke liye zaroori skills (Training) aur roles (Jobs) define karna execution ka part hai."
  },

  // ✅ QUESTION 45
  {
    question: "Ways to know reactions of employees highlight which element of communication?",
    options: ["Sender", "Media", "Encoding", "Feedback"],
    correct: 4,
    topic: "Communication Process",
    explanation:
      "Feedback wo element hai jisse sender ko pata chalta hai ki receiver ne message ko kis tarah react kiya ya samjha."
  },

  // ✅ QUESTION 46
  {
    question: "Employees offered shares at lower price is which incentive?",
    options: [
      "Profit sharing",
      "Co-partnership / stock option",
      "Productivity linked wage",
      "Perquisites"
    ],
    correct: 2,
    topic: "Incentives – Financial",
    explanation:
      "Co-partnership (ESOP) me company apne employees ko saste daam par shares deti hai taaki wo company ke owner jaisa feel karein."
  },

  // ✅ QUESTION 47
  {
    question: "Individual autonomy and rewards satisfy which need?",
    options: [
      "Safety need",
      "Belongingness need",
      "Esteem need",
      "Self-actualisation need"
    ],
    correct: 3,
    topic: "Motivation – Maslow",
    explanation:
      "Self-respect, recognition aur autonomy 'Esteem Needs' ke andar aati hain."
  },

  // ✅ QUESTION 48
  {
    question: "All communication must be recorded and filed. Type of communication is:",
    options: ["Lateral", "Informal", "Grapevine", "Formal"],
    correct: 4,
    topic: "Formal Communication",
    explanation:
      "Formal communication usually written hota hai aur as an official record company me file kiya jata hai."
  },

  // ✅ QUESTION 49
  {
    question: "Non-financial incentive highlighted by autonomy and rewards is:",
    options: ["Status", "Organisational climate", "Employee recognition", "Career advancement"],
    correct: 3,
    topic: "Non-Financial Incentives",
    explanation:
      "Employee Recognition programs me workers ko unki achievements ke liye rewards aur appreciation milta hai."
  },

  // ✅ QUESTION 50
  {
    question: "Skill possessed by Mr. Murthy by motivating employees is:",
    options: ["Communication skill", "Motivation skill", "Self confidence", "Integrity"],
    correct: 2,
    topic: "Leadership Skills",
    explanation:
      "Ek achhe leader me dusron ko motivate aur inspire karne ki skill (Motivation skill) honi zaroori hai."
  }
];
