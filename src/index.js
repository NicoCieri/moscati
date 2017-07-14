import './styles/styles.scss';
import $ from 'jquery';
import Carousel from './js/carousel.js';
import Parallax from './js/parallax.js';
import TogglerClass from './js/toggler-class.js';

new Carousel('.carousel');
new Parallax('.parallax');

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
