// Function changeColour
const changeColour = function(target) {
    target.classList.toggle('red-background');
}

// Part 1: Add a click event to a button
const button = document.getElementById("mybutton");

button.addEventListener('click', function() {
    console.log('button clicked!');
});

// Part 2 and 3 
const backgroundbutton = document.getElementById('background-button');
const body = document.querySelector('.blue-background');

backgroundbutton.addEventListener('click', function() {
    changeColour(body);
});