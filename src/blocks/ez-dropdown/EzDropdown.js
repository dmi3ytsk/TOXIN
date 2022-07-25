const { trim } = require("jquery");

class EzDropdown {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.ezDropdown();
  }
  ezDropdown() {
    const doc = this.element;
    const dropdown = doc.querySelector(".js-ezdropdown");
    const selection = doc.querySelector(".js-ezdropdown__selection");
    const menu = doc.querySelector(".js-ezdropdown__menu");
    const row = doc.querySelectorAll(".js-ezdropdown__row");
    const clearBtn = doc.querySelector(".js-ezdropdown__button-clear");
    const isRooms = dropdown.dataset.type === "rooms";
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
      row.forEach(function (each) {
        const id = each.dataset.id;
        const buttons = each.querySelectorAll(".js-ezdropdown__row-button");
        const counter = each.querySelector(".js-ezdropdown__row-counter");
        const decr = each.querySelector(
          ".js-ezdropdown__row-button[data-action='decrement']"
        );

        if (id == "Спальни") {
          itemQuantity[id] = 2;
        } else if (id == "Кровати") {
          itemQuantity[id] = 2;
        } else {
          itemQuantity[id] = 0;
        }
        counter.innerHTML = itemQuantity[id];
        counter.innerHTML > 0
          ? decr.classList.remove("ezdropdown__row-button_disable")
          : decr.classList.add("ezdropdown__row-button_disable");

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
              ? decr.classList.remove("ezdropdown__row-button_disable")
              : decr.classList.add("ezdropdown__row-button_disable");
            sumValue = Object.values(itemQuantity).reduce((a, b) => a + b);
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
      row.forEach(function (each) {
        const id = each.dataset.id;
        const buttons = each.querySelectorAll(".js-ezdropdown__row-button");
        const counter = each.querySelector(".js-ezdropdown__row-counter");
        const decr = each.querySelector(
          ".js-ezdropdown__row-button[data-action='decrement']"
        );
        doc.addEventListener("click", function () {
          const bottomBtn = event.target;
          if (bottomBtn.dataset.action == "clear" && !isRooms) {
            itemQuantity[id] = 0;
            decr.classList.add("ezdropdown__row-button_disable");
            clearBtn.classList.add("ezdropdown__button_hide");
            counter.innerHTML = itemQuantity[id];
            selection.innerHTML = "Сколько гостей";
          }
        });
        itemQuantity[id] = 0;
        counter.innerHTML = itemQuantity[id];
        counter.innerHTML > 0
          ? decr.classList.remove("ezdropdown__row-button_disable")
          : decr.classList.add("ezdropdown__row-button_disable");

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
              ? decr.classList.remove("ezdropdown__row-button_disable") &
                clearBtn.classList.remove("ezdropdown__button_hide")
              : decr.classList.add("ezdropdown__row-button_disable");
            sumValue = Object.values(itemQuantity).reduce((a, b) => a + b);
            const guestsValue =
              Object.values(itemQuantity)[0] + Object.values(itemQuantity)[1];
            const infantsValue = Object.values(itemQuantity)[2];
            const guestText = guestsValue === 1 ? " гость" : " гостей";
            const infantsText = infantsValue === 1 ? " младенец" : " младенцев";

            let resultSelection = "";
            if (guestsValue > 0 && infantsValue > 0) {
              resultSelection = `${guestsValue} ${guestText}, ${infantsValue} ${infantsText}`;
            } else if (guestsValue > 0 && !infantsValue > 0) {
              resultSelection = `${guestsValue} ${guestText}`;
            } else if (!guestsValue > 0 && infantsValue > 0) {
              resultSelection = `${infantsValue} ${infantsText}`;
            }
            sumValue === 0
              ? (selection.innerHTML = "Сколько гостей") &
                clearBtn.classList.add("ezdropdown__button_hide")
              : (selection.innerHTML = resultSelection);
          });
        });
      });
    }
  }
}

export default EzDropdown;
