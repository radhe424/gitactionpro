// Initialize the counter tracking variable
let currentCount = 0;

// Grab DOM references to the display and buttons
const counterValue = document.getElementById("counter-value");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");

// Function to safely update the UI text
function updateDisplay() {
    counterValue.textContent = currentCount;
}

// Attach event click listeners to each button
increaseBtn.addEventListener("click", () => {
    currentCount++;
    updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
    currentCount--;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    currentCount = 0;
    updateDisplay();
});
