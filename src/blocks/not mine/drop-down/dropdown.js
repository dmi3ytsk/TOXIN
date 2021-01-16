class DropDown {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const $dropDown = $('.js-drop-down__select');
    $dropDown.selectmenu({
      width: '100%',
      classes: {
        'ui-selectmenu-menu': 'ui-selectmenu-menu_ui',
      },
    });
  }
}

export default DropDown;
