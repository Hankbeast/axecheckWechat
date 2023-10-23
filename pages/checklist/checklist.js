// pages/checklist/checklist.js
Page({

  data: {

  },
  onLoad(options) {

	},
	goInfo(event) {
		console.log(event);
		wx.navigateTo({
			url: '../infomation/infomation',
		})
	}
})