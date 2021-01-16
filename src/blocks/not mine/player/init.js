import Player from './player';

$(() => {
  const $player = $('.js-player');
  $player.each((_, item) => {
    new Player($(item));
  });
});
