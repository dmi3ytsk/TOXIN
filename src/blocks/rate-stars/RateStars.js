class RateStars {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.rating();
  }
  rating() {
    const doc = this.element,
      $star_rating = $(doc).find(".rate-stars__star");

    const SetRatingStar = function () {
      return $star_rating.each(function () {
        if (
          parseInt($star_rating.siblings("input.rating-value").val()) >=
          parseInt($(this).data("rating"))
        ) {
          return ($(this)[0].innerHTML = "star");
        } else {
          return ($(this)[0].innerHTML = "star_border");
        }
      });
    };

    $star_rating.on("click", function () {
      $star_rating.siblings("input.rating-value").val($(this).data("rating"));
      return SetRatingStar();
    });

    SetRatingStar();
    $(document).ready(function () {});
  }
}

const rateStars = document.querySelectorAll(".rate-stars");
rateStars.forEach(function (e) {
  new RateStars(e);
});
