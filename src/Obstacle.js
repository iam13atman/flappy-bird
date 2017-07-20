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

export default Obstacle;