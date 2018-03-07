/**
 * @fileoverview Rule to flag nested ternary expressions
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const DEFAULT_OPTIONS = { allowChained: false };

module.exports = {
    meta: {
        docs: {
            description: "disallow nested ternary expressions",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-nested-ternary"
        },

        schema: [{
            type: "object",
            properties: {
                allowChained: {
                    type: "boolean"
                }
            },
            additionalProperties: false
        }]
    },

    create(context) {
        const options = context.options[0] || DEFAULT_OPTIONS;

        return {
            ConditionalExpression(node) {
                if ((!options.allowChained && node.alternate.type === "ConditionalExpression") ||
                        node.consequent.type === "ConditionalExpression") {
                    context.report({ node, message: "Do not nest ternary expressions." });
                }
            }
        };
    }
};
