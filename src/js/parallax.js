class Parallax {
  constructor(elem) {
    this.elem = elem;
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
      // let bodyScroll = document.body.getBoundingClientRect().top * (-1);
      let elemPosition = this.elem.getBoundingClientRect().top;
      let difference = window.innerHeight - elemPosition;
      if(difference >= 0) {
        var bkgPosition = difference * 0.3;
        this.bkg.style.transform = "translate3d(-50%, " + bkgPosition.toFixed(0) + "px, 0px)";
      }

      // let isElementVisible = window.innerHeight > elemPosition;

      // let position = document.body.getBoundingClientRect().top * .3 * (-1);
      // let position = window.innerHeight - elemPosition;
      // console.log(position)
      // this.bkg.style.transform = "translate3d(-50%, " + position.toFixed(0) + "px, 0px)";
    });
  }

}

export default Parallax;
