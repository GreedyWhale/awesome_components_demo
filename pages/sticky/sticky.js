Page({
  data: {
    scrollTop: 0,
    distance: 0
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  onLayout(e) {
    this.setData({
      distance: e.detail.height
    })
  }
})