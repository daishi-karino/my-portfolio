const bp = document.getElementById("bp");
const sq = document.getElementById("sq");
const dl = document.getElementById("dl");
const answer = document.getElementById("answer");

bp.onclick = function () {
  answer.textContent = "正解です！I Love BenchPress";
};

sq.onclick = function () {
  answer.textContent = "残念！スクワットは今もう特訓中です！";
};

dl.onclick = function () {
  answer.textContent = "残念！デッドリフトは1番苦手です！";
};
