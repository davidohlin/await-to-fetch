# await-to-fetch [![Build Status](https://github.com/davidohlin/await-to-fetch/workflows/build/badge.svg)](https://github.com/davidohlin/await-to-fetch/actions)

Easy error handling for async/await without try/catch blocks that
works with [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

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

  return res
}
```

## Credits

- [await-to-js](https://github.com/scopsy/await-to-js)
- [Handling Failed HTTP Responses With fetch()](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)
