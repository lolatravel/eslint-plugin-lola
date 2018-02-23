# Limits the how deeply you can nest ternary expressions (limit-nested-ternaries)

There is a `no-nested-ternary` rule already, but this rule allows configuring the level you want.

## Rule Details

This rule aims to limit ternaries to a certain depth. The default is 2.

Examples of **incorrect** code for this rule:

```js
const varName = test1 ? true : test2 ? true : test3 ? true : false;
```

Examples of **correct** code for this rule:

```js

const varName = test1 ? true : test2 ? false;
const varName = test1 ? true : false;
```

### Options
To disable:
```
"limit-nested-ternaries": 0
```

To change the limit:
```
"limit-nested-ternaries": [2, { limit: 3 }]
```
