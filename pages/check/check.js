// pages/check/check.js
Page({
  data: {
		step: 1,
		fileList: [],
		// 
		facInfo: [],
		bsciInfo: []
  },
  onLoad() {

	},
	nextStep() {
		this.setData({
			step: 2
		})
	},
	facInfoRead(event) {
		const {file} = event.detail;
		this.setData({
			facInfo: [{
				url: file.url,
				name: 'facInfo'
			}]
		})
	},
	bsciInfoRead(event) {
		const {file} = event.detail;
		this.setData({
			bsciInfo: [{
				url: file.url,
				name: 'facInfo'
			}]
		})
	},
	picDel(item) {
		this.setData({
			facInfo: []
		})
	},
	bsciInfoDel() {
		this.setData({
			bsciInfo: []
		})
	},
	goReport() {
		
	},
})