class LikeButton {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const doc = this.element,
      btn = doc.querySelector(".likeBtn__design"),
      likes = doc.querySelector(".likeBtn__likes"),
      status = doc.querySelector(".liked"),
      heart = doc.querySelector(".likeBtn__heart");

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

const likeBtn = document.querySelectorAll(".likeBtn");
likeBtn.forEach(function (e) {
  new LikeButton(e);
});
