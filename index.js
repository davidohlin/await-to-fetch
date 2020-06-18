module.exports = function to(promise, props) {
	return promise
		.then(response => {
			if (
				typeof response === 'object' &&
				response.constructor.name === 'Response' &&
				!response.ok
			) {
				const err = new Error(response.statusText)
				if (props) Object.assign(err, props)

				return [err, undefined]
			}
			return [null, response]
		})
		.catch(err => {
			if (props) Object.assign(err, props)

			return [err, undefined]
		})
}
