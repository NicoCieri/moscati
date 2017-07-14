import Flickity from 'flickity-imagesloaded';

class Carousel {
  constructor(selector, options={}) {
    this.elem = $(selector);
    this.fullpageBtn = this.elem.find('.full-screen-btn');
    this.carousel = new Flickity(selector, {
      contain: true,
      cellSelector: '.carousel-cell',
      imagesLoaded: true,
      cellAlign: 'center',
      ...options
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
