document.querySelector(".dd1").addEventListener("focusout", () => {
  const inputDate = document
    .querySelector(".dd1")
    .value.toString()
    .split(".")
    .reverse()
    .join("-");
  if (inputDate !== (undefined || "")) {
    $(".dd2").datepicker({
      minDate: new Date(inputDate),
    });
  }
});

document.querySelector(".dd2").addEventListener("focusout", () => {
  const inputDate = document
    .querySelector(".dd2")
    .value.toString()
    .split(".")
    .reverse()
    .join("-");
  if (inputDate !== (undefined || "")) {
    $(".dd1").datepicker({
      maxDate: new Date(inputDate),
    });
  }
});
document.querySelector(".dd2").dataset.position = "bottom right"
