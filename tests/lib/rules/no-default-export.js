/**
 * @fileoverview Restrict use of default export
 * @author Kevin LaFlamme
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-default-export"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: 'babel-eslint' });
ruleTester.run("no-default-export", rule, {

    valid: [
        {
            code: "export class Test {}"
        },
        {
            code: "export function test() {}"
        },
         {
            code: "export const Test = 'test'"
        }
    ],

    invalid: [
        {
            code: "export default 'test'",
            errors: [{
                message: "Prefer named exports",
                type: "ExportDefaultDeclaration"
            }]
        },
        {
            code: "export { test as default }",
            errors: [{
                message: "Prefer named exports",
                type: "ExportNamedDeclaration"
            }]
        },
        {
            code: "export { default } from 'test'",
            errors: [{
                message: "Prefer named exports",
                type: "ExportNamedDeclaration"
            }]
        }
    ]
});
