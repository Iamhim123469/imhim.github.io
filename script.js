let score = 0; // Initial score
const pointsPerClick = 1; // Points earned per click

// Function to update the displayed score
function updateDisplay() {
    document.getElementById("score").innerText = score; // Update score display
}

// Initial display update
updateDisplay();

// Get the click button element
const button = document.getElementById("clickButton");

// Event listener for button clicks
button.addEventListener("click", () => {
    score += pointsPerClick; // Increase score by points per click
    updateDisplay(); // Update displayed score
});


function updateDisplay() {
    document.getElementById("score").innerText = score; // Update score display
}

// Call updateDisplay whenever score changes
const button = document.getElementById("clickButton");
button.addEventListener("click", () => {
    score += pointsPerClick * multiplier * prestigeMultiplier; // Adjust score based on your game's logic
    updateDisplay(); // Update displayed score
});
// Main click button functionality
const button = document.getElementById("clickButton");
button.addEventListener("click", () => {
    score += pointsPerClick * multiplier * prestigeMultiplier;
    updateDisplay();
    checkPrestigeAvailability();
});let score = 0;
let pointsPerClick = 1; // Start with 1 point per click
let autoClickerCount = 0;
let multiplier = 1; // x2 multiplier when purchased
let prestigeMultiplier = 1;
let upgrade1Cost = 10;
let upgrade2Cost = 50;
let upgrade3Cost = 100;
let autoClickerCost = 100;
let multiplierCost = 500;
let prestigeCost = 1000;

// HTML element references
const button = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");
const pointsPerClickDisplay = document.getElementById("pointsPerClick");
const messageDisplay = document.getElementById("message");
const prestigeButton = document.getElementById("prestige");

// Upgrade buttons
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");
const autoClickerButton = document.getElementById("autoClicker");
const multiplierButton = document.getElementById("multiplier");

// Save/Load buttons
const saveButton = document.getElementById("saveGame");
const loadButton = document.getElementById("loadGame");

// Click event for the main button
button.addEventListener("click", () => {
    score += pointsPerClick * multiplier * prestigeMultiplier;
    updateDisplay();
    checkPrestigeAvailability();
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
        upgrade3Cost *= 2;
        updateDisplay();
    } else {
        messageDisplay.textContent = "Not enough points for Upgrade 3!";
    }
});

// Auto Clicker: Adds 1 point per second
autoClickerButton.addEventListener("click", () => {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickerCount += 1;
        autoClickerCost *= 2;
        setInterval(() => {
            score += autoClickerCount * prestigeMultiplier;
            updateDisplay();
            checkPrestigeAvailability();
        }, 1000); // 1 click per second
        updateDisplay();
    } else {
        messageDisplay.textContent = "Not enough points for Auto Clicker!";
    }
});

// Multiplier: Doubles points per click
multiplierButton.addEventListener("click", () => {
    if (score >= multiplierCost) {
        score -= multiplierCost;
        multiplier *= 2;
        multiplierCost *= 3;
        updateDisplay();
    } else {
        messageDisplay.textContent = "Not enough points for Multiplier!";
    }
});

// Prestige: Reset score for a permanent multiplier
prestigeButton.addEventListener("click", () => {
    if (score >= prestigeCost) {
        prestigeMultiplier *= 1.1; // Increase multiplier by 10%
        score = 0;
        pointsPerClick = 1; // Reset upgrades
        multiplier = 1; // Reset multiplier
        autoClickerCount = 0; // Reset auto-clickers
        updateDisplay();
        checkPrestigeAvailability();
    }
});

// Save the game state
saveButton.addEventListener("click", () => {
    const gameState = {
        score,
        pointsPerClick,
        multiplier,
        prestigeMultiplier,
        autoClickerCount,
        upgrade1Cost,
        upgrade2Cost,
        upgrade3Cost,
        autoClickerCost,
        multiplierCost
    };
    localStorage.setItem('clickerGameState', JSON.stringify(gameState));
    messageDisplay.textContent = "Game saved!";
});

// Load the game state
loadButton.addEventListener("click", () => {
    const savedState = JSON.parse(localStorage.getItem('clickerGameState'));
    if (savedState) {
        score = savedState.score;
        pointsPerClick = savedState.pointsPerClick;
        multiplier = savedState.multiplier;
        prestigeMultiplier = savedState.prestigeMultiplier;
        autoClickerCount = savedState.autoClickerCount;
        upgrade1Cost = savedState.upgrade1Cost;
        upgrade2Cost = savedState.upgrade2Cost;
        upgrade3Cost = savedState.upgrade3Cost;
        autoClickerCost = savedState.autoClickerCost;
        multiplierCost = savedState.multiplierCost;
        updateDisplay();
        messageDisplay.textContent = "Game loaded!";
    }
});

// Update the display after each interaction
function updateDisplay() {
    scoreDisplay.textContent = Math.floor(score);
    pointsPerClickDisplay.textContent = pointsPerClick;
    upgrade1.textContent = `Upgrade 1 (+1 point per click) - Cost: ${upgrade1Cost}`;
    upgrade2.textContent = `Upgrade 2 (+5 points per click) - Cost: ${upgrade2Cost}`;
    upgrade3.textContent = `Upgrade 3 (+10 points per click) - Cost: ${upgrade3Cost}`;
    autoClickerButton.textContent = `Auto Clicker (1 click per second) - Cost: ${autoClickerCost}`;
    multiplierButton.textContent = `Click Multiplier x${multiplier} - Cost: ${multiplierCost}`;
    prestigeButton.textContent = `Prestige - Reset for 1.1x multiplier (requires ${prestigeCost} points)`;
}

// Enable or disable prestige button
function checkPrestigeAvailability() {
    if (

