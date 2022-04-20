const app = getApp();
Component({
  properties: {
    item: {
      type: Object,
      value: {}
    },
    singer: {
      type: String,
      value: {}
    }
  },
  ready: function () {
    // console.log(this.properties.item, this.properties.singer);
  },
  methods: {
    handleClick: function () {
      var musicPlayer = app.globalData.musicPlayer;
      // console.log(musicPlayer);

      app.globalData.playState = 1;
      app.globalData.musicPic = this.properties.item.poster;
      app.globalData.musicName = this.properties.item.name;
      app.globalData.musicUrl = this.properties.item.src;
      app.globalData.artistName = this.properties.singer;

      musicPlayer.setData({
        playState: app.globalData.playState,
        musicPic: app.globalData.musicPic,
        musicName: app.globalData.musicName,
        musicUrl: app.globalData.musicUrl,
        artistName: app.globalData.artistName
      })

      musicPlayer.change();
    },
    handleFavor: function () {
      this.setData({
        favor: !this.data.favor
      })
      // console.log(this.data.favor)
      if (this.data.favor) {
        this.favorMusic();
      } else {
        this.disfavorMusic();
      }
    },
    favorMusic: function () {
      const db = wx.cloud.database({
        env: 'cloud1-1g2hhwqi2003a35c'
      });
      db.collection('music_favor').add({
        data: {
          sid: this.properties.item.id,
          singer: this.properties.singer,
          favor: true
        },
        success: res => {
          this.setData({
            counterId: res._id,
            count: 1
          })
          wx.showToast({
            title: '已收藏',
          })
          console.log('[数据库][新增记录]成功，记录_id:', res._id)
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '新增记录失败',
          })
          console.error('[数据库][新增记录]失败:', err)
        }
      });
      // switch (this.properties.singer) {
      //   case "周杰伦":
      //     app.globalData.favorMusics.zjls[this.properties.item.id] = true;
      //     app.globalData.favorMusics.zjlcounterIds[this.properties.item.id] = this.data.counterId;
      //     break;
      //   case "李荣浩":
      //     app.globalData.favorMusics.lrhs[this.properties.item.id] = true;
      //     app.globalData.favorMusics.lrhcounterIds[this.properties.item.id] = this.data.counterId;
      //     break;
      //   case "许嵩":
      //     app.globalData.favorMusics.xss[this.properties.item.id] = true;
      //     app.globalData.favorMusics.xscounterIds[this.properties.item.id] = this.data.counterId;
      //     break;
      // }
      // app.globalData.favorMusics.musics[this.properties.item.id] = true
      // app.globalData.favorMusics.counterIds[this.properties.item.id] = this.data.counterId

    },
    disfavorMusic: function () {
      if (this.properties.item.counterId) {
        const db = wx.cloud.database({
          env: 'cloud1-1g2hhwqi2003a35c'
        })
        db.collection('music_favor').doc(this.properties.item.counterId).remove({
          success: res => {
            wx.showToast({
              title: '已取消收藏',
            })
            this.setData({
              counterId: '',
              count: null,
            })
            // switch (this.properties.singer) {
            //   case "周杰伦":
            //     app.globalData.favorMusics.zjls[this.properties.item.id] = false;
            //     app.globalData.favorMusics.zjlcounterIds[this.properties.item.id] = null;
            //     break;
            //   case "李荣浩":
            //     app.globalData.favorMusics.lrhs[this.properties.item.id] = false;
            //     app.globalData.favorMusics.lrhcounterIds[this.properties.item.id] = null;
            //     break;
            //   case "许嵩":
            //     app.globalData.favorMusics.xss[this.properties.item.id] = false;
            //     app.globalData.favorMusics.xscounterIds[this.properties.item.id] = null;
            //     break;
            // }
            // app.globalData.favorMusics.musics[this.properties.item.id] = false
            // app.globalData.favorMusics.counterIds[this.properties.item.id] = null
          },
          fail: err => {
            wx.showToast({
              title: '删除失败',
              icon: 'none',
            })
            console.error('[数据库][删除记录]失败:', err)
          }
        })
      } else {
        wx.showToast({
          title: '无counterId,该歌曲还未收藏',
        })
      }
    },
    // update: function () {
    //   const db = wx.cloud.database({
    //     env: 'cloud1-1g2hhwqi2003a35c'
    //   })
    //   db.collection('music_favor').field({
    //     sid: true,
    //     _id: true,
    //     singer: true,
    //   }).get({
    //     success: res => {
    //       // console.log(res);
    //       let favorSongs = new Array(100);
    //       let favorSongIds = new Array(100);
    //       let favorSingers = new Array(100);
    //       res.data.forEach(function (item, index) {
    //         favorSongs[index] = item.sid;
    //         favorSongIds[index] = item._id;
    //         favorSingers[index] = item.singer;
    //       })
    //       app.globalData.favorMusicCount = res.data.length;
    //       console.log(res.data.length);
    //       // app.globalData.favorMusics = {
    //       //   favorSongs: favorSongs,
    //       //   favorSongIds: favorSongIds,
    //       //   favorSingers: favorSingers,
    //       // }
    //     },
    //     fail: err => {
    //       wx.showToast({
    //         title: '查询记录失败',
    //         icon: 'none',
    //       })
    //       console.error('[数据库][查询记录]失败:', err)
    //     }
    //   })
    // }
  },
  data: {
    favor: true,
    // counterId: this.properties.item.counterId,
  },
  pageLifetimes: {
    show: function () {
      console.log(1);
      // this.setData({
      //   counterId: this.properties.item.counterId,
      // })
    }
  }
})