class Player {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.findElements();
    this.bindEventListeners();
  }

  findElements() {
    this.$video = this.element.find('.js-player__video');
    [this.video] = this.$video;
    this.$playButton = this.element.find('.js-player__playing');
    this.$bar = this.element.find('.js-player__bar');
    this.$progress = this.element.find('.js-player__progress');
    this.$fullScreen = this.element.find('.js-player__full-screen');
  }

  bindEventListeners() {
    this.$video.click(this.handlePlayButtonClick.bind(this));
    this.$playButton.click(this.handlePlayButtonClick.bind(this));
    this.$bar.click(this.handleBarClick.bind(this));
    this.$fullScreen.click(this.handleFullScreenClick.bind(this));
    this.$video.on('timeupdate', this.handleProgressTimeUpdate.bind(this));
  }

  handlePlayButtonClick() {
    if (this.video.paused) {
      this.video.play();
      this.$playButton.addClass('player__playing_icon_pause');
      this.$playButton.removeClass('player__playing_icon_play');
    } else {
      this.video.pause();
      this.$playButton.addClass('player__playing_icon_play');
      this.$playButton.removeClass('player__playing_icon_pause');
    }
  }

  handleBarClick(event) {
    const coordinate = event.clientX - this.$bar.offset().left;
    const barLength = this.$bar.width();
    const fullTime = this.video.duration;
    const currentTime = (fullTime * coordinate) / barLength;
    this.video.currentTime = currentTime;
  }

  handleProgressTimeUpdate() {
    const { currentTime } = this.video;
    const fullTime = this.video.duration;
    const playedRatio = (currentTime / fullTime) * 100;
    this.$progress.css('width', `${playedRatio}%`);
    if (this.video.ended) {
      this.$playButton.addClass('player__playing_icon_play');
      this.$playButton.removeClass('player__playing_icon_pause');
      this.$progress.css('width', '0%');
    }
  }

  handleFullScreenClick() {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

export default Player;
