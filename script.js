Javascript
// JavaScript to handle opening and closing the card
const card = document.querySelector('.card');
const closeButton = document.querySelector('.close-card');

card.addEventListener('click', function () {
    // Toggle the card flip on click
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});

// Close the card when the button is clicked
closeButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the card flip on button click
    card.style.transform = 'rotateY(0deg)'; // Close the card
});

