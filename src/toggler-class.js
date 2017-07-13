class TogglerClass {
	constructor(btnSelector, elementSelector, className) {
		this.btn = $(btnSelector);
		this.elementSelector = elementSelector;
		this.className = className;
		this.registerListeners();
	}

	registerListeners() {
		this.btn.on('click', (event) => { this.toggleClass(event) });
	}

	toggleClass(event) {
		if(event) event.preventDefault();
		$(event.target)
			.parents(this.elementSelector)
			.toggleClass(this.className);
	}

}

export default TogglerClass;