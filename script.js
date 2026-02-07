// Chocolate Day Website Script

document.addEventListener('DOMContentLoaded', function() {
    const wishForm = document.getElementById('wish-form');
    const wishDisplay = document.getElementById('wish-display');
    const personalizedWish = document.getElementById('personalized-wish');
    const bgMusic = document.getElementById('bg-music');

    wishForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        if (name) {
            personalizedWish.textContent = `Happy Chocolate Day, ${name}! May your day be filled with sweetness, joy, and lots of chocolate hugs!`;
            wishDisplay.classList.remove('hidden');
            // Play background music on interaction
            bgMusic.play().catch(error => console.log('Audio play failed:', error));
        }
    });
});
