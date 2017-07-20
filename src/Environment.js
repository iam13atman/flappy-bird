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

export default Environment;