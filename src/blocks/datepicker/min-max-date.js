document.getElementById("dd1").addEventListener("focusout", () => {
  const inputDate = document
    .getElementById("dd1")
    .value.toString()
    .split(".")
    .reverse()
    .join("-");
  if (inputDate !== undefined) {
    $("#dd2").datepicker({
      minDate: new Date(inputDate),
    });
  }
});

document.getElementById("dd2").addEventListener("focusout", () => {
  const inputDate = document
    .getElementById("dd2")
    .value.toString()
    .split(".")
    .reverse()
    .join("-");
  if (inputDate !== undefined) {
    $("#dd1").datepicker({
      maxDate: new Date(inputDate),
    });
  }
});
