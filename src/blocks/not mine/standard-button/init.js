import StandardButton from './standardButton';

$(() => {
  const $button = $('.js-standard-button');

  $button.each((_, item) => {
    new StandardButton($(item));
  });
});
