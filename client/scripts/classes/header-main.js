import initClass from '../utils/init-class.js';

class HeaderMain {

	constructor(element) {
		this.burger 				= element.querySelectorAll('.header__burger')[0];
		this.navigation 			= element.querySelectorAll('.header__navigation')[0];

		this.addEventListeners()
	}

	addEventListeners() {
		this.burger.addEventListener('click', this.onBurgerClick)
	}

	onBurgerClick = event => {
		event.preventDefault()
		this.toggleMenu()
	}

	toggleMenu() {
		let menuState = this.burger.classList.contains('is-active');

		if(!menuState) {
			this.burger.classList.add('is-active')
			this.navigation.classList.add('is-active')
		} else {
			this.burger.classList.remove('is-active')
			this.navigation.classList.remove('is-active')
		}
	}

}

initClass('.header__main', HeaderMain)