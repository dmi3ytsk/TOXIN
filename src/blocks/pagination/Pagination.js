import $ from "jquery";
import "paginationjs";

class Pagination {
  constructor() {
    this.init();
  }
  init() {
    const root = $(".js-pagination")
    this.createInstance(root);
  }
  createInstance($element) {
    const dataSource = $element.data("source");
    const pageSize = parseInt($element.data("page-size"), 10);
    const pageRange = parseInt($element.data("page-range"), 10);
    const total = dataSource.length > 100 ? "100+" : dataSource.length;

    $element.pagination({
      dataSource,
      pageSize,
      pageRange,
      autoHidePrevious: true,
      autoHideNext: true,
      showNavigator: true,
      classPrefix: "pagination",
      activeClassName: "pagination-page_active",
      disableClassName: "pagination-page_disabled",
      ulClassName: "pagination__ul",
      prevText:
        '<button class="material-icons pagination__arrow-prev">arrow_back</button>',
      nextText:
        '<button class="material-icons pagination__arrow-next">arrow_forward</button>',
      formatNavigator: `<span class="js-pagination__from"><%= currentPage %></span> &ndash; 
                        <span class="js-pagination__to">${pageSize}</span> из ${total} вариантов аренды`,
      formatResult(data) {
        $element.find(".js-pagination__from").text(data[0] + 1);
        $element.find(".js-pagination__to").text(data[data.length - 1] + 1);
      },
    });
  }
}

$(() => new Pagination());
