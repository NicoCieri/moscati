class Parallax {
  constructor(elem) {
    this.elem = elem;
    this.bkg = this.elem.querySelector('.bkg');
    this.windowWidth = $(window).width();

    this.init();
  }

  init() {
    this.registerListeners();
    this.renderParallax();
    $(this.elem).addClass('loaded');
  }

  registerListeners() {
    window.addEventListener("scroll", () => this.renderParallax());
    window.addEventListener("resize", () => this.renderParallax());
    window.addEventListener("resize", () => this.udpateWidth());
  }

  udpateWidth() {
    this.windowWidth = $(window).width();
  }

  renderParallax() {
    if(this.windowWidth > 767) {
      window.requestAnimationFrame(() => {
        // let bodyScroll = document.body.getBoundingClientRect().top * (-1);
        let elemPosition = this.elem.getBoundingClientRect().top;
        let difference = window.innerHeight - elemPosition;
        if(difference >= 0) {
          var bkgPosition = difference * 0.3;
          this.bkg.style.transform = "translate3d(-50%, " + bkgPosition.toFixed(0) + "px, 0px)";
        }
      });
    }
  }

}

export default Parallax;
