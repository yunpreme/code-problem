var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    console.log(p1Score, winningScore);
    if (p1Score === winningScore) {
      p1Display.classList.add("win");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("win");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.classList.remove("win");
  p2Display.classList.remove("win");
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
}

numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = numInput.value;
  //winningScore의 value값이 string으로 인식되는것을 방지한다.
  winningScore = Number(numInput.value);
  reset();
});
