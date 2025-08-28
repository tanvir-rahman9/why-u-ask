const minNum = 1;
const maxNum = 100;
let answer;
let attempts;

const minSpan = document.getElementById('min');
const maxSpan = document.getElementById('max');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const guessBtn = document.getElementById('guessBtn');
const restartBtn = document.getElementById('restartBtn');

minSpan.textContent = minNum;
maxSpan.textContent = maxNum;

function initGame() {
  answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  attempts = 0;
  feedback.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  guessBtn.disabled = false;
}

function checkGuess() {
  const guess = Number(guessInput.value);

  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    feedback.textContent = "Please enter a valid number within range.";
    feedback.style.color = "red";
  } else {
    attempts++;
    if (guess < answer) {
      feedback.textContent = "Too low! Try again!";
      feedback.style.color = "orange";
    } else if (guess > answer) {
      feedback.textContent = "Too high! Try again!";
      feedback.style.color = "orange";
    } else {
      feedback.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
      feedback.style.color = "green";
      guessInput.disabled = true;
      guessBtn.disabled = true;
    }
  }

  guessInput.value = "";
  guessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', initGame);

// Initialize game on page load
initGame();
