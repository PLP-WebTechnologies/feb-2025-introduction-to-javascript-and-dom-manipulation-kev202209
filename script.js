// script.js

// Change text content and styles
const changeButton = document.getElementById('changeButton');
const myTitle = document.getElementById('myTitle');
const myParagraph = document.getElementById('myParagraph');

changeButton.addEventListener('click', function() {
    myTitle.textContent = 'New Title!';
    myParagraph.textContent = 'This text has been changed by JavaScript!';
    myParagraph.style.color = 'blue';
    myParagraph.style.fontWeight = 'bold';
});

// Add or remove element
const addElementButton = document.getElementById('addElementButton');
const elementContainer = document.getElementById('elementContainer');

addElementButton.addEventListener('click', function() {
    if (elementContainer.children.length === 0) {
        const newElement = document.createElement('p');
        newElement.textContent = 'Dynamically added element!';
        newElement.style.backgroundColor = 'lightgreen';
        newElement.style.padding = '10px';
        elementContainer.appendChild(newElement);
    } else {
        elementContainer.innerHTML = ''; // Remove all children
    }
});
