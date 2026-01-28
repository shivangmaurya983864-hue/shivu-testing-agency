const examResult = JSON.parse(localStorage.getItem("examResult"));

if (!examResult) {
    alert("Result data nahi mila!");
    window.location.href = "index.html";
}

const { questions, answers } = examResult;

let stats = {
    total: questions.length,
    correct: 0,
    wrong: 0,
    unattempted: 0,
    score: 0
};

// --- LOGIC: DATA SE MATCH KARNA ---
questions.forEach((q, i) => {
    const userSelection = answers[i]; // 0, 1, 2, or 3
    const correctIndex = Number(q.correct) - 1; // 1-based data ko 0-based index banaya

    if (userSelection === null || userSelection === undefined) {
        stats.unattempted++;
    } else if (userSelection === correctIndex) {
        stats.correct++;
        stats.score += 5; // Sahi ke +5 (CUET Style)
    } else {
        stats.wrong++;
        stats.score -= 1; // Galat ka -1
    }
});

// UI Update
document.getElementById("totalQ").innerText = stats.total;
document.getElementById("correct").innerText = stats.correct;
document.getElementById("wrong").innerText = stats.wrong;
document.getElementById("unattempted").innerText = stats.unattempted;
document.getElementById("score").innerText = stats.score;

// --- TABLE RENDERING ---
function render() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    questions.forEach((q, i) => {
        const userSelection = answers[i];
        const correctIdx = Number(q.correct) - 1;
        
        const userText = userSelection === null ? "---" : String.fromCharCode(65 + userSelection);
        const correctText = String.fromCharCode(65 + correctIdx);
        
        let statusClass = "unattempted-row";
        let statusText = "Skipped";

        if (userSelection !== null) {
            if (userSelection === correctIdx) {
                statusClass = "correct-row";
                statusText = "CORRECT";
            } else {
                statusClass = "wrong-row";
                statusText = "WRONG";
            }
        }

        tbody.innerHTML += `
            <tr class="${statusClass}">
                <td>${i + 1}</td>
                <td>${userText}</td>
                <td><b>${statusText}</b></td>
                <td>${correctText}</td>
            </tr>`;
    });
}

window.onload = render;
