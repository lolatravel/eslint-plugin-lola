# Restrict use of default export (no-default-export)

Require named exports. This rule is intended for use in internal projects
with strong API conventions. It is not recommended for public libraries
where default exports are beneficial and allow consumers to use without
knowing the names of internal variables.

## Rule Details

This rule aims to restrict default exports.

Examples of **incorrect** code for this rule:

```js
export default test = 'test';
export default function() {};
export default class Test {};
export { test as default };
export { default } from 'test';
```

Examples of **correct** code for this rule:

```js
export const test = 'test';
export class Test {};
export function test() {};
export { default as test } from 'test';
export { test } from 'test';
```

## When Not To Use It

If you want to use default exports
