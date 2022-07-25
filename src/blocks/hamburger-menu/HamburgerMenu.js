class HamburgerMenu {
  constructor() {
    this.init();
  }
  init() {
    this.hamburger();
  }
  hamburger() {
    const button = document.querySelector(".js-hamburger-menu__button");
    const box = document.querySelector(".js-hamburger-menu__box");
    button.innerHTML = "menu";

    this.showBurgerButton(button);

    window.addEventListener("resize", () => this.showBurgerButton(button));
    button.addEventListener("click", () => this.toggleMenu(button, box));
  }
  toggleMenu(button, box) {
    button.innerHTML === "menu"
      ? (button.innerHTML = "close")
      : (button.innerHTML = "menu");
    box.classList.toggle("hamburger-menu__box_hide");
    button.classList.toggle("hamburger-menu__button_checked");
  }
  showBurgerButton(button) {
    if (window.matchMedia("(max-width: 956px)").matches) {
      button.classList.remove("hamburger-menu__button_hide");
    } else {
      button.classList.add("hamburger-menu__button_hide");
    }
  }
}
export default HamburgerMenu;
