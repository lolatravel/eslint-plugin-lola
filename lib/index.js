/**
 * @fileoverview Enforce Lola javascript conventions
 * @author Kevin LaFlamme
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
    standard: {
        rules: {
            'no-nested-ternary': 0,
            'lola/no-nested-ternary': ["error", { allowChained: true }],
            'lola/no-arrow-class-properties': 2,
            'lola/no-default-export': 2
        }
    }
};

