/**
 * @fileoverview Limits the how deeply you can nest ternary expressions
 * @author Kevin LaFlamme
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Limits the how deeply you can nest ternary expressions",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [{
            type: 'object',
            properties: {
                'limit': {
                    type: 'number'
                }
            }
        }],
        deprecated: true
    },

    create: function(context) {
        var LIMIT = context.options[0] ? context.options[0].limit : 2;
        var processed = {};
        return {
            ConditionalExpression: function(node) {
                var count = 1;
                var conditional = node;
                while (conditional.alternate.type === 'ConditionalExpression') {
                    count += 1;
                    conditional = conditional.alternate;
                }

                if (count > LIMIT) {
                    context.report(node, "Found ternary " + count + " levels deep, limit is " + LIMIT);
                }
            }
        };
    }
};
