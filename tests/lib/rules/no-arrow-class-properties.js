/**
 * @fileoverview Prohibit use of arrow functions as class properties
 * @author Kevin LaFlamme
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-arrow-class-properties"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: 'babel-eslint' });
ruleTester.run("no-arrow-class-properties", rule, {

    valid: [
        {
            code: `
            class Good { 
                method() {
                    return 'good';
                }
            }`
        },
        {
            code: `
            class Good { 
                static method = () => {
                    return 'good';
                }
            }`
        },
        {
            code: `
            const Good = class { 
                method() {
                    return 'good';
                }
            }`
        },
        {
            code: `
            const Good = class { 
                static method = () => {
                    return 'good';
                }
            }`
        }
    ],

    invalid: [
        {
            code: `
            class Bad { 
                method = () => 'bad';
            }`,
            errors: [{
                message: "Unexpected arrow function 'method' on class 'Bad'",
                type: 'ClassProperty'
            }]
        },
        {
            code: `
            const Bad = class { 
                method = () => 'bad';
            }`,
            errors: [{
                message: "Unexpected arrow function 'method' on class '(anonymous class)'",
                type: 'ClassProperty'
            }]
        }
    ]
});
