class StarRating {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    var doc = this.element,
      $star_rating = $(doc).find(".rateStars__star");

    var SetRatingStar = function () {
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

const rateStars = document.querySelectorAll(".rateStars");
rateStars.forEach(function (e) {
  new StarRating(e);
});
