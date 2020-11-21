import QuakesController from './quakescontroller.js';

const myQuakesController = new QuakesController('#quakeList');

const r = document.getElementById("rad").value;
const radius = parseInt(r);
console.log(radius);

document.getElementById("start").addEventListener("click", function() {
    myQuakesController.init(radius);
});

