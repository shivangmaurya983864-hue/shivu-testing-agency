/********************
 * GLOBAL STATE
 ********************/
let currentIndex = 0;
let answers = [];
let status = [];
let timeLeft = 3600; // 1 hour

/********************
 * INIT / RESUME
 ********************/
const savedExam = localStorage.getItem("examResult");

if (savedExam) {
  // 🔥 RESUME EXAM
  const data = JSON.parse(savedExam);
  answers = data.answers || [];
  status = data.status || [];
  currentIndex = data.currentIndex ?? 0;
} else {
  // 🆕 FRESH EXAM
  for (let i = 0; i < questions.length; i++) {
    answers[i] = null;
    status[i] = "notVisited";
  }
  saveProgress();
}

/********************
 * TIMER
 ********************/
const timerInterval = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    submitExam();
    return;
  }

  timeLeft--;

  const h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");

  const timerEl = document.getElementById("timer");
  if (timerEl) timerEl.innerText = `${h}:${m}:${s}`;
}, 1000);

/********************
 * LOAD QUESTION
 ********************/
function loadQuestion() {
  const q = questions[currentIndex];

  document.getElementById("qno").innerText =
    `Question ${currentIndex + 1}`;
  document.getElementById("questionText").innerText = q.question;

  const opt = document.getElementById("options");
  opt.innerHTML = "";

  q.options.forEach((o, i) => {
    opt.innerHTML += `
      <label class="option">
        <input type="radio" name="opt"
          ${answers[currentIndex] === i ? "checked" : ""}
          onclick="selectOption(${i})">
        <span class="radio"></span>${o}
      </label>`;
  });

  if (status[currentIndex] === "notVisited") {
    status[currentIndex] = "notAnswered";
  }

  buildPalette();
  saveProgress();
}

/********************
 * ACTIONS
 ********************/
function selectOption(i) {
  answers[currentIndex] = i;
  status[currentIndex] =
    status[currentIndex] === "marked"
      ? "answeredMarked"
      : "answered";
  saveProgress();
}

function saveAndNext() {
  nextQuestion();
}

function markForReview() {
  status[currentIndex] =
    answers[currentIndex] !== null
      ? "answeredMarked"
      : "marked";
  buildPalette();
  saveProgress();
}

function markForReviewNext() {
  markForReview();
  nextQuestion();
}

function clearResponse() {
  answers[currentIndex] = null;
  status[currentIndex] = "notAnswered";
  loadQuestion();
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

/********************
 * QUESTION PALETTE
 ********************/
function buildPalette() {
  const p = document.getElementById("paletteGrid");
  p.innerHTML = "";

  questions.forEach((_, i) => {
    p.innerHTML += `
      <button class="pbtn ${status[i]}"
        onclick="jump(${i})">
        ${String(i + 1).padStart(2, "0")}
      </button>`;
  });
}

function jump(i) {
  currentIndex = i;
  loadQuestion();
}

/********************
 * SAVE PROGRESS
 ********************/
function saveProgress() {
  localStorage.setItem(
    "examResult",
    JSON.stringify({
      questions,
      answers,
      status,
      currentIndex
    })
  );
}

/********************
 * SUBMIT
 ********************/
function submitExam() {
  saveProgress(); // 🔒 final save only
  window.location.href = "summary.html";
}

/********************
 * START EXAM
 ********************/
loadQuestion();
