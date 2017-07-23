import './styles/styles.scss';
import $ from 'jquery';
import Carousel from './js/carousel.js';
import Parallax from './js/parallax.js';
import TogglerClass from './js/toggler-class.js';
import AnimatedAnchor from './js/animated-anchor.js';

new Carousel('.main-carousel');

$('.parallax').each((index, item) => {
  new Parallax(item)
})

$('.thumbnail-item').each((index, item) => {
  const $item = $(item);
  new TogglerClass({
    receptor: $item,
    btn: $item.find('.toggle-description'),
    className: 'opened'
  });
});

new TogglerClass({
  receptor: $('body'),
  btn: $('#main-nav-toggle-btn'),
  className: 'main-side-nav-opened'
});

const links = document.querySelectorAll('.animated-anchor');
new AnimatedAnchor(links, {
  speed: 700
});

new Carousel('#testimony-carousel', {
  groupCells: true,
  wrapAround: false,
  pageDots: false
});
