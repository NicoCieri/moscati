import $ from "jquery";
import './styles.scss';
import Flickity from 'flickity';

class Carousel {
  constructor(selector) {
    this.elem = $(selector);
    this.fullpageBtn = this.elem.find('.full-screen-btn');
    this.carousel = new Flickity(selector, {
      contain: true,
      cellSelector: '.carousel-cell',
      imagesLoaded: true,
      cellAlign: 'center'
    });
    this.registerListeners();
  }

  registerListeners() {
    this.fullpageBtn.on('click', this.openFullScreen)
  }

  openFullScreen(event) {
    if (event) event.preventDefault();
    console.log('openFullScreen');
  }
}

const carousel = new Carousel('.carousel');

class Parallax {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.bkg = this.elem.querySelector('.bkg');
    this.registerListeners();
  }

  registerListeners() {
    window.addEventListener("scroll", () => this.renderParallax());
    
  }

  renderParallax() {
    window.requestAnimationFrame(() => {
      let position = document.body.getBoundingClientRect().top * .5 * (-1);
      this.bkg.style.transform = "translate3d(-50%, " + position.toFixed(0) + "px, 0px)";
    });
  }

  setBannerParallax(){
    var slider = document.getElementById('slider');

    if (slider) {
      
    }
  }

}

const parallax = new Parallax('.parallax');