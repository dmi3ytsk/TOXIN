import Slider from './slider';

$(() => {
  const $slider = $('.js-slider');

  $slider.each((_, item) => {
    new Slider($(item));
  });
});
