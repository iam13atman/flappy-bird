/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Environment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Animation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Bird__ = __webpack_require__(5);






class MainController{

	constructor(elementId){
		
		let element = document.getElementById(elementId);
		let container = new __WEBPACK_IMPORTED_MODULE_0__Container__["a" /* default */]();

		// Environment
		let environment = new __WEBPACK_IMPORTED_MODULE_1__Environment__["a" /* default */]();

		// Bird
		let bird = new __WEBPACK_IMPORTED_MODULE_3__Bird__["a" /* default */]();

		
		container.append(environment.element);
		container.append(bird.element);

		element.appendChild(container.element);


		// Animation
		let animation = new __WEBPACK_IMPORTED_MODULE_2__Animation__["a" /* default */](bird, container, environment);

		

	}

	
}


let controller = new MainController('main-container');

/* harmony default export */ __webpack_exports__["default"] = (MainController);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Container{
	

	constructor(){
		this.height = 620;
		this.width = 800;
		this.marginLeft = 'auto';
		this.marginRight = 'auto';
		this.overflow = 'hidden';
		this.background = '#ffffff';
		this.position = 'relative';

		this.element = document.createElement('div');
		this.element.style.height = this.height + 'px';
		this.element.style.width = this.width + 'px';
		this.element.style.position = this.position;
		this.element.style.marginLeft = this.marginLeft;
		this.element.style.marginRight = this.marginRight;
		this.element.style.overflow = this.overflow;
		this.element.style.background = this.background;
	}

	append(childElement){
		this.element.appendChild(childElement);
	}

	remove(childElement){
		this.element.removeChild(childElement);
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Environment{
	
	constructor(){
		this.width = 1920;
		this.height = 620;
		this.position = 'relative';


		this.imageElement = document.createElement('img');
		this.imageElement.src = 'img/background.png';

		this.element = document.createElement('div');
		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.position = this.position;


		this.append(this.imageElement);
	}

	append(childElement){
		this.element.appendChild(childElement);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Environment);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Obstacle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainController__ = __webpack_require__(0);



class Animation{

	constructor(bird, container, environment){
		this.score = 0;
		this.bird = bird;
		this.marginLeft = 0;
		this.obstacles = [];
		this.container = container;
		this.environment = environment;
		

		this.isGameOver = false;

		this.animate();
		this.createScoreWrapper();

	}

	animate(){
		// Arrow function saves the context () => { }
		this.intervalId = setInterval(() => {
			// debugger;
			this.marginLeft -= 2;
			this.container.element.firstElementChild.style.marginLeft = this.marginLeft + 'px';

			if(-this.marginLeft >= this.container.width){
				this.marginLeft = 0;
			}

			this.bird.moveUp();
			this.createObstacles();
			this.updateViewWithObstacles();
			this.checkCollision();
			this.updateScore();


		}, 1000/ 60);


		// Event Listener
		window.addEventListener('keydown', (event) => {
			event.preventDefault();

			if(event.keyCode == 40){
				// Down Arrow key
				this.bird.moveDown();	
			}

			// Enter Key Pressed
			if(event.keyCode == 13){
				if(this.isGameOver == true){
					this.gameRestart();
				}
			}
			
		});
	}

	// Creating Obstacles
	createObstacles(){
		if(this.marginLeft % 150 == 0){
			let obstacle = new __WEBPACK_IMPORTED_MODULE_0__Obstacle__["a" /* default */](this.container.width+240 , this.generateTop(-30, -430));

			this.obstacles.push(obstacle);
			this.container.append(obstacle.element);
		}

	}

	updateViewWithObstacles(){
		this.obstacles.forEach((obstacle, index) => {
			obstacle.move();

			if(obstacle.left <= 0){
				
				// Remove object from array
				this.obstacles.splice(index, 1);

				// Remove child from container
				this.container.remove(obstacle.element);
				
			}
		});
	}

	// Generating Top value
	generateTop(min, max){
		min = min || -30;
		max = max || -430;

		return Math.floor(Math.random() * (max-min) + min);
	}

	// Check Collision
	checkCollision(){

		for(let i = 0; i < this.obstacles.length; i++){

			if(this.obstacles[i].left <= 140 && this.bird.top  <= 
				this.obstacles[0].top+this.obstacles[0].height){
				clearInterval(this.intervalId);
				this.gameOver();
				this.isGameOver = true;
				this.bird.isKeyPressMoveAvailable = false;
			}else{
				this.score +=1;
			}
		}
	}

	gameOver(){
		this.gameOver = document.createElement('div');
		this.gameOver.style.width = '600px';
		this.gameOver.style.display = 'block';
		this.gameOver.style.top = '200px';
		this.gameOver.style.left = '100px';
		this.gameOver.style.color = 'red';
		this.gameOver.style.fontSize = '58px';
		this.gameOver.style.fontWeight = 'bold';	
		this.gameOver.style.textAlign = 'center';
		this.gameOver.style.position = 'absolute';
		this.gameOver.innerHTML = 'Game Over. \n Press Enter to Restart.';

		this.container.append(this.gameOver);


		
	}

	createScoreWrapper(){
		this.scoreWrapper = document.createElement('div');
		
		this.scoreWrapper.style.width = '600px';
		this.scoreWrapper.style.display = 'block';
		this.scoreWrapper.style.margin = '0 auto';
		this.scoreWrapper.style.color = '#ffffff';
		this.scoreWrapper.style.top = '600px';
		this.scoreWrapper.style.left = '100px';
		this.scoreWrapper.style.position = 'absolute';
		this.scoreWrapper.style.fontSize = '20 px';	
		this.scoreWrapper.style.fontWeight = 'bold';	
		this.scoreWrapper.style.textAlign = 'center';
		

		this.container.append(this.scoreWrapper);

	}

	updateScore(){
		this.scoreWrapper.innerHTML = 'Score : ' + this.score;
	}

	gameRestart(){
		let element = document.getElementById('main-container');
		element.removeChild(this.container.element);
		this.scoreWrapper.innerHTML = " ";
		this.score = 0;
		this.gameOver.innerHTML = " ";
		let controller = new __WEBPACK_IMPORTED_MODULE_1__MainController__["default"]('main-container');

	}

}

/* harmony default export */ __webpack_exports__["a"] = (Animation);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Obstacle{
	constructor(left, top){
		this.top = top;
		this.left = left;
		this.width = 35;
		this.height = 500;
		this.overflow = 'hidden';
		this.position = 'absolute';
		
		this.imageElement = document.createElement('img');
		this.imageElement.src = 'img/obstacle.png';

		this.element = document.createElement('div');
		this.element.style.top = this.top;
		this.element.style.left = this.left;
		this.element.style.width = this.width;
		this.element.style.height = this.height;
		this.element.style.position = this.position;
		this.element.style.overflow = this.overflow;

		this.element.append(this.imageElement);
		
	}

	move(){
		this.left -= 15;
		this.element.style.left = this.left + 'px';
		
	}

	append(childElement){
		this.element.appendChild(childElement);
	}



}

/* harmony default export */ __webpack_exports__["a"] = (Obstacle);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Bird{
	constructor(){
		this.top = 250;
		this.width = 150;
		this.height = 150;
		this.isKeyPressMoveAvailable = true;

		this.position = 'absolute';

		this.imageElement = document.createElement('img');
		this.imageElement.src = 'img/bird.png';

		this.element = document.createElement('div');
		this.element.style.top = this.top + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.width = this.width + 'px';
		this.element.style.position = this.position;


		this.append(this.imageElement);
	}

	append(childElement){
		this.element.appendChild(childElement);
	}

	moveUp(){

		if(this.top >= 40){
			this.top -= 2;
			this.element.style.top = this.top + 'px';
		}

	}

	moveDown(){
		if(this.top <= 440 && this.isKeyPressMoveAvailable == true){
			this.top += 70;
			this.element.style.top = this.top + 'px';
		}
		
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Bird);

/***/ })
/******/ ]);