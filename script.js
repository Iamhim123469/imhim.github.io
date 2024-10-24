let score = 0;

const button = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");
const messageDisplay = document.getElementById("message");

button.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    
    if (score === 10) {
        messageDisplay.textContent = "You reached 10 clicks!";
    } else if (score === 50) {
        messageDisplay.textContent = "Wow! 50 clicks!";
    } else if (score === 100) {
        messageDisplay.textContent = "Amazing! 100 clicks!";
    }
});
