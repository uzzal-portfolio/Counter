const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const secondaryCounterElement = document.getElementById('secondary-counter');
const notification = document.getElementById('notification');
const closeBtn = document.querySelector('.close-btn');

let mainCounter = 0;
let secondaryCounter = 0;

// Function to handle the reset and increment the secondary counter
function handleReset() {
    notification.style.display = 'none';
    mainCounter = 0;
    counterElement.textContent = mainCounter;
    secondaryCounter++;
    secondaryCounterElement.textContent = secondaryCounter;
}

incrementBtn.addEventListener('click', () => {
    if (mainCounter < 108) {
        mainCounter++;
        counterElement.textContent = mainCounter;

        if (mainCounter === 108) {
            notification.style.display = 'flex';
        }
    }
});

closeBtn.addEventListener('click', () => {
    handleReset();
});
