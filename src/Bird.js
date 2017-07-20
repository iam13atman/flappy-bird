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

export default Bird;