window.onload = function () {
  document.getElementById("totalQ").innerText =
    localStorage.getItem("summary_total") || 0;

  document.getElementById("answered").innerText =
    localStorage.getItem("summary_answered") || 0;

  document.getElementById("notAnswered").innerText =
    localStorage.getItem("summary_notAnswered") || 0;

  document.getElementById("marked").innerText =
    localStorage.getItem("summary_marked") || 0;

  document.getElementById("answeredMarked").innerText =
    localStorage.getItem("summary_answeredMarked") || 0;

  document.getElementById("notVisited").innerText =
    localStorage.getItem("summary_notVisited") || 0;
};

function finalSubmit() {
  window.location.href = "result.html";
}

function goBack() {
  window.location.href = "exam.html";
}
