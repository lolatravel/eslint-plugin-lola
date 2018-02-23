/**
 * @fileoverview Limits the how deeply you can nest ternary expressions
 * @author Kevin LaFlamme
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/limit-nested-ternaries"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("limit-nested-ternaries", rule, {

    valid: [{
            code: "test1 ? true : test2 ? true : test3",
            options: [{ limit: 3 }]
        },
        {
            code: "test1 ? true : test2 ? true : test3 ? true : false",
            options: [{ limit: 3 }]
        }
    ],

    invalid: [
        {
            code: "test1 ? true : test2 ? true : test3 ? true : false",
            errors: [{
                message: "Found ternary 3 levels deep, limit is 2",
                type: "ConditionalExpression"
            }]
        }, {
            code: "test1 ? true : test2 ? true : test3 ? true : test4 ? true : false",
            options: [{ limit: 3 }],
            errors: [{
                message: "Found ternary 4 levels deep, limit is 3",
                type: "ConditionalExpression"
            }]
        }
    ]
});
