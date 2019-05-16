Page({
  data: {
    navBarText: 'NavBar',
    colors: [
      '#eea2a4', '#ee3f4d', '#7a7374', '#ee4863', '#cc5595',
      '#411c35', '#7e2065', '#813c85', '#525288', '#0f59a4',
      '#1a94bc', '#10aec2', '#12aa9c', '#248067', '#2bae85',
      '#20a162', '#bacf65', '#fed71a', '#fcb70a', '#fca104',
      '#ea8958', '#f2e7e5', '#4b2e2b', '#f6dcce'
    ],
    navBg: '#f0d22e',
    navTextColor: '#161616',
    navIconColor: '',
    immersion: false,
    navBarImg: ''
  },
  setNavBarText(e) {
    if (e.detail.value) {
      this.setData({
        navBarText: e.detail.value
      })
    }
  },
  setNavColor(e) {
    const {currentTarget: {dataset: {key, index}}} = e
    this.setData({
      [key]: this.data.colors[index]
    })
  },
  toggleImmersion() {
    this.setData({
      immersion: !this.data.immersion
    })
  },
  chooseImg() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          navBarImg: res.tempFilePaths
        })
      }
    })
  },
  clearImg() {
    this.setData({
      navBarImg: ''
    })
  }
})