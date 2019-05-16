Page({
  data: {
    tops: [],
    visible: true,
    visible1: true,
    visible2: true,
    visible3: true,
    visible4: true,
    visible5: true
  },
  onClose(e) {
    const {currentTarget: {dataset: {key}}} = e
    this.setData({
      [key]: !this.data[key]
    })
  }
})