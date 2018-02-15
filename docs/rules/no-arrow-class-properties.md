# Prohibit use of arrow functions as class properties (no-arrow-class-properties)

There's debate out the performance impacts of using arrow functions to bind class methods
to `this`, so this rule disallows using arrow functions as class properties.

## Rule Details

This rule aims to prohibit arrow functions as class properties.

Examples of **incorrect** code for this rule:

```js

class Bad {
    method = () => {
        ...
    }
}

```

Examples of **correct** code for this rule:

```js

class Good {
    method() {
        ...
    }
}

```

### Options
There are currently no options for this rule

## When Not To Use It
Don't use this if you want to allow arrow functions as class properties.

## Further Reading
[Demistifying es6 class method and property initializer arrow function](http://www.reactjunkie.com/demistifying-es6-class-method-and-property-initializer-arrow-function/)
[Arrow Functions in Class Properties Might Not Be As Great As We Think](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1)
