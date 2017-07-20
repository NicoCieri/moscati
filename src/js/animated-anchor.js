class AnimatedAnchor {
  constructor(links, settings={}) {
    this.links = links;
    this.settings = {
      speed: 500,
      ...settings
    };
    this.body = $("html:not(:animated),body:not(:animated)");
    this.init();
  }

  init() {
    this.links.forEach((link) => {
      $(link).on('click', (e) => this.animate(e))
    })
  }

  animate(event) {
    event.preventDefault();
    const target = $(event.currentTarget).attr("href");
    const destination = $(target).offset().top;
    this.body.animate({
      scrollTop: destination
    }, this.settings.speed, () => {
        window.location.hash = target;
    })
  }

}

export default AnimatedAnchor;
