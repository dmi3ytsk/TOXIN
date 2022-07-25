class LikeBtn {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.like();
  }
  like() {
    const doc = this.element;
    const btn = doc.querySelector(".js-like-btn__design");
    const likes = doc.querySelector(".js-like-btn__likes");
    const status = doc.querySelector(".js-liked");
    const heart = doc.querySelector(".js-like-btn__heart");
    const likeProp = {
      isLiked: status ? false : true,
      likeCount: likes.innerHTML,
      heartIcon: heart.innerHTML,
    }

    btn.addEventListener("click", () => this.btnLiked(likeProp, btn, likes, heart))
  }
  btnLiked(likeProp, btn, likes, heart) {
    likeProp.likeCount = likeProp.isLiked ? Number(likeProp.likeCount)+1 : Number(likeProp.likeCount)-1;
    likeProp.heartIcon = likeProp.isLiked ? "favorite" : "favorite_border";
    btn.classList.toggle("liked");
    likes.classList.toggle("liked");
    heart.classList.toggle("liked");

    likeProp.isLiked = !likeProp.isLiked;
    likes.innerHTML = likeProp.likeCount;
    heart.innerHTML = likeProp.heartIcon;
  }
}

const likeBtn = document.querySelectorAll(".js-like-btn");
likeBtn.forEach(function (e) {
  new LikeBtn(e);
});
