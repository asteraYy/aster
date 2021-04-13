// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickyyf:true,
    clickyxl:true,
    clickfyl:true,
    clicktzp:true,
    clickzcy:true,
    clicklmh:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  changeyyf: function(){
    wx.navigateTo({
      url: '/pages/yyf/yyf',
    })
  },
  changeyxl:function(){
    wx.navigateTo({
      url: '/pages/yxl/yxl',
    })
  },
  changetzp:function(){
    wx.navigateTo({
      url: '/pages/tzp/tzp',
    })
  },
  changefyl:function(){
    wx.navigateTo({
      url: '/pages/fyl/fyl',
    })
  },
  changezcy:function(){
    wx.navigateTo({
      url: '/pages/zcy/zcy',
    })
  },
  changelmh:function(){
    wx.navigateTo({
      url: '/pages/lmh/lmh',
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})