import fancybox from '@fancyapps/fancybox';

class Lightbox {
  constructor(selector, options = {}) {
    this.selector = selector;
    this.options = options;
    this.init();
  }

  init() {
    $(this.selector).fancybox(this.options)
  }


}

export default Lightbox
