const to = require('./dist/await-to-fetch.umd.js')

it('should return a value when promise is resolved with { ok: true }', async () => {
	const input = { ok: true }
	const [err, res] = await to(Promise.resolve(input))

	expect(err).toBeNull()
	expect(res).toEqual(input)
})

it('should return a value when promise is resolved with { ok: false }', async () => {
	const input = { ok: false }
	const [err, res] = await to(Promise.resolve(input))

	expect(err instanceof Error).toBe(false)
	expect(res).toEqual(input)
})

it('should return value when promise is resolved without an ok-flag', async () => {
	const input = {}
	const [err, res] = await to(Promise.resolve(input))

	expect(err).toBeNull()
	expect(res).toEqual(input)
})

it('should return an error with passed props when promise is rejected', async () => {
	const input = new Error('error')
	const props = { cool: 'beans' }
	const [err, res] = await to(Promise.reject(input), props)

	expect(err.foo).toEqual(props.foo)
	expect(res).toBeUndefined()
})

it('should return an error when promise is rejected', async () => {
	const input = new Error('error')
	const [err, res] = await to(Promise.reject(input))

	expect(err).toEqual(input)
	expect(res).toBeUndefined()
})
