Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleHot: function (e) {
      wx.navigateTo({
        url: `../hotDetail/hotDetail?singer=${this.data.item.name}&poster=${this.data.item.thumb}`,
        // url: `../hotDetail/hotDetail?poster=${this.data.item.thumb}`,
      })
    }
  }
})