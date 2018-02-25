# Require specific exported names by file name/path (required-exports)

This rule will allow your team to enforce certain maodule APIs. For example,
splitting React components up into container.js, ui.js, test.js, etc. and requiring
that each file has specifically named exports.

## Rule Details

This rule aims to enforce module APIs by filepath.

Examples of **incorrect** code for this rule:

```js
// src/components/MyComponent/ui.js
// options: [{ match: '^.*/components/.*/ui.js$', exports: [ ':dir:UI' ] }]
export class MyComponentContainer {
    ....
}
```

Examples of **correct** code for this rule:

```js
// src/components/MyComponent/ui.js
// options: [{ match: '^.*/components/.*/ui.js$', exports: [ ':dir:UI' ] }]
export class MyComponentUI {
    ....
}
```

### Options

Options should be an array of objects where each object has two keys:

match    - regular expression for the files to check
exports  - array of the required export names
            - :dir: will be substituted with the parent directory name
            - :file: will be substituted with the file name
            - default can be used to require a default export

```js
// The following will require an export named "MyComponentUI" when processing
// "src/components/MyComponent/ui.js"
"required-exports": [
    2,
    [{
        match: "^.*/components/.*/ui.js$", 
        exports: [ ':dir:UI' ] 
    }]
]
```

```js
// The following will require an export named "MyComponent" when processing
// "src/components/MyComponent.js"
"required-exports": [
    2,
    [{
        match: "^.*/components/*.js$", 
        exports: [ ':file:' ] 
    }]
]
```

## When Not To Use It

When you want to enforce some specific conventions around file/directory structure
and APIs for a set of modules.
