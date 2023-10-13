// logs.js

Page({
  data: {
    active: 0
  },
  onLoad() {
    
	},
	onSwitch() {
		this.setData({
			active: this.data.active == 0?1:0
		})
	},
	gotoCheck() {
		wx.navigateTo({
			url: '../check/check',
		})
	}
})
