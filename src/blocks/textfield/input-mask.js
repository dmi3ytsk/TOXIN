import Inputmask from "inputmask";

if (document.querySelector(".js-mask-date")) {
  const maskDate = document.querySelector(".js-mask-date");
  const im = new Inputmask("99-99-9999");

  im.mask(maskDate);
}
