class Appear {
  constructor(elem, settings = {}) {
    this.elem = $(elem);
    this.state = {
      shown: false,
      offset_top: this.elem.offset().top
    }
    this.appearClass = settings.appearClass || 'show';
    this.registerListeners();
    this.checkAddClass();
  }

  registerListeners() {
    window.addEventListener("scroll", () => this.checkAddClass());
    window.addEventListener("resize", () => this.checkAddClass());
    window.addEventListener("resize", () => this.updateTop());
  }

  updateTop() {
    this.state.offset_top = this.elem.offset().top
  }

  checkAddClass() {
    if (!this.state.shown) {
      var windowpos = $(window).scrollTop() + $(window).height();
      if ((windowpos - 150) >= this.state.offset_top) {
        this.elem.addClass(this.appearClass);
        this.state.shown = true;
      }

    }
  }

}

export default Appear;
