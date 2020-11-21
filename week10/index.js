import QuakesController from './quakescontroller.js';

const myQuakesController = new QuakesController('#quakeList');

function complete(){
myQuakesController.init();
}