export default class Header {
	constructor() {
    this.body = $('body');
		this.header = $('.header');
    this.className = 'scrolling';

    this.state = {
      isScrolling: false
    }

    this.checkScroll = this.checkScroll.bind(this);
    this.updateIsScrolling = this.updateIsScrolling.bind(this);
		this.registerListeners();
	}

	registerListeners() {
    this.updateIsScrolling();
    window.addEventListener("scroll", this.updateIsScrolling);
    window.addEventListener("resize", this.updateIsScrolling);
	}

  checkScroll() {
    return document.body.getBoundingClientRect().top < 0;
  }

	updateIsScrolling(event) {
    const { className, checkScroll, header, state } = this;
    if (state.isScrolling !== checkScroll()) {
      state.isScrolling = checkScroll();
      if (state.isScrolling) header.addClass(className);
      else header.removeClass(className);
    }
  }

}
