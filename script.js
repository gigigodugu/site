// script.js (Optional - for more complex interactions)

// Example: Log a message when the footer loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("Pokémon Footer Loaded! Gotta catch 'em all!");

    // Example of a simple interaction (not used in current CSS, just for demonstration)
    const pikachu = document.querySelector('.pokemon-pikachu');
    if (pikachu) {
        pikachu.addEventListener('click', () => {
            alert('Pika pika! You clicked Pikachu!');
            // You could add a class to trigger a different animation or sound here
        });
    }
});