// pages/forgotPwd/forgotPwd.js
Page({
  data: {
		step: 1
  },
  onLoad(options) {

	},
	goStep2() {
		this.setData({
			step: 2
		})
	},
	goStep3() {
		this.setData({
			step: 3
		})
	},
	confirm() {
		wx.navigateTo({
			url: '../login/login',
		})
	}
})