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
        }
    ],

    invalid: [
        {
            code: `
            class Bad { 
                method = () => 'bad';
            }`,
            errors: [{
                message: 'Arrow functions are not allowed as class properties: \'method\' in \'Bad\'',
                type: 'ClassProperty'
            }]
        }
    ]
});
