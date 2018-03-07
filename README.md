# eslint-plugin-lola

Enforce Lola javascript conventions

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-lola`:

```
$ npm install eslint-plugin-lola --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lola` globally.

## Usage

Add `lola` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lola"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lola/no-arrow-class-properties": 2
    }
}
```

or use the statndard lola configuration

```json
{
    "extends": [
        "plugin:lola/standard"
    ]
}
```

## Supported Rules

[`no-arrow-class-properties`](docs/rules/no-arrow-class-properties.md) - Don't allow arrow functions on classes
[`no-nested-ternary`](docs/rules/no-nested-ternary.md) - eslint core `no-nested-ternary` rule with an option to allow chaining




