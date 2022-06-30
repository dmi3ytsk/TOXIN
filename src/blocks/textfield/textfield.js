import Inputmask from "inputmask";

const maskDate = document.querySelector(".js-mask-date");
const im = new Inputmask("99-99-9999");

im.mask(maskDate);