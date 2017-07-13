import './styles.scss';
import $ from 'jquery';
import Carousel from './carousel.js';
import Parallax from './parallax.js';
import TogglerClass from './toggler-class.js';

new Carousel('.carousel');
new Parallax('.parallax');
new TogglerClass('.thumbnail-item .toggle-description', '.thumbnail-item', 'opened')