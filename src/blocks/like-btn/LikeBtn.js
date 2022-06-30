class LikeBtn {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.like();
  }
  like() {
    const doc = this.element,
      btn = doc.querySelector(".js-like-btn__design"),
      likes = doc.querySelector(".js-like-btn__likes"),
      status = doc.querySelector(".js-liked"),
      heart = doc.querySelector(".js-like-btn__heart");

    let isLiked = status ? false : true,
      likeCount = likes.innerHTML,
      heartIcon = heart.innerHTML;

    btn.addEventListener("click", () => {
      likeCount = isLiked ? ++likeCount : --likeCount;
      heartIcon = isLiked ? "favorite" : "favorite_border";
      btn.classList.toggle("liked");
      likes.classList.toggle("liked");
      heart.classList.toggle("liked");

      isLiked = !isLiked;
      likes.innerHTML = likeCount;
      heart.innerHTML = heartIcon;
    });
  }
}

const likeBtn = document.querySelectorAll(".js-like-btn");
likeBtn.forEach(function (e) {
  new LikeBtn(e);
});
