const questions = [
  // ✅ QUESTION 1
  {
    question: "_______ is the managerial function that monitors organisational performance towards attainment of goals.",
    options: ["Planning", "Directing", "Staffing", "Controlling"],
    correct: 3,
    topic: "Functions of Management – Controlling",
    explanation:
      "Controlling actual performance ko standards se compare karta hai.\n\n" +
      "Agar koi galti (deviation) milti hai, toh use theek karta hai.\n\n" +
      "Iska maqsad yeh ensure karna hai ki organisation apne goals ki taraf sahi ja rahi hai."
  },

  // ✅ QUESTION 2
  {
    question: "Which scientific technique helped F.W. Taylor develop the concept of assembly line?",
    options: ["Time study", "Motion study", "Method study", "Standardisation"],
    correct: 1,
    topic: "Scientific Management – Techniques",
    explanation:
      "Motion study mein workers ki movements ko closely dekha jata hai taaki faltu ki mehnat khatam ho sake.\n\n" +
      "Isi technique se Taylor ne 'Assembly Line' ka concept nikala jahan kaam ek flow mein chalta hai."
  },

  // ✅ QUESTION 3
  {
    question: "Rate of saving, money supply, public debt, imports and exports are components of which business environment dimension?",
    options: ["Political", "Social", "Economic", "Legal"],
    correct: 2,
    topic: "Business Environment",
    explanation:
      "Economic environment mein wo saare factors aate hain jo desh ki economy aur paise se jude hote hain.\n\n" +
      "Saving rate, inflation, aur money supply directly business ki demand aur growth ko affect karte hain."
  },

  // ✅ QUESTION 4
  {
    question: "Which of the following does NOT represent a feature of business environment?",
    options: ["Dynamic nature", "Specific and general forces", "Totality of external forces", "Innovative"],
    correct: 3,
    topic: "Business Environment – Features",
    explanation:
      "Business environment hamesha badalta rehta hai (Dynamic) aur isme bahar ki forces hoti hain.\n\n" +
      "Lekin 'Innovative' hona ek company ki quality ho sakti hai, yeh environment ka feature nahi hai."
  },

  // ✅ QUESTION 5
  {
    question: "Systematic division of work to ensure clarity and smooth functioning highlights which importance of planning?",
    options: ["Planning reduces uncertainty", "Planning facilitates coordination", "Planning promotes creativity", "Planning ensures economy"],
    correct: 1,
    topic: "Planning – Importance",
    explanation:
      "Jab hum pehle se plan karte hain ki kaun kya karega, toh departments ke beech confusion nahi hota.\n\n" +
      "Isse coordination baithana asaan ho jata hai aur kaam bina ruke chalta hai."
  },

  // ✅ QUESTION 6
  {
    question: "Division of work into production, purchase, marketing and accounts reflects which structure?",
    options: ["Divisional structure", "Functional structure", "Informal structure", "Project structure"],
    correct: 1,
    topic: "Organising – Organisational Structure",
    explanation:
      "Jab kaam ko uske nature (functions) ke hisaab se baanta jata hai, toh use Functional Structure kehte hain.\n\n" +
      "Jaise saara marketing ka kaam ek department mein, production ka ek mein. Isse specialisation aati hai."
  },

  // ✅ QUESTION 7
  {
    question: "Framework within which managerial and operational tasks are performed is called:",
    options: ["Delegation", "Span of management", "Organisational structure", "Informal organisation"],
    correct: 2,
    topic: "Organising",
    explanation:
      "Organisational structure ek aisa dhancha (framework) hai jo batata hai ki kaun kiska boss hai aur kaun kya kaam karega.\n\n" +
      "Isi ke andar saara managerial kaam hota hai."
  },

  // ✅ QUESTION 8
  {
    question: "External recruitment leading to frustration among existing employees highlights which limitation?",
    options: ["Costly process", "Lengthy process", "Dissatisfaction among staff", "Lack of innovation"],
    correct: 2,
    topic: "Staffing – Recruitment",
    explanation:
      "Agar company hamesha bahar se naye log bharti karegi, toh purane employees ko lagega ki unka promotion nahi hoga.\n\n" +
      "Isse unka morale gir jata hai aur wo kaam se dissatisfied ho jate hain."
  },

  // ✅ QUESTION 9
  {
    question: "Controlling function of an organisation is:",
    options: ["Forward looking", "Backward looking", "Both forward and backward looking", "Neither"],
    correct: 2,
    topic: "Controlling",
    explanation:
      "Controlling backward looking hai kyunki hum purani performance check karte hain.\n\n" +
      "Yeh forward looking bhi hai kyunki hum aage ke liye sudhaar (corrective action) karte hain."
  },

  // ✅ QUESTION 10
  {
    question: "Deviation beyond permissible limit being reported to supervisor refers to:",
    options: ["Controlling", "Control by exception", "Key result areas", "Planning"],
    correct: 1,
    topic: "Controlling – Techniques",
    explanation:
      "Manager ko har chhoti galti mein dimaag nahi lagana chahiye.\n\n" +
      "Sirf wahi galtiyan report honi chahiye jo limit se bahar hon. Ise 'Control by Exception' kehte hain."
  },

  // ✅ QUESTION 11
  {
    question: "Which is NOT a limitation of controlling?",
    options: ["Resistance from employees", "Costly affair", "Difficulty in setting standards", "Planning"],
    correct: 3,
    topic: "Controlling – Limitations",
    explanation:
      "Planning management ka pehla function hai, controlling ki koi kami (limitation) nahi hai.\n\n" +
      "Baki options batate hain ki controlling kyun mushkil ya mehngi ho sakti hai."
  },

  // ✅ QUESTION 12
  {
    question: "Setting quantitative standards to compare performance relates to which function?",
    options: ["Planning", "Staffing", "Directing", "Controlling"],
    correct: 3,
    topic: "Controlling Process",
    explanation:
      "Controlling tabhi ho sakti hai jab hamare paas koi 'Number' ya 'Standard' ho check karne ke liye.\n\n" +
      "Isliye standards set karna controlling process ka sabse pehla aur zaroori step hai."
  },

  // ✅ QUESTION 13
  {
    question: "Cost of raising funds through equity is known as:",
    options: ["Cost of debt", "Financial risk", "Cost of capital", "Floatation cost"],
    correct: 3,
    topic: "Financial Management",
    explanation:
      "Naye shares ya debentures issue karte waqt jo kharcha hota hai (brokerage, printing, legal fees), use Floatation Cost kehte hain.\n\n" +
      "Fund raise karne se pehle company is kharche ka dhyan rakhti hai."
  },

  // ✅ QUESTION 14
  {
    question: "Trade organisations require ______ investment in fixed assets compared to manufacturing firms.",
    options: ["Higher", "Moderate", "Lesser", "Negligible"],
    correct: 2,
    topic: "Business Activities",
    explanation:
      "Trading business sirf maal kharidta aur bechta hai, use badi factory ya machinery ki zaroorat nahi hoti.\n\n" +
      "Isliye unka fixed capital investment manufacturing companies se kam hota hai."
  },

  // ✅ QUESTION 15
  {
    question: "Decision regarding purchase of fixed and current assets is called:",
    options: ["Financing decision", "Dividend decision", "Investment decision", "Capital structure decision"],
    correct: 2,
    topic: "Financial Management",
    explanation:
      "Paisa kahan lagana hai (assets kharidne mein), ise Investment Decision kehte hain.\n\n" +
      "Iska asar company ki long-term profitability aur growth par padta hai."
  },

  // ✅ QUESTION 16
  {
    question: "Debt does NOT cause:",
    options: ["Dilution of control", "Dilution of equity", "Dilution of flexibility", "Increase in risk"],
    correct: 0,
    topic: "Capital Structure",
    explanation:
      "Karz (Debt) lene se company ka control nahi khota kyunki debenture holders ke paas voting rights nahi hote.\n\n" +
      "Sirf naye shares bechne se control dilute hota hai."
  },

  // ✅ QUESTION 17
  {
    question: "Offering shares to existing shareholders proportionately is called:",
    options: ["Private placement", "Right issue", "Offer for sale", "Prospectus issue"],
    correct: 1,
    topic: "Share Capital",
    explanation:
      "Jab company apne maujuda shareholders ko naye shares kharidne ka pehla mauka deti hai, toh use Right Issue kehte hain.\n\n" +
      "Isse purane shareholders ki holding percentage kam nahi hoti."
  },

  // ✅ QUESTION 18
  {
    question: "Beneficial owner account with depository participant is known as:",
    options: ["Securities account", "Shareholder account", "Demat account", "Trading account"],
    correct: 2,
    topic: "Stock Market",
    explanation:
      "Shares ko electronic form mein rakhne ke liye 'Demat Account' ki zaroorat hoti hai.\n\n" +
      "Jaise paise ke liye bank account hota hai, waise hi shares ke liye Demat account hota hai."
  },

  // ✅ QUESTION 19
  {
    question: "Who cannot file complaint under Consumer Protection Act 2019?",
    options: ["Consumer association", "Central government", "State government", "Individual consumer"],
    correct: 1,
    topic: "Consumer Protection",
    explanation:
      "Consumer Act ke mutabik consumer, group of consumers ya state govt complaint kar sakte hain.\n\n" +
      "Central Government khud complainant nahi banti, balki wo rules banati hai."
  },

  // ✅ QUESTION 20
  {
    question: "Forcing consumer to buy a particular brand violates which right?",
    options: ["Right to safety", "Right to be heard", "Right to choose", "Right to information"],
    correct: 2,
    topic: "Consumer Rights",
    explanation:
      "Har consumer ke paas yeh haq hai ki wo market mein available varieties mein se apni pasand ka product chune.\n\n" +
      "Agar use force kiya jaye, toh uske 'Right to Choose' ka hannan hota hai."
  },

  // ✅ QUESTION 21
  {
    question: "ISI mark is found on:",
    options: ["Spices", "Jewellery", "Woollen clothes", "Electric goods"],
    correct: 3,
    topic: "Consumer Protection – Standardisation",
    explanation:
      "ISI mark quality aur safety ka nishaan hai, jo khaas kar electronic saaman par dekha jata hai.\n\n" +
      "Spices ke liye Agmark aur Jewellery ke liye Hallmark hota hai."
  },

  // ✅ QUESTION 22
  {
    question: "Availability of technology to convert idea into product is known as:",
    options: ["Economic feasibility", "Financial feasibility", "Technical feasibility", "Social feasibility"],
    correct: 2,
    topic: "Entrepreneurship – Feasibility Analysis",
    explanation:
      "Technical feasibility check karti hai ki kya hamare paas wo technology ya machine hai jis se hum product bana sakein.\n\n" +
      "Agar technology hi nahi hai, toh idea flop ho jayega."
  },

  // ✅ QUESTION 23
  {
    question: "Difficulty in making advertising messages heard due to excessive advertisements affects which aspect?",
    options: ["Preference", "Effectiveness", "Criticism", "Brand loyalty"],
    correct: 1,
    topic: "Marketing – Advertising",
    explanation:
      "Jab TV ya phone par bahut saare ads ek saath aate hain (Clutter), toh log kisi par dhyan nahi dete.\n\n" +
      "Is se advertisement ki effectiveness kam ho jati hai."
  },

  // ✅ QUESTION 24
  {
    question: "The part of a brand which can be recognised but cannot be spoken is called:",
    options: ["Brand name", "Brand mark", "Trademark", "Patent"],
    correct: 1,
    topic: "Marketing – Branding",
    explanation:
      "Brand mark ek logo ya design hota hai (jaise Nike ka tick). Hum use dekh kar pehchan toh sakte hain, par bol nahi sakte.\n\n" +
      "Jo cheez boli ja sake, wo Brand Name hoti hai."
  },

  // ✅ QUESTION 25
  {
    question: "Which statement is NOT true about objections to advertising?",
    options: ["Advertisements confuse buyers", "Advertising is economical", "Advertising promotes materialism", "Ads undermine social values"],
    correct: 1,
    topic: "Marketing – Criticism of Advertising",
    explanation:
      "Advertising bahut mehngi hoti hai, isliye ise 'Economical' kehna galat hai.\n\n" +
      "Critics kehte hain ki iska kharcha customer ki pocket se hi jata hai."
  },

  // ✅ QUESTION 26
  {
    question: "Psychological and religious norms influencing tax compliance relate to which business environment dimension?",
    options: ["Economic", "Social", "Technological", "Legal"],
    correct: 1,
    topic: "Business Environment – Social Dimension",
    explanation:
      "Logon ke vishwas, dharam aur samajik soch Social Environment ka hissa hote hain.\n\n" +
      "Agar koi dharam ya samajik parampara tax dene ya na dene ko affect karti hai, toh wo Social factor hai."
  },

  // ✅ QUESTION 27
  {
    question: "Correct sequence of planning process is:",
    options: [
      "Developing premises → Identifying alternatives → Evaluating → Selecting → Follow-up",
      "Identifying alternatives → Developing premises → Evaluating → Selecting → Follow-up",
      "Evaluating → Selecting → Developing premises → Follow-up",
      "Selecting → Evaluating → Identifying alternatives → Follow-up"
    ],
    correct: 0,
    topic: "Planning – Process",
    explanation:
      "Planning hamesha premises (assumptions) banane se shuru hoti hai, phir alternatives dhundhe jate hain, unhe check kiya jata hai aur best ko select karke follow-up kiya jata hai."
  },

  // ✅ QUESTION 28
  {
    question: "Correct sequence of organising process is:",
    options: [
      "Departmentalisation → Division of work → Reporting relationships → Assignment of duties",
      "Division of work → Departmentalisation → Assignment → Reporting",
      "Reporting → Assignment → Departmentalisation → Division",
      "Assignment → Division → Departmentalisation → Reporting"
    ],
    correct: 1,
    topic: "Organising – Process",
    explanation:
      "Organising mein pehle kaam ko chhote hisson mein baant te hain (Division), phir group banate hain (Departments), phir duties dete hain aur end mein boss-subordinate relation fix karte hain."
  },

  // ✅ QUESTION 29
  {
    question: "Correct sequence of staffing process is:",
    options: [
      "Estimation → Recruitment → Selection → Placement → Training",
      "Recruitment → Selection → Training → Estimation → Placement",
      "Selection → Recruitment → Training → Placement",
      "Training → Recruitment → Selection → Placement"
    ],
    correct: 0,
    topic: "Staffing – Process",
    explanation:
      "Staffing mein pehle dekhte hain kitne log chahiye (Estimation), phir unhe invite karte hain (Recruitment), best ko chunte hain (Selection) aur phir unhe training dete hain."
  },

  // ✅ QUESTION 30
  {
    question: "Arrange steps of staffing in correct order:",
    options: [
      "Performance appraisal → Training → Placement → Promotion → Compensation",
      "Training → Performance appraisal → Placement → Compensation",
      "Placement → Training → Compensation → Promotion → Appraisal",
      "Performance appraisal → Training → Placement → Compensation → Promotion"
    ],
    correct: 3,
    topic: "Staffing – Elements",
    explanation:
      "Placement ke baad kaam ko check kiya jata hai (Appraisal), phir zaroorat padne par training aur promotion/paisa decide hota hai."
  },

  // ✅ QUESTION 31
  {
    question: "Which statements represent limitations of planning?",
    options: ["Planning leads to rigidity", "Planning reduces creativity", "Planning does not guarantee success", "All of the above"],
    correct: 3,
    topic: "Planning – Limitations",
    explanation:
      "Planning se kaam rigid ho jata hai (badla nahi ja sakta asani se), creativity kam ho sakti hai aur bahar ke badlavo ki wajah se success ki guarantee nahi rehti."
  },

  // ✅ QUESTION 32
  {
    question: "Capital market consists of:",
    options: ["Development banks", "Financial institutions", "Stock exchange", "All of the above"],
    correct: 3,
    topic: "Financial Market – Capital Market",
    explanation:
      "Capital market long-term fundings ke liye hota hai. Isme bank, financial institutions aur stock exchange sab shamil hote hain."
  },

  // ✅ QUESTION 33
  {
    question: "Which are external sources of recruitment?",
    options: ["Direct recruitment", "Transfer", "Casual callers", "Both A and C"],
    correct: 3,
    topic: "Staffing – Recruitment",
    explanation:
      "Transfer ek internal source hai kyunki banda company ke andar hi rehta hai.\n\n" +
      "Direct recruitment aur Casual callers bahar se naye log laane ke tarike hain."
  },

  // ✅ QUESTION 34
  {
    question: "Correct statements about SEBI are:",
    options: ["Established in 1988", "Governs securities market", "Protects investors", "All of the above"],
    correct: 3,
    topic: "Financial Market – SEBI",
    explanation:
      "SEBI ko 1988 mein banaya gaya tha taaki wo shares market ke rules banaye aur aam investors ko dhokhadhadi se bachaye."
  },

  // ✅ QUESTION 35
  {
    question: "Drawbacks of external recruitment include:",
    options: ["Dissatisfaction among staff", "Lengthy process", "Costly process", "All of the above"],
    correct: 3,
    topic: "Staffing – Recruitment",
    explanation:
      "Bahar se log lana mehnga hota hai (Ads ke paise), time consuming hota hai aur purane staff ko bura lag sakta hai."
  },

  // ✅ QUESTION 36
  {
    question: "People and material at suitable place and time refers to which principle?",
    options: ["Esprit de corps", "Order", "Stability of tenure", "Discipline"],
    correct: 1,
    topic: "Principles of Management – Fayol",
    explanation:
      "Principle of Order kehta hai ki har cheez aur har insaan ki ek sahi jagah honi chahiye taaki unhe dhundhne mein waqt barbaad na ho."
  },

  // ✅ QUESTION 37
  {
    question: "Dividend payout restricted by Companies Act reflects which factor?",
    options: ["Taxation policy", "Legal constraints", "Contractual constraints", "Stock market reaction"],
    correct: 1,
    topic: "Financial Management – Dividend Decision",
    explanation:
      "Companies Act ek kanoon hai. Agar kanoon koi limit lagata hai, toh use 'Legal Constraint' kaha jata hai jise company ko manna hi padta hai."
  },

  // ✅ QUESTION 38
  {
    question: "Bullish stock market favours which instrument?",
    options: ["Preference shares", "Debentures", "Equity shares", "Bonds"],
    correct: 2,
    topic: "Capital Market",
    explanation:
      "Bullish market matlab jab prices badh rahe hon. Aise mein investors risk lena chahte hain aur Equity Shares mein paisa lagana pasand karte hain."
  },

  // ✅ QUESTION 39
  {
    question: "Capital budgeting decision is important because:",
    options: ["Large funds involved", "Long-term growth", "Irreversible decisions", "All of the above"],
    correct: 3,
    topic: "Financial Management – Capital Budgeting",
    explanation:
      "Capital budgeting (badi machinery ya building mein invest karna) bahut risky hai kyunki isme bahut zyada paisa lagta hai aur ise badla nahi ja sakta."
  },

  // ✅ QUESTION 40
  {
    question: "Financial leverage is favourable when:",
    options: ["ROI > Cost of debt", "ROI < Cost of debt", "Debt > Equity", "Equity > Debt"],
    correct: 0,
    topic: "Financial Management – Leverage",
    explanation:
      "Leverage ka fayda tabhi hai jab company apne karz ke interest se zyada munaafa (ROI) kama rahi ho.\n\n" +
      "Is se shareholders ki kamai badh jati hai."
  },

  // ✅ QUESTION 41
  {
    question: "Buying new machine to replace old one is:",
    options: ["Financing decision", "Dividend decision", "Investment decision", "Working capital decision"],
    correct: 2,
    topic: "Financial Management",
    explanation:
      "Nayi machinery kharidna ek long-term asset mein paisa lagana hai, isliye ise Investment Decision kehte hain."
  },

  // ✅ QUESTION 42
  {
    question: "Function of marketing that protects against delay in delivery is:",
    options: ["Promotion", "Transportation", "Warehousing", "Market information"],
    correct: 2,
    topic: "Marketing – Functions",
    explanation:
      "Warehousing (Godown) mein maal pehle se store hota hai, taaki agar production ya transport mein deri ho, toh wahan se turant supply ki ja sake."
  },

  // ✅ QUESTION 43
  {
    question: "Which is NOT a function of packaging?",
    options: ["Product identification", "Product protection", "Product storage", "Grading"],
    correct: 3,
    topic: "Marketing – Packaging",
    explanation:
      "Packaging ka kaam product ko surakshit rakhna aur pehchan dena hai.\n\n" +
      "Grading ka matlab hai quality ke hisaab se maal ko alag karna, jo packaging se pehle hota hai."
  },

  // ✅ QUESTION 44
  {
    question: "Big cardboard box containing 100 medicine bottles represents:",
    options: ["Primary packaging", "Secondary packaging", "Transportation packaging", "Industrial packaging"],
    correct: 2,
    topic: "Marketing – Packaging",
    explanation:
      "Bade dabbe jo sirf transport aur storage ke kaam aate hain, unhe 'Transportation Packaging' kaha jata hai."
  },

  // ✅ QUESTION 45
  {
    question: "Arranging staffing process correctly begins with:",
    options: ["Selection", "Recruitment", "Training", "Estimation of manpower"],
    correct: 3,
    topic: "Staffing",
    explanation:
      "Staffing tab tak shuru nahi ho sakti jab tak company ko yeh na pata ho ki use kitne logon ki zaroorat hai."
  },

  // ✅ QUESTION 46
  {
    question: "Process of stimulating people to act towards goals is:",
    options: ["Supervision", "Motivation", "Leadership", "Communication"],
    correct: 1,
    topic: "Directing",
    explanation:
      "Motivation ek aisi takat hai jo logon ko andar se kaam karne ke liye utsaahit (stimulate) karti hai."
  },

  // ✅ QUESTION 47
  {
    question: "Maslow’s physiological needs include:",
    options: ["Stability", "Title", "Hunger", "Friendship"],
    correct: 2,
    topic: "Motivation – Maslow",
    explanation:
      "Physiological needs sabse basic hoti hain jo zinda rehne ke liye chahiye, jaise khana (hunger), pani aur ghar."
  },

  // ✅ QUESTION 48
  {
    question: "Formal communication does NOT:",
    options: ["Follow official channels", "Spread rumours", "Be recorded", "Have identifiable source"],
    correct: 1,
    topic: "Communication",
    explanation:
      "Formal communication hamesha written aur official hota hai.\n\n" +
      "Afwahin (Rumours) hamesha informal communication (Grapevine) se failti hain."
  },

  // ✅ QUESTION 49
  {
    question: "Analysing deviations only when they cross limit is called:",
    options: ["Critical point control", "Management by exception", "Standard deviation", "Planning"],
    correct: 1,
    topic: "Controlling – Techniques",
    explanation:
      "Agar har choti galti manager ke paas jayegi, toh wo bada kaam nahi kar payega.\n\n" +
      "Isliye sirf badi galtiyon par focus karna 'Management by Exception' hai."
  },

  // ✅ QUESTION 50
  {
    question: "Monitoring organisational performance as per plans is:",
    options: ["Planning", "Staffing", "Directing", "Controlling"],
    correct: 3,
    topic: "Functions of Management",
    explanation:
      "Yeh dekhna ki kaam plan ke mutabik ho raha hai ya nahi, controlling function ka main maqsad hai."
  }
];
