class Slider {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const $sliderBubble = this.element.find('.js-slider__bubble');
    this.element.slider({
      value: this.element.data('value'),
      min: this.element.data('min'),
      max: this.element.data('max'),
      step: (this.element.data('max') - this.element.data('min')) / (this.element.data('step') - 1),
      range: 'min',
      classes: {
        'ui-slider-range': `ui-slider-range_${this.element.data('color')}`,
      },
      create: () => {
        $sliderBubble.text(this.element.data('value'));
      },
      slide: (_, ui) => {
        $sliderBubble.text(ui.value);
      },
    });
  }
}

export default Slider;
