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

    window.addEventListener("resize", () => this.showBurgerButton(button));
    button.addEventListener("click", () => this.toggleMenu(button, box));
  }
  toggleMenu(button, box) {
    if (button.innerHTML === "menu") {
      button.innerHTML = "close"
    } else {
      button.innerHTML = "menu"
    }
    box.classList.toggle("hamburger-menu__box_hide");
    button.classList.toggle("hamburger-menu__button_checked");
  }
}
export default HamburgerMenu;
