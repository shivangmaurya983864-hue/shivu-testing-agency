let currentIndex = 0;
let answers = [];
let status = [];
let timeLeft = 60 * 60; // 1 hour

// INIT
for (let i = 0; i < questions.length; i++) {
  answers[i] = null;
  status[i] = "notVisited"; 
}

// TIMER
setInterval(() => {
  if (timeLeft <= 0) {
    submitExam();
    return;
  }
  timeLeft--;
  const h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");
  document.getElementById("timer").innerText = `${h}:${m}:${s}`;
}, 1000);

// LOAD QUESTION
function loadQuestion() {
  const q = questions[currentIndex];

  document.getElementById("qno").innerText =
    `Question ${currentIndex + 1}:`;
  document.getElementById("questionText").innerText = q.question;

  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const checked = answers[currentIndex] === i ? "checked" : "";
    optDiv.innerHTML += `
      <label>
        <input type="radio" name="option" value="${i}" ${checked}>
        ${opt}
      </label><br>
    `;
  });

  if (status[currentIndex] === "notVisited") {
    status[currentIndex] = "notAnswered";
  }

  buildPalette();
  updateLegend();
}

// SAVE ANSWER
function saveAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    answers[currentIndex] = Number(selected.value);

    if (status[currentIndex] === "marked") {
      status[currentIndex] = "answeredMarked";
    } else {
      status[currentIndex] = "answered";
    }
  }
}

// BUTTONS
function saveAndNext() {
  saveAnswer();
  next();
}

function markForReview() {
  if (answers[currentIndex] !== null) {
    status[currentIndex] = "answeredMarked";
  } else {
    status[currentIndex] = "marked";
  }
  buildPalette();
  updateLegend();
}

function markForReviewNext() {
  markForReview();
  next();
}

function clearResponse() {
  answers[currentIndex] = null;
  status[currentIndex] = "notAnswered";
  loadQuestion();
}

function next() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

// PALETTE
function buildPalette() {
  const grid = document.getElementById("paletteGrid");
  grid.innerHTML = "";

  questions.forEach((_, i) => {
    const cls = status[i];
    grid.innerHTML += `
      <button class="pal ${cls}" onclick="jump(${i})">
        ${String(i + 1).padStart(2, "0")}
      </button>
    `;
  });
}

function jump(i) {
  currentIndex = i;
  loadQuestion();
}

// LEGEND COUNT (PHOTO JAISE)
function updateLegend() {
  let counts = {
    notVisited: 0,
    notAnswered: 0,
    answered: 0,
    marked: 0,
    answeredMarked: 0
  };

  status.forEach(s => counts[s]++);

  document.querySelector(".notVisited + span")?.innerText;
  // (legend numbers already image based, visual handled by CSS)
}

// SUBMIT
function submitExam() {
  const examResult = {
    questions: questions,
    answers: answers,
    status: status
  };

  localStorage.setItem("examResult", JSON.stringify(examResult));
  window.location.href = "summary.html";
}

// START
loadQuestion();
