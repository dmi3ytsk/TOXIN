class LikeButton {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const doc = this.element,
      btn = doc.querySelector(".likeBtn__design"),
      likes = doc.querySelector(".likeBtn__likes"),
      heart = doc.querySelector(".likeBtn__heart");

    let like = true,
      likeCount = likes.innerHTML,
      heartIcon = heart.innerHTML;

    btn.addEventListener("click", () => {
      likeCount = like ? ++likeCount : --likeCount;
      heartIcon = like ? "favorite" : "favorite_border";
      // console.log(btn.classList)
      btn.classList.toggle("liked");
      likes.classList.toggle("liked");
      heart.classList.toggle("liked");

      like = !like;
      likes.innerHTML = likeCount;
      heart.innerHTML = heartIcon;
    });
  }
}

const likeBtn = document.querySelectorAll(".likeBtn");
likeBtn.forEach(function (e) {
  new LikeButton(e);
});
