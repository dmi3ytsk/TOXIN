const { trim } = require("jquery");

class Dropdown {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.dropdown();
  }
  dropdown() {
    // Global vars block
    const doc = this.element;
    const dropdown = doc.querySelector(".js-ezdropdown");
    const selection = doc.querySelector(".js-ezdropdown__selection");
    const menu = doc.querySelector(".js-ezdropdown__menu");
    const row = doc.querySelectorAll(".js-ezdropdown__row");
    const clearBtn = doc.querySelector(".js-ezdropdown__button-clear");
    const isRooms = dropdown.classList.contains("each");
    let sumValue = 0;
    let itemQuantity = {};

    isRooms
      ? (selection.innerHTML = "2 спальни, 2 кровати...")
      : (selection.innerHTML = "Сколько гостей");
    // Close dropdown when click around
    window.addEventListener("click", function () {
      if (
        !dropdown.contains(event.target) ||
        event.target.dataset.action == "accept"
      ) {
        menu.classList.remove("ezdropdown__menu-open");
        dropdown.classList.remove("ezdropdown-open");
      }
    });
    // Open dropdown by click on dropdown
    dropdown.addEventListener("click", function () {
      if (
        !dropdown.classList.contains("ezdropdown-open") ||
        (dropdown.classList.contains("ezdropdown-open") &&
          !menu.contains(event.target))
      ) {
        dropdown.classList.toggle("ezdropdown-open");
        menu.classList.toggle("ezdropdown__menu-open");
      }
    });
    if (isRooms) {
      // Actions with each row
      row.forEach(function (each) {
        // For each item vars block
        const id = each.dataset.id;
        const buttons = each.querySelectorAll(".js-counter-btn");
        const counter = each.querySelector(".js-counter");
        const decr = each.querySelector(".js-decr");

        if (id == "Спальни") {
          itemQuantity[id] = 2;
        } else if (id == "Кровати") {
          itemQuantity[id] = 2;
        } else {
          itemQuantity[id] = 0;
        }
        counter.innerHTML = itemQuantity[id];
        counter.innerHTML > 0
          ? decr.classList.remove("counter-btn_disable")
          : decr.classList.add("counter-btn_disable");

        // Change counters by incr-decr buttons + write result in selector
        buttons.forEach(function (each) {
          each.addEventListener("click", function (event) {
            const value = event.target;
            // Principle of operation decr/incr buttons
            if (value.dataset.action == "decrement" && counter.innerHTML > 0) {
              itemQuantity[id] -= 1;
            } else if (value.dataset.action == "increment") {
              itemQuantity[id] += 1;
            }
            counter.innerHTML = itemQuantity[id];
            // Add/remove disable class to decr button
            counter.innerHTML > 0
              ? decr.classList.remove("counter-btn_disable")
              : decr.classList.add("counter-btn_disable");
            // Placeholder if all counters = 0
            let sumValue = Object.values(itemQuantity).reduce((a, b) => a + b);
            //
            let resultSelection = Object.entries(itemQuantity)
              .filter(([, val]) => val > 0)
              .map((each) => each.reverse().join(" "))
              .join(", ")
              .toLowerCase()
              .slice(0, 20)
              .trim()
              .concat("...");
            selection.innerHTML = resultSelection;
            sumValue == 0
              ? (selection.innerHTML = "Выберите планировку")
              : (selection.innerHTML = resultSelection);
          });
        });
      });
    } else {
      // Actions with each row
      row.forEach(function (each) {
        // For each item vars block
        const id = each.dataset.id;
        const buttons = each.querySelectorAll(".js-counter-btn");
        const counter = each.querySelector(".js-counter");
        const decr = each.querySelector(".js-decr");

        itemQuantity[id] = 0;
        counter.innerHTML = itemQuantity[id];
        // Clear all counters by click on clear button
        doc.addEventListener("click", function () {
          const bottomBtn = event.target;
          if (bottomBtn.dataset.action == "clear" && !isRooms) {
            itemQuantity[id] = 0;
            decr.classList.add("counter-btn_disable");
            clearBtn.classList.add("ezdropdown__button_hide");
          }
          counter.innerHTML = itemQuantity[id];
          let itemQuantityValues = Object.values(itemQuantity);
          sumValue = itemQuantityValues.reduce((a, b) => a + b);
          sumValue == 0
            ? (selection.innerHTML = "Сколько гостей")
            : sumValue == 1
            ? (selection.innerHTML = sumValue + " гость")
            : (selection.innerHTML = sumValue + " гостей");
        });
        // Change counters by incr-decr buttons + write result in selector
        buttons.forEach(function (each) {
          each.addEventListener("click", function (event) {
            const value = event.target;
            if (value.dataset.action == "decrement" && counter.innerHTML > 0) {
              itemQuantity[id] -= 1;
            } else if (value.dataset.action == "increment") {
              itemQuantity[id] += 1;
            }
            counter.innerHTML = itemQuantity[id];
            counter.innerHTML > 0
              ? decr.classList.remove("counter-btn_disable") &
                clearBtn.classList.remove("ezdropdown__button_hide")
              : decr.classList.add("counter-btn_disable");
            let itemQuantityValues = Object.values(itemQuantity);
            sumValue = itemQuantityValues.reduce((a, b) => a + b);
            if (sumValue == 0) {
              selection.innerHTML = "Сколько гостей";
              clearBtn.classList.add("ezdropdown__button_hide");
            } else if (sumValue == 1) {
              selection.innerHTML = sumValue + " гость";
            }
            selection.innerHTML = sumValue + " гостей";
          });
        });
      });
    }
  }
}

const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach(function (e) {
  new Dropdown(e);
});
