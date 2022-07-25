import EzDropdown from "../ez-dropdown/EzDropdown";

const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach(function (e) {
  new EzDropdown(e);
});
