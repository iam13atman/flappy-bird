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

export default Container;