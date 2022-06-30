document.querySelector(".js-dd1").addEventListener("focusout", () => {
  const inputDate = document
    .querySelector(".js-dd1")
    .value.toString()
    .split(".")
    .reverse()
    .join("-");
  if (inputDate !== (undefined || "")) {
    $(".js-dd2").datepicker({
      minDate: new Date(inputDate),
    });
  }
});

document.querySelector(".js-dd2").addEventListener("focusout", () => {
  const inputDate = document
    .querySelector(".js-dd2")
    .value.toString()
    .split(".")
    .reverse()
    .join("-");
  if (inputDate !== (undefined || "")) {
    $(".js-dd1").datepicker({
      maxDate: new Date(inputDate),
    });
  }
});
document.querySelector(".js-dd2").dataset.position = "bottom right"
