// Get toggle button
const toggleButton = document.querySelector('#toggle-button');

// Event listener for toggle button
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
