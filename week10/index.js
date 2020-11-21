import QuakesController from './quakescontroller.js';

const myQuakesController = new QuakesController('#quakeList');

document.getElementById("start").addEventListener("click", function() {
    myQuakesController.init();
});

