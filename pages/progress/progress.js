Page({
  data: {
    percent: 0,
    backgroundIndex: 11,
    colorIndex: 0,
    visibleDialog: false,
    type: '',
    colors: [
      {name: '香叶红',value: '#f07c82'},
      {name: '淡菽红',value: '#ed4845'},
      {name: '洋葱紫',value: '#a8456b'},
      {name: '樱草紫',value: '#c06f98'},
      {name: '靛青',value: '#1661ab'},
      {name: '星蓝',value: '#93b5cf'},
      {name: '竹绿',value: '#1ba784'},
      {name: '鹦鹉绿',value: '#5bae23'},
      {name: '蝶黄',value: '#e2d849'},
      {name: '藤黄',value: '#ffd111'},
      {name: '远山紫',value: '#ccccd6'},
      {name: '星灰',value: '#b2bbbe'},
    ]
  },
  onShow() {
    this.timer = setTimeout(() => {
      this.setData({
        percent: 80
      })
    }, 50)
  },
  onHide() {
    clearTimeout(this.timer)
  },
  toggleDialog(e) {
    const {currentTarget: {dataset: {type}}} = e;
    this.setData({
      visibleDialog: !this.data.visibleDialog,
      type
    })
  },
  closeDialog(){
    this.setData({
      visibleDialog: false
    })
  },
  chooseColor(e) {
    const {currentTarget: {dataset: {index}}} = e;
    this.setData({
      [this.data.type]: index,
      visibleDialog: false
    })
  }
})