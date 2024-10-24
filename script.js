let score = 0;
let pointsPerClick = 1; // Start with 1 point per click

// HTML element references
const button = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");
const pointsPerClickDisplay = document.getElementById("pointsPerClick");
const messageDisplay = document.getElementById("message");

// Upgrade buttons
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");

// Upgrade costs
let upgrade1Cost = 10;
let upgrade2Cost = 50;
let upgrade3Cost = 100;

// Click event for the main button
button.addEventListener("click", () => {
    score += pointsPerClick;
    scoreDisplay.textContent = score;

    // Check if any milestones have been hit
    if (score === 10) {
        messageDisplay.textContent = "You reached 10 clicks!";
    } else if (score === 50) {
        messageDisplay.textContent = "Wow! 50 clicks!";
    } else if (score === 100) {
        messageDisplay.textContent = "Amazing! 100 clicks!";
    }
});

// Upgrade 1: +1 point per click
upgrade1.addEventListener("click", () => {
    if (score >= upgrade1Cost) {
        score -= upgrade1Cost;
        pointsPerClick += 1;
        upgrade1Cost *= 2; // Double the cost for the next purchase
        updateDisplay();
    } else {
        messageDisplay.textContent = "Not enough points for Upgrade 1!";
    }
});

// Upgrade 2: +5 points per click
upgrade2.addEventListener("click", () => {
    if (score >= upgrade2Cost) {
        score -= upgrade2Cost;
        pointsPerClick += 5;
        upgrade2Cost *= 2; // Double the cost for the next purchase
        updateDisplay();
    } else {
        messageDisplay.textContent = "Not enough points for Upgrade 2!";
    }
});

// Upgrade 3: +10 points per click
upgrade3.addEventListener("click", () => {
    if (score >= upgrade3Cost) {
        score -= upgrade3Cost;
        pointsPerClick += 10;
        upgrade3Cost *= 2; // Double the cost for the next purchase
        updateDisplay();
    } else {
        messageDisplay.textContent = "Not enough points for Upgrade 3!";
    }
});

// Update the display after each interaction
function updateDisplay() {
    scoreDisplay.textContent = score;
    pointsPerClickDisplay.textContent = pointsPerClick;
    upgrade1.textContent = `Upgrade 1 (+1 point per click) - Cost: ${upgrade1Cost}`;
    upgrade2.textContent = `Upgrade 2 (+5 points per click) - Cost: ${upgrade2Cost}`;
    upgrade3.textContent = `Upgrade 3 (+10 points per click) - Cost: ${upgrade3Cost}`;
}
