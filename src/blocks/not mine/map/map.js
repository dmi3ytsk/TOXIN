/* global ymaps */
import pin from './images/map-pin.svg';

class Map {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const $newMap = this.element.find('.js-map__body');
    ymaps.ready(() => {
      const myMap = new ymaps.Map($newMap[0], {
        center: $newMap.data('coordinates'),
        zoom: 13,
        controls: [],
      });
      const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      }, {
        iconLayout: 'default#image',
        iconImageHref: pin,
        iconImageSize: [41, 56],
        iconImageOffset: [-5, -38],
      });
      myMap.geoObjects.add(myPlacemark);
    });
  }
}

export default Map;
