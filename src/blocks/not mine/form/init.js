import Form from './form';

$(() => {
  const $form = $('.js-form');
  $form.each((_, item) => {
    new Form($(item));
  });
});
