import Map from './map';

$(() => {
  const $map = $('.js-map');
  $map.each((_, item) => {
    new Map($(item));
  });
});
