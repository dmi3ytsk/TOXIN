import HamburgerMenu from "../hamburger-menu/HamburgerMenu";

import "./header.scss";

const dropdown = document.querySelectorAll(".js-header__burger");
dropdown.forEach(function (e) {
  new HamburgerMenu(e);
});
