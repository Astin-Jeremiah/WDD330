import QuakesController from './quakescontroller.js';
import Quake from './quake.js';

const myQuakesController = new QuakesController('#quakeList');

document.getElementById("start").addEventListener("click", function() {
    const r = document.getElementById("rad").value;
    const radius = parseInt(r);
    console.log(radius);
    const date1 = document.getElementById("D1").value;
    console.log(date1);
    const date2 = document.getElementById("D2").value;
    console.log(date2);
    myQuakesController.init(radius, date1, date2);
});

