// Function to create and animate the flower
function createFlower(x, y) {
    const flower = document.createElement('img');
    const flowerNumber = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 2
    flower.src = `images/flower${flowerNumber}.gif`; // Assumes you have flower1.gif and flower2.gif
    flower.className = 'flower';
    flower.style.left = `${x - 25}px`;
    flower.style.top = `${y - 25}px`;

    document.body.appendChild(flower);

    // Trigger the bloom effect
    setTimeout(() => {
        flower.classList.add('bloom');
    }, 10);

    // Remove the flower after 2 seconds
    setTimeout(() => {
        flower.remove();
    }, 2000);
}

// Event listener for mouse clicks
document.body.addEventListener('click', function(event) {
    createFlower(event.clientX, event.clientY);
});

// Event listener for touch events
document.body.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    createFlower(touch.clientX, touch.clientY);
});
