import AirDatepicker from "air-datepicker";
import "./datepicker.scss";

const accept = {
  content: "Применить",
  className: "air-datepicker-button-accept",
  onClick: (dp) => {
    dp.hide();
  },
};
const defaultAttr = {
  buttons: ["clear", accept],
  prevHtml: "arrow_back",
  nextHtml: "arrow_forward",
  navTitles: {
    days: "MMMM yyyy",
  },
};

const datepicker = document.querySelectorAll(".datepicker-here");
datepicker.forEach(function (e) {
  const dataAttr = e.dataset;
  const options = {
    ...dataAttr,
    ...defaultAttr,
    position({ $datepicker, $target, $pointer }) {
      $datepicker.style.width = `${$target.clientWidth}px`;
      const coords = $target.getBoundingClientRect();
      const dpWidth = $datepicker.clientWidth;

      let top =
        coords.y +
        coords.height / 2 +
        window.scrollY +
        $target.clientHeight / 1.5;
      let left = coords.x + coords.width / 2 - dpWidth / 2;

      $datepicker.style.left = `${left}px`;
      $datepicker.style.top = `${top}px`;

      $pointer.style.display = "none";
    },
  };
  new AirDatepicker(e, options);
});

 let dpMin = new AirDatepicker(".js-dpMin", {
     onSelect({date}) {
         dpMax.update({
             minDate: date
         })
     },
     ...defaultAttr,
 })

let dpMax = new AirDatepicker(".js-dpMax", {
  onSelect({ date }) {
    dpMin.update({
      maxDate: date,
    });
  },
  position: "bottom right",
  ...defaultAttr,
});
