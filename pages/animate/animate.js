Page({
  data: {
    animates: [
      {name: 'bounce', play: false},
      {name: 'bounceInDown', play: false},
      {name: 'bounceInLeft', play: false},
      {name: 'bounceInRight', play: false},
      {name: 'bounceInUp', play: false},
      {name: 'bounceOutDown', play: false},
      {name: 'bounceOutLeft', play: false},
      {name: 'bounceOutRight', play: false},
      {name: 'bounceOutUp', play: false},
      
      {name: 'fadeInDown', play: false},
      {name: 'fadeInLeft', play: false},
      {name: 'fadeInRight', play: false},
      {name: 'fadeInUp', play: false},
      {name: 'fadeOutDown', play: false},
      {name: 'fadeOutLeft', play: false},
      {name: 'fadeOutRight', play: false},
      {name: 'fadeOutUp', play: false},

      {name: 'flip', play: false},
      {name: 'flipInX', play: false},
      {name: 'flipInY', play: false},
      {name: 'flipOutX', play: false},
      {name: 'flipOutY', play: false},

      {name: 'heartBeat', play: false},

      {name: 'lightSpeedIn', play: false},
      {name: 'lightSpeedOut', play: false},

      {name: 'rollIn', play: false},
      {name: 'rollOut', play: false},

      {name: 'rotateIn', play: false},
      {name: 'rotateInDownLeft', play: false},
      {name: 'rotateInDownRight', play: false},
      {name: 'rotateInUpLeft', play: false},
      {name: 'rotateInUpRight', play: false},

      {name: 'rotateOut', play: false},
      {name: 'rotateOutDownLeft', play: false},
      {name: 'rotateOutDownRight', play: false},
      {name: 'rotateOutUpLeft', play: false},
      {name: 'rotateOutUpRight', play: false},

      {name: 'rubberBand', play: false},

      {name: 'swing', play: false},

      {name: 'zoomIn', play: false},
      {name: 'zoomInDown', play: false},
      {name: 'zoomInLeft', play: false},
      {name: 'zoomInRight', play: false},
      {name: 'zoomInUp', play: false},

      {name: 'zoomOut', play: false},
      {name: 'zoomOutDown', play: false},
      {name: 'zoomOutLeft', play: false},
      {name: 'zoomOutRight', play: false},
      {name: 'zoomOutUp', play: false},
    ]
  },
  onTap({currentTarget: {dataset: {index}}}) {
    const { animates } = this.data
    animates[index].play = !animates[index].play
    this.setData({
      animates
    })
  },
  onAnimationEnd({currentTarget: {dataset: {key}}}) {
    this.setData({
      [key]: false
    })
  }
})