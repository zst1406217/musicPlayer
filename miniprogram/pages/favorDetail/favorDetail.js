import songList from "../../datas/songList.js";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singer: null,
    poster: null,
    dataSource: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var player = this.selectComponent("#player");
    // console.log(player);
    app.globalData.musicPlayer = player;
    // const {
    //   singer,
    //   poster
    // } = options;
    // // console.log(singer, poster);
    // this.setData({
    //   singer: singer,
    //   poster: poster,
    // })
    const db = wx.cloud.database({
      env: 'cloud1-1g2hhwqi2003a35c'
    })
    db.collection('music_favor').field({
      sid: true,
      _id: true,
      singer: true,
    }).get({
      success: res => {
        // console.log(res);
        let favorSongs = new Array(100);
        let favorSongIds = new Array(100);
        let favorSingers = new Array(100);
        res.data.forEach(function (item, index) {
          favorSongs[index] = item.sid;
          favorSongIds[index] = item._id;
          favorSingers[index] = item.singer;
        })
        app.globalData.favorMusics = {
          favorSongs: favorSongs,
          favorSongIds: favorSongIds,
          favorSingers: favorSingers,
        }
        // let states = getApp().globalData.favorMusics;
        switch (favorSingers[0]) {
          case "周杰伦":
            this.setData({
              poster: songList.zhouJieLun[favorSongs[0] - 1].poster,
            });
            break;
          case "李荣浩":
            this.setData({
              poster: songList.liRongHao[favorSongs[0] - 1].poster,
            });
            break;
          case "许嵩":
            this.setData({
              poster: songList.xuSong[favorSongs[0] - 1].poster,
            });
            break;
          case "个性电台":
            this.setData({
              poster: songList.geXingDianTai[favorSongs[0] - 1].poster,
            });
            break;
          case "随心听":
            this.setData({
              poster: songList.suiXinTing[favorSongs[0] - 1].poster,
            });
            break;
          case "经典":
            this.setData({
              poster: songList.jingDian[favorSongs[0] - 1].poster,
            });
            break;
          case "网络流行":
            this.setData({
              poster: songList.wangLuoLiuXing[favorSongs[0] - 1].poster,
            });
            break;
          case "抖音神曲":
            this.setData({
              poster: songList.douYinShenQu[favorSongs[0] - 1].poster,
            });
            break;
          case "深度催眠":
            this.setData({
              poster: songList.shenDuCuiMian[favorSongs[0] - 1].poster,
            });
            break;
          case "情感治愈站":
            this.setData({
              poster: songList.qingGanZhiYuZhan[favorSongs[0] - 1].poster,
            });
            break;
          case "KTV必点歌":
            this.setData({
              poster: songList.KTVBiDianGe[favorSongs[0] - 1].poster,
            });
            break;
          case "精选招牌歌":
            this.setData({
              poster: songList.jingXuanZhaoPaiGe[favorSongs[0] - 1].poster,
            });
            break;
          case "热门翻唱":
            this.setData({
              poster: songList.reMenFanChang[favorSongs[0] - 1].poster,
            });
            break;
        }
        // let favorSongList = new Array(100);
        let favorSongList = [];
        for (var i = 0; i < res.data.length; i++) {
          switch (favorSingers[i]) {
            case "周杰伦":
              let zjl = songList.zhouJieLun[favorSongs[i] - 1];
              favorSongList.push({
                "name": zjl.name,
                "src": zjl.src,
                "poster": zjl.poster,
                "singer": "周杰伦",
                "id": zjl.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "李荣浩":
              let lrh = songList.liRongHao[favorSongs[i] - 1];
              favorSongList.push({
                "name": lrh.name,
                "src": lrh.src,
                "poster": lrh.poster,
                "singer": "李荣浩",
                "id": lrh.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "许嵩":
              let xs = songList.xuSong[favorSongs[i] - 1];
              favorSongList.push({
                "name": xs.name,
                "src": xs.src,
                "poster": xs.poster,
                "singer": "许嵩",
                "id": xs.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "个性电台":
              let gxdt = songList.geXingDianTai[favorSongs[i] - 1];
              favorSongList.push({
                "name": gxdt.name,
                "src": gxdt.src,
                "poster": gxdt.poster,
                "singer": "个性电台",
                "id": gxdt.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "随心听":
              let sxt = songList.suiXinTing[favorSongs[i] - 1];
              favorSongList.push({
                "name": sxt.name,
                "src": sxt.src,
                "poster": sxt.poster,
                "singer": "个性电台",
                "id": sxt.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "经典":
              let jd = songList.jingDian[favorSongs[i] - 1];
              favorSongList.push({
                "name": jd.name,
                "src": jd.src,
                "poster": jd.poster,
                "singer": "个性电台",
                "id": jd.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "网络流行":
              let wllx = songList.wangLuoLiuXing[favorSongs[i] - 1];
              favorSongList.push({
                "name": wllx.name,
                "src": wllx.src,
                "poster": wllx.poster,
                "singer": "个性电台",
                "id": wllx.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "抖音神曲":
              let dysq = songList.douYinShenQu[favorSongs[i] - 1];
              favorSongList.push({
                "name": dysq.name,
                "src": dysq.src,
                "poster": dysq.poster,
                "singer": "个性电台",
                "id": dysq.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "深度催眠":
              let sdcm = songList.shenDuCuiMian[favorSongs[i] - 1];
              favorSongList.push({
                "name": sdcm.name,
                "src": sdcm.src,
                "poster": sdcm.poster,
                "singer": "个性电台",
                "id": sdcm.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "情感治愈站":
              let qgzyz = songList.qingGanZhiYuZhan[favorSongs[i] - 1];
              favorSongList.push({
                "name": qgzyz.name,
                "src": qgzyz.src,
                "poster": qgzyz.poster,
                "singer": "个性电台",
                "id": qgzyz.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "KTV必点歌":
              let ktv = songList.KTVBiDianGe[favorSongs[i] - 1];
              favorSongList.push({
                "name": ktv.name,
                "src": ktv.src,
                "poster": ktv.poster,
                "singer": "个性电台",
                "id": ktv.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "精选招牌歌":
              let jxzpg = songList.jingXuanZhaoPaiGe[favorSongs[i] - 1];
              favorSongList.push({
                "name": jxzpg.name,
                "src": jxzpg.src,
                "poster": jxzpg.poster,
                "singer": "个性电台",
                "id": jxzpg.id,
                "counterId": favorSongIds[i],
              });
              break;
            case "热门翻唱":
              let rmfc = songList.reMenFanChang[favorSongs[i] - 1];
              favorSongList.push({
                "name": rmfc.name,
                "src": rmfc.src,
                "poster": rmfc.poster,
                "singer": "个性电台",
                "id": rmfc.id,
                "counterId": favorSongIds[i],
              });
              break;
          }
        }
        this.setData({
          dataSource: favorSongList,
        });
        // console.log(this.data.dataSource);
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})