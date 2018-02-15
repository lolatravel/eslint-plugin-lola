/**
 * @fileoverview Prohibit use of arrow functions as class properties
 * @author Kevin LaFlamme
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prohibit use of arrow functions as class properties",
            category: "",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        return {
            ClassProperty: function(node) {
                if (node.value.type === 'ArrowFunctionExpression') {
                    context.report(node, 'Arrow functions are not allowed as class properties');
                }
            }
        };
    }
};
