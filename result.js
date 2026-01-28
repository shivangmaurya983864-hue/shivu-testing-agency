const examResult = JSON.parse(localStorage.getItem("examResult"));

if (!examResult) {
  alert("Exam data not found!");
  location.href = "exam.html";
}

const { questions, answers } = examResult;

const TOTAL_QUESTIONS = questions.length;
const MARKS_CORRECT = 1;
const MARKS_WRONG = -1;

let correct = 0;
let score = 0;

questions.forEach((q, i) => {
  if (answers[i] !== null) {
    if (answers[i] === q.correct) {
      correct++;
      score += MARKS_CORRECT;
    } else {
      score += MARKS_WRONG;
    }
  }
});

document.getElementById("totalQ").innerText = TOTAL_QUESTIONS;
document.getElementById("correct").innerText = correct;
document.getElementById("score").innerText = score;

let page = 1;

function render() {
  const limit = Number(document.getElementById("limit").value);
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  const start = (page - 1) * limit;
  const end = Math.min(start + limit, TOTAL_QUESTIONS);

  for (let i = start; i < end; i++) {
    const selected =
      answers[i] === null ? "---" : String.fromCharCode(65 + answers[i]);

    const status =
      answers[i] === null
        ? "NOT ANSWERED"
        : answers[i] === questions[i].correct
        ? "CORRECT"
        : "WRONG";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${selected}</td>
      <td class="${status === "WRONG" ? "wrong" : "correct"}">${status}</td>
      <td>${String.fromCharCode(65 + questions[i].correct)}</td>
    `;
    tbody.appendChild(tr);
  }

  renderPagination(limit);
}

function renderPagination(limit) {
  const pages = Math.ceil(TOTAL_QUESTIONS / limit);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= pages; i++) {
    const span = document.createElement("span");
    span.innerText = i;
    span.style.cursor = "pointer";
    span.style.margin = "0 6px";

    if (i === page) span.style.fontWeight = "bold";

    span.onclick = () => {
      page = i;
      render();
    };

    pagination.appendChild(span);
  }
}

render();
