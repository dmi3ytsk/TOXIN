!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequiree29d;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){let t=r[e];delete r[e];let o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){r[e]=n},e.parcelRequiree29d=t),t("qBOXU");var o=class{constructor(){this.init()}init(){this.hamburger()}hamburger(){const e=document.querySelector(".js-hamburger-menu__button"),n=document.querySelector(".js-hamburger-menu__box");window.addEventListener("resize",(()=>this.showBurgerButton(e))),e.addEventListener("click",(()=>this.toggleMenu(e,n)))}toggleMenu(e,n){"menu"===e.innerHTML?e.innerHTML="close":e.innerHTML="menu",n.classList.toggle("hamburger-menu__box_hide"),e.classList.toggle("hamburger-menu__button_checked")}};document.querySelectorAll(".js-header__burger").forEach((function(e){new o(e)})),t("6xLTm")}();
//# sourceMappingURL=landing.49863c64.js.map
