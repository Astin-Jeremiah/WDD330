import QuakesController from './quakescontroller.js';

const myQuakesController = new QuakesController('#quakeList');

document.getElementById("start").addEventListener("click", function() {
    const r = document.getElementById("rad").value;
    const radius = parseInt(r);
    console.log(radius);
    myQuakesController.init(radius);
});

