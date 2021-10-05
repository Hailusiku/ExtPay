// this line is required in background.js to use ExtPay!
const extpay = ExtPay('hailusiku')
extpay.startBackground();

extpay.getUser().then(user => {
	console.log(user)
})
