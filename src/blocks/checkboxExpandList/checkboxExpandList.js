class CheckboxExpandList {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const doc = this.element,
      listTitle = doc.querySelector(".checkboxExpandList__title"),
      dropdownIcon = doc.querySelector(".checkboxExpandList__icon"),
      listContent = doc.querySelector(".checkboxExpandList__content");

    let isClose = (dropdownIcon.innerHTML = "expand_more") ? true : false;

    listTitle.addEventListener("click", () => {
      isClose
        ? (dropdownIcon.innerHTML = "expand_less")
        : (dropdownIcon.innerHTML = "expand_more");
      listContent.classList.toggle("checkboxExpandList__content_open");

      isClose = !isClose;
    });
  }
}

const checkboxExpandList = document.querySelectorAll(".checkboxExpandList");
checkboxExpandList.forEach(function (e) {
  new CheckboxExpandList(e);
});
