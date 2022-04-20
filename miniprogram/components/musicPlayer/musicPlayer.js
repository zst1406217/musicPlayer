const app = getApp()
Component({
  data: {
    musicPic: app.globalData.musicPic,
    musicName: app.globalData.musicName,
    artistName: app.globalData.artistName,
    playState: app.globalData.playState,
  },
  methods: {
    handleMusic: function () {
      console.log(app.globalData);
      switch (this.data.playState) {
        case 0:
          this.setData({
            playState: 1
          });
          this.play();
          break;
        case 1:
          this.setData({
            playState: 0
          });
          this.pause();
          break;
      }
    },
    play: function () {
      app.globalData.audio.play();
      app.globalData.playState = 1;
    },
    pause: function () {
      app.globalData.audio.pause();
      app.globalData.playState = 0;
    },
    change: function () {
      app.globalData.audio.src = app.globalData.musicUrl
      app.globalData.playState = 1;
      this.setData({
        playState: 1
      });
      app.globalData.audio.play();
    },
    updataData() {
      this.setData({
        musicPic: app.globalData.musicPic,
        musicName: app.globalData.musicName,
        musicUrl: app.globalData.musicUrl,
        artistName: app.globalData.artistName,
        playState: app.globalData.playState
      });
      // console.log(this.data.musicName);
    }
  },
  pageLifetimes: {
    show: function () {
      this.updataData();
    },
    ready: function () {

    },
  },
})