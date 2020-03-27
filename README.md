# await-to-fetch

Easy error handling for async/await fetch requests without try/catch blocks.
It's basically [await-to-js](https://github.com/scopsy/await-to-js), but it
works with [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
by looking at the `response.ok` flag.

## Install

```
$ npm install await-to-fetch
```

## Usage

```js
import to from 'await-to-fetch'

async function example() {
	const [err, res] = await to(fetch('https://httpstat.us/200'))

	if (err) {
		throw err
	}

	console.log(res)
}
```

## Credits

-   [await-to-js](https://github.com/scopsy/await-to-js)
-   [Handling Failed HTTP Responses With fetch()](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)
