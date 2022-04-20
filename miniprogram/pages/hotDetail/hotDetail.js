// pages/hotDetail/hotDetail.js
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
    const {
      singer,
      poster
    } = options;
    // console.log(singer, poster);
    this.setData({
      singer: singer,
      poster: poster,
    })

    switch (singer) {
      case "周杰伦":
        this.setData({
          dataSource: songList.zhouJieLun
        });
        break;
      case "李荣浩":
        this.setData({
          dataSource: songList.liRongHao
        });
        break;
      case "许嵩":
        this.setData({
          dataSource: songList.xuSong
        });
        break;
      case "个性电台":
        this.setData({
          dataSource: songList.geXingDianTai
        });
        break;
      case "随心听":
        this.setData({
          dataSource: songList.suiXinTing
        });
        break;
      case "经典":
        this.setData({
          dataSource: songList.jingDian
        });
        break;
      case "网络流行":
        this.setData({
          dataSource: songList.wangLuoLiuXing
        });
        break;
      case "抖音神曲":
        this.setData({
          dataSource: songList.douYinShenQu
        });
        break;
      case "深度催眠":
        this.setData({
          dataSource: songList.shenDuCuiMian
        });
        break;
      case "情感治愈站":
        this.setData({
          dataSource: songList.qingGanZhiYuZhan
        });
        break;
      case "KTV必点歌":
        this.setData({
          dataSource: songList.KTVBiDianGe
        });
        break;
      case "精选招牌歌":
        this.setData({
          dataSource: songList.jingXuanZhaoPaiGe
        });
        break;
      case "热门翻唱":
        this.setData({
          dataSource: songList.reMenFanChang
        });
        break;
    }
    console.log(this.data.dataSource)
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