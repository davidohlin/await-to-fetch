function to<T extends Response, U = Error>(
	promise: Promise<T>,
	props?: object,
): Promise<[U | null | Error, T | undefined]> {
	return promise
		.then<[null | Error, T | undefined]>((response: T) => {
			if (
				typeof response === 'object' &&
				response.constructor.name === 'Response' &&
				!response.ok
			) {
				const error = new Error(response.statusText)
				if (props) Object.assign(error, props)

				return [error, undefined]
			}

			return [null, response]
		})
		.catch<[U, undefined]>((error: U) => {
			if (props) Object.assign(error, props)
			return [error, undefined]
		})
}

export default to
