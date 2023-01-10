# dev-mode.js

A pair of `devMode`/`production` booleans, and matching setters.

## usage

```JS
import {devMode, production} from "dev-mode"

if (devMode) {
    // extra checks go here
}

if (production) {
    // logging instrumentation
}
```

You can dynamically change the values using

```JS
import {setDevMode, setProduction, devMode, production} from "dev-mode"

// in a default env:
console.log(devMode, production) // true, false

setProduction()

console.log(devMode, production) // false, true

setDevMode()

console.log(devMode, production) // true, false

```

In Node.js, these values will be swapped when `NODE_ENV=production`.

For your client-side production builds, you can statically replace `dev-mode` with `dev-mode/production` in your bundler parameters. That file statically sets the booleans in a way that lets minifiers statically remove the dev code. With `dev-mode/production`, the setters are no-ops.

```JS
import {setDevMode, setProduction, devMode, production} from "dev-mode/production"

console.log(devMode, production) // false, true

setProduction()

console.log(devMode, production) // false, true

setDevMode()

console.log(devMode, production) // false, true
```

## License: ISC

> ISC License
>
> Copyright 2023 Pierre-Yves Gérardy
>
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
>
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.