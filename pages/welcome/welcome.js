
let timer=null;
Page({
  data: {
    rotate: ''
  },
  navigateTo: function () {
    wx.redirectTo({
      // 不需要返回上一层
      url: "../index/index"
    })
  },

  onTap() {
    clearTimeout(timer);
    this.setData({
      rotate: true
    })
    setTimeout(() => {
      //    navigateTo定义为了对象的方法 所以要用this调用
      this.navigateTo();
    }, 2000)
  },


  onLoad() {

      timer = setTimeout(() => {
        this.setData({
          rotate: true
        })
        setTimeout(() => { this.navigateTo() }, 2000);
      }, 4000)

  },
  onShow(event) {

  }
})