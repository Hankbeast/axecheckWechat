// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
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
	goRes() {
		wx.navigateTo({
			url: '../register/register',
		})
	},
	forgotPwd() {
		wx.navigateTo({
			url: '../forgotPwd/forgotPwd',
		})
	},
	logintomain() {
		wx.navigateTo({
			url: '../infomation/infomation',
		})
	},
	wechatLogin() {
		wx.getUserProfile({
			desc: '你的个人信息将被用于登录',
			success: (res) => {
				console.log(res);
				wx.navigateTo({
					url: '../infomation/infomation',
				})
			}
		})
	}
})
