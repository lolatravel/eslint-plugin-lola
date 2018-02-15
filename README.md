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
        "lola/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





