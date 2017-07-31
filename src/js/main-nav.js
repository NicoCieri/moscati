export default class MainNav {
	constructor() {
    this.body = $('body');
		this.nav = $('.main-side-nav');
    this.items = this.nav.find('a');
    this.btn = $('#main-nav-toggle-btn');
    this.page = this.body.find('.page');
    this.className = 'main-side-nav-opened';

    this.state = {
      isOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
		this.registerListeners();
	}

	registerListeners() {
		this.btn.on('click tap', this.toggleNav);
    this.items.on('click tap', this.closeNav);
    this.page.on('click tap', () => this.state.isOpen ? this.closeNav() : null );
    $(document).on('keyup', (e) => e.keyCode==27 ? this.closeNav() : null );

	}

	toggleNav(event) {
    console.log('open menu')
		if(event) {
      event.preventDefault();
      event.stopPropagation();
    }
		this.body.toggleClass(this.className);
    this.state.isOpen = !this.state.isOpen;
	}

  closeNav(event) {
		this.body.removeClass(this.className);
    this.state.isOpen = false;
	}

}
