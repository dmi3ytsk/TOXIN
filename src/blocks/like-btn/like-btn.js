class LikeButton {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const doc = this.element,
      btn = doc.querySelector(".like-btn__design"),
      likes = doc.querySelector(".like-btn__likes"),
      status = doc.querySelector(".liked"),
      heart = doc.querySelector(".like-btn__heart");

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

const likeBtn = document.querySelectorAll(".like-btn");
likeBtn.forEach(function (e) {
  new LikeButton(e);
});
