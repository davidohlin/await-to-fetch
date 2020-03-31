module.exports = function to(promise) {
	return promise
		.then(response => {
			if (response.hasOwnProperty('ok') && !response.ok) {
				const err = new Error(response.statusText)
				return [err, undefined]
			}
			return [null, response]
		})
		.catch(err => {
			return [err, undefined]
		})
}
