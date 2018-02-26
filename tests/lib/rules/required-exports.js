/**
 * @fileoverview Require specific exported names by file name/path
 * @author Kevin LaFlamme
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/required-exports"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: 'babel-eslint' });
ruleTester.run("required-exports", rule, {

    valid: [
        {
            code: "export { test };",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'test' ]
                }]
            ]
        },
        {
            code: "export { test1, test2 };",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'test1', 'test2' ]
                }]
            ]
        },
        {
            code: "export { test1 as test3, test2 as test4 };",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'test3', 'test4' ]
                }]
            ]
        },
        {
            code: "export const { test1: test3, test2: test4 } = test5;",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'test3', 'test4' ]
                }]
            ]
        },
        {
            code: "export const test = 'test'",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'test' ]
                }]
            ]
        },
        {
            code: "export let test = 'test'",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'test' ]
                }]
            ]
        },
        {
            code: "export var test = 'test'",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'test' ]
                }]
            ]
        },
        {
            code: "export function Test() {}",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'Test' ]
                }]
            ]
        },
        {
            code: "export class Test {}",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'Test' ]
                }]
            ]
        },
        {
            code: "export default 'test';",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'default' ]
                }]
            ]
        },
        {
            code: "export { test as default };",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'default' ]
                }]
            ]
        },
        {
            code: "export default function() {};",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'default' ]
                }]
            ]
        },
        {
            code: "export default class Test {};",
            filename: 'test.js',
            options: [
                [{
                    match: '^.*$',
                    exports: [ 'default' ]
                }]
            ]
        },
        {
            code: "export { TestUI };",
            filename: '/system/project/src/components/Test/ui.js',
            options: [
                [{
                    match: '^.*/components/.*/ui.js$',
                    exports: [ ':dir:UI' ]
                }]
            ]
        },
        {
            code: "export { Test };",
            filename: '/system/project/src/components/Test.js',
            options: [
                [{
                    match: '^.*/components/.*/ui.js$',
                    exports: [ ':file:' ]
                }]
            ]
        }
    ],

    invalid: [
        {
            code: "export { Test }",
            filename: '/system/project/src/components/Test/ui.js',
            options: [
                [{
                    match: '^.*/components/.*/ui.js$',
                    exports: [ ':dir:UI', ':file:' ]
                }]
            ],
            errors: [{
                message: "Missing required exports: 'TestUI', 'ui'",
                type: "Program"
            }]
        }
    ]
});
