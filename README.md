# wdioV8-appium

Use `npm i` to install


# Trouble shooting notes

- Webdriver failed due to response error, invalid session id

`DEBUG webdriver: request failed due to response error: invalid session id`

This was due to the android emulator having issue, was a pixel 4, made a one Pixel 5 and it works like a charm.

- Error cannot not find module.

```
Error: Error: Cannot find module '<path>\<filename>' imported from <path>\<filename>.ts     
[0-0]     at finalizeResolution (D:\NetworkShare\wdioV8-appium\node_modules\ts-node\dist-raw\node-internal-modules-esm-resolve.js:366:11)
... truncated ...
```

Found that changing 

`import { FirstScreen } from "../pom/firstScreen.page";`

to

`import { FirstScreen } from "../pom/firstScreen.page.ts";`

fixed the issue, not sure why?!

