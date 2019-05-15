Page({
  data: {
    visible: false,
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: false,
  },
  onTap(e) {
    const {key} = e.currentTarget.dataset
    this.setData({
      [key]: !this.data[key]
    })
  },
  closeDialog(e) {
    const {key} = e.currentTarget.dataset
    this.setData({
      [key]: false
    })
  }
})