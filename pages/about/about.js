Page({
  ontap({currentTarget: {dataset: {url}}}) {
    wx.setClipboardData({
      data: url,
      success: (res) => {
        wx.showToast({
          title: '已复制',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})