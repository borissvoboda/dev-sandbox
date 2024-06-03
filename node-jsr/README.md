# JSR and Node

Based on https://jsr.io/docs/with/node

Node can use JSR packages, via JSR’s npm compatibility layer: https://jsr.io/docs/npm-compatibility

1. in package.json, set "type": "module"
2. add package by (e.g.) "npx jsr add @std/fmt"
3. add packages with the jsr CLI.
4. e.g. npx jsr add @hono/hono
