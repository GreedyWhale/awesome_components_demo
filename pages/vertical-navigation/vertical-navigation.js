Page({
  data: {
    navIndex: 0,
    navs: [],
    contents: [],
    scrollHeight: 0
  },
  onShow() {
    const navs = Array.from({length: 25}, (v, i) => `nav-${i}`)
    const contents = Array.from({length: 25}, (v, i) => `content-${i}`)
    this.setData({
      navs,
      contents
    })
    wx.createSelectorQuery()
      .in(this)
      .select('.page-header')
      .boundingClientRect()
      .exec(rect => { 
        const {windowWidth, windowHeight} = wx.getSystemInfoSync()
        this.setData({
          scrollHeight:`${windowHeight - rect[0].bottom - 40 / 750 * windowWidth}px`
        })
      })
  },
  onTapNav({currentTarget: {dataset: {index}}}) {
    this.setData({
      navIndex: index
    })
  },
  updateActiveNav(e) {
    this.setData({
      navIndex: e.detail
    })
  }
})