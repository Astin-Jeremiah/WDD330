import QuakesController from './quakescontroller.js';

const myQuakesController = new QuakesController('#quakeList');

document.getElementById("start").addEventListener("click", function() {
    const r = document.getElementById("rad").value;
    const radius = parseInt(r);
    console.log(radius);
    const date1 = document.getElementById("D1").value;
    console.log(date1);
    myQuakesController.init(radius);
});

