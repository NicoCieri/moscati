class TogglerClass {
	constructor(options) {
		this.btn = options.btn;
		this.receptor = options.receptor;
		this.className = options.className;
		this.registerListeners();
	}

	registerListeners() {
		this.btn.on('click', (event) => { this.toggleClass(event) });
	}

	toggleClass(event) {
		if(event) event.preventDefault();
		this.receptor.toggleClass(this.className);
	}

}

export default TogglerClass;
