import Obstacle from './Obstacle';
import MainController from './MainController';

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
			let obstacle = new Obstacle(this.container.width+240 , this.generateTop(-30, -430));

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
		let controller = new MainController('main-container');

	}

}

export default Animation;