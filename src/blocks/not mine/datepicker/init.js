import Datepicker from './datepicker';


$(() => {
  const $calendar = $('.datepicker');

  $calendar.each((_, item) => {
    new Datepicker($(item));
  });
});
