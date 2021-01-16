import DropDown from './dropdown';

$(() => {
  const $dropDown = $('.js-drop-down');
  $dropDown.each((_, item) => {
    new DropDown($(item));
  });
});
