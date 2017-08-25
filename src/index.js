import './styles/styles.scss';
import $ from 'jquery';
import Carousel from './js/carousel';
import Parallax from './js/parallax';
import Appear from './js/appear';
import TogglerClass from './js/toggler-class';
import AnimatedAnchor from './js/animated-anchor';
import Header from './js/header';
import MainNav from './js/main-nav';
import Lightbox from './js/lightbox';

new Header();
new MainNav();

new Carousel('.main-carousel', {
  prevNextButtons: false,
  pageDots: true
});

$('.parallax').each((index, item) => {
  new Parallax(item)
});

$('.thumbnail-item').each((index, item) => {
  const $item = $(item);
  new TogglerClass({
    receptor: $item,
    btn: $item.find('.toggle-description'),
    className: 'opened'
  });
});

// new TogglerClass({
//   receptor: $('body'),
//   btn: $('#main-nav-toggle-btn'),
//   className: 'main-side-nav-opened'
// });

const links = document.querySelectorAll('.animated-anchor');
new AnimatedAnchor(links, {
  speed: 700
});

 new Carousel('#testimony-carousel', {
   groupCells: true,
   wrapAround: false,
   pageDots: false
 });

 new Carousel('#news-carousel', {
   groupCells: true,
   wrapAround: false,
   pageDots: false,
   draggable: false
 });

$('.appear-on-scroll').each((index, item) => {
  new Appear(item)
});

new Lightbox('[data-fancybox]', {
  toolbar : true,
  buttons : [
		'close'
	],
  animationEffect: 'fade'
});
