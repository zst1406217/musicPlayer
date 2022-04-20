// app.js
import DEFAULT_MUSIC from './config/index';
App({
  onLaunch() {
    if (!wx.cloud) {
      console.error('请使用2.2.3或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'cloud1-1g2hhwqi2003a35c',
        traceUser: true,
      })
    }
    // // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    this.globalData.audio.src = DEFAULT_MUSIC.DEFAULT_MUSIC.musicUrl;
    this.getFavorMusics();
  },
  getFavorMusics: function () {
    // console.log("getFavorMusics")
    const db = wx.cloud.database({
      env: 'cloud1-1g2hhwqi2003a35c'
    })
    db.collection('music_favor').field({
      sid: true,
      _id: true,
      singer: true,
    }).get({
      success: res => {
        let zjls = new Array(10);
        let zjlcounterIds = new Array(10);
        let lrhs = new Array(10);
        let lrhcounterIds = new Array(10);
        let xss = new Array(10);
        let xscounterIds = new Array(10);
        let favorSongs = new Array(100);
        let favorSongIds = new Array(100);
        let favorSingers = new Array(100);
        res.data.forEach(function (item, index) {
          switch (item.singer) {
            case "周杰伦":
              zjls[item.sid] = true;
              zjlcounterIds[item.sid] = item._id;
              break;
            case "李荣浩":
              lrhs[item.sid] = true;
              lrhcounterIds[item.sid] = item._id;
              break;
            case "许嵩":
              xss[item.sid] = true;
              xscounterIds[item.sid] = item._id;
              break;
          };
          favorSongs[index] = item.sid;
          favorSongIds[index] = item._id;
          favorSingers[index] = item.singer;
        })
        this.globalData.favorMusicCount = res.data.length;
        // console.log(this.globalData.favorMusicCount);
        this.globalData.favorMusics = {
          // zjls: zjls,
          // zjlcounterIds: zjlcounterIds,
          // lrhs: lrhs,
          // lrhcounterIds: lrhcounterIds,
          // xss: xss,
          // xscounterIds: xscounterIds,
          favorSongs: favorSongs,
          favorSongIds: favorSongIds,
          favorSingers: favorSingers,
        }
        // console.log(zjlcounterIds);
      },
      fail: err => {
        wx.showToast({
          title: '查询记录失败',
          icon: 'none',
        })
        console.error('[数据库][查询记录]失败:', err)
      }
    })
  },
  globalData: {
    userInfo: null,
    audio: wx.createInnerAudioContext(),
    playState: DEFAULT_MUSIC.DEFAULT_MUSIC.playState,
    musicPic: DEFAULT_MUSIC.DEFAULT_MUSIC.musicPic,
    musicName: DEFAULT_MUSIC.DEFAULT_MUSIC.musicName,
    musicUrl: DEFAULT_MUSIC.DEFAULT_MUSIC.musicUrl,
    artistName: DEFAULT_MUSIC.DEFAULT_MUSIC.artistName,
    musicPlayer: null,
    favorMusicCount: 0,
    favorMusics: {},
  },
})