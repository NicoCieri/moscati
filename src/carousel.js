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

export default Carousel;