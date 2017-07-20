import Container from './Container';
import Environment from './Environment';
import Animation from './Animation';
import Bird from './Bird';


class MainController{

	constructor(elementId){
		
		let element = document.getElementById(elementId);
		let container = new Container();

		// Environment
		let environment = new Environment();

		// Bird
		let bird = new Bird();

		
		container.append(environment.element);
		container.append(bird.element);

		element.appendChild(container.element);


		// Animation
		let animation = new Animation(bird, container, environment);

		

	}

	
}


let controller = new MainController('main-container');

export default MainController;