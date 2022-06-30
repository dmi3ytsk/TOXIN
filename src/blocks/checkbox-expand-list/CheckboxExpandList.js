class CheckboxExpandList {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.listSwitch();
  }

  listSwitch() {
    const doc = this.element;
    const listTitle = doc.querySelector(".js-checkbox-expand-list__title");
    const dropdownIcon = doc.querySelector(".js-checkbox-expand-list__icon");
    const listContent = doc.querySelector(".js-checkbox-expand-list__content");

    listTitle.addEventListener("click", () => {
      dropdownIcon.innerHTML == "expand_more"
        ? (dropdownIcon.innerHTML = "expand_less")
        : (dropdownIcon.innerHTML = "expand_more");
      listContent.classList.toggle("checkbox-expand-list__content_open");
    });
  }
}

const checkboxExpandList = document.querySelectorAll(".js-checkbox-expand-list");
checkboxExpandList.forEach(function (e) {
  new CheckboxExpandList(e);
});
