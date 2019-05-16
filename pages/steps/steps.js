Page({
  data: {
    steps: ['任务1', '任务二', '任务三'],
    currentStep: 2,
    steps1: ['任务1', '任务二', '任务三'],
    currentStep1: 2,
    colors: {
      finished: '#ee3f4d',
      active: '#10aec2'
    }
  },
  onTap() {
    const {currentStep1, steps1} = this.data;
    this.setData({
      currentStep1: currentStep1 + 1 > steps1.length ? 1 : currentStep1 + 1
    })
  }
})