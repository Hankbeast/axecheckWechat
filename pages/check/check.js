// pages/check/check.js
Page({
  data: {
		step: 1,
		fileList: [],
  },
  onLoad() {

	},
	nextStep() {
		this.setData({
			step: 2
		})
	},
	afterRead(event) {
		console.log(event);
		const {file} = event.detail;
	},
	goReport() {
		
	}
})