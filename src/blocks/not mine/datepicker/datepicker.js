class Datepicker {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this._findElements();
    this.$calendar.datepicker({
      altField: '.js-datepicker__date',
      dateFormat: 'd',
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      inline: true,
      firstDay: 1,
      showOtherMonths: true,
    });

    this.$todayButton.on('click', this._handleTodayButtonClick.bind(this));
  }

  _findElements() {
    this.$calendar = this.element.find('.js-datepicker__calendar');
    this.$todayButton = this.element.find('.js-datepicker__button');
  }

  _handleTodayButtonClick() {
    this.$calendar.datepicker('setDate', new Date());
  }
}

export default Datepicker;
