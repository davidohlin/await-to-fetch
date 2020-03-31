import to from './'

describe('await tests', () => {
	it('should return a value when promise is resolved with { ok: true }', async () => {
		const input = { ok: true }
		const [err, res] = await to(Promise.resolve(input))

		expect(err).toBeNull()
		expect(res).toEqual(input)
	})

	it('should return an error when promise is resolved with { ok: false }', async () => {
		const input = { ok: false }
		const [err, res] = await to(Promise.resolve(input))

		expect(err instanceof Error).toBe(true)
		expect(res).toBeUndefined()
	})

	it('should return value when promise is resolved without an ok-flag', async () => {
		const input = {}
		const [err, res] = await to(Promise.resolve(input))

		expect(err).toBeNull()
		expect(res).toEqual(input)
	})

	it('should return an error when promise is rejected', async () => {
		const input = 'Error'
		const [err, res] = await to(Promise.reject(input))

		expect(err).toEqual(input)
		expect(res).toBeUndefined()
	})
})
