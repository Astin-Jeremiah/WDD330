function complete() {
    import QuakesController from './quakescontroller.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();
}