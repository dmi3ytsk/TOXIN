class CheckboxExpandList {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const doc = this.element,
      listTitle = doc.querySelector(".checkbox-expand-list__title"),
      dropdownIcon = doc.querySelector(".checkbox-expand-list__icon"),
      listContent = doc.querySelector(".checkbox-expand-list__content");

    let isClose = (dropdownIcon.innerHTML = "expand_more") ? true : false;

    listTitle.addEventListener("click", () => {
      isClose
        ? (dropdownIcon.innerHTML = "expand_less")
        : (dropdownIcon.innerHTML = "expand_more");
      listContent.classList.toggle("checkbox-expand-list__content_open");

      isClose = !isClose;
    });
  }
}

const checkboxExpandList = document.querySelectorAll(".checkbox-expand-list");
checkboxExpandList.forEach(function (e) {
  new CheckboxExpandList(e);
});
