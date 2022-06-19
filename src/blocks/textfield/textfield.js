import Inputmask from "inputmask";

var maskDate = document.getElementById("mask-date");

var im = new Inputmask("99-99-9999");
im.mask(maskDate);