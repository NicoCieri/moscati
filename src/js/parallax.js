class Parallax {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.bkg = this.elem.querySelector('.bkg');
    this.init();
    this.registerListeners();
    this.renderParallax();
  }

  init() {
    $(this.elem).addClass('loaded');
  }

  registerListeners() {
    window.addEventListener("scroll", () => this.renderParallax());
    window.addEventListener("resize", () => this.renderParallax());

  }

  renderParallax() {
    window.requestAnimationFrame(() => {
      let position = document.body.getBoundingClientRect().top * .3 * (-1);
      this.bkg.style.transform = "translate3d(-50%, " + position.toFixed(0) + "px, 0px)";
    });
  }

}

export default Parallax;
