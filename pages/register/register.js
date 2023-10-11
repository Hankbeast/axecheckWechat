// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
		logs: [],
		step: 1,
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
	},
	goLogin() {
		wx.navigateTo({
			url: '../login/login',
		})
	},
	goNext() {
		this.setData({
			step: 2
		})
	}
})
