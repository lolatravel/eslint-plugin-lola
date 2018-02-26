/**
 * @fileoverview Restrict use of default export
 * @author Kevin LaFlamme
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Restrict use of default export",
            category: "",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: []
    },

    create: function(context) {

        return {
            ExportNamedDeclaration: function(node) {
                node.specifiers.forEach(function(specifier) {
                    if (specifier.exported.name === 'default') {
                        context.report(node, "Prefer named exports");
                    }
                });
            },
            ExportDefaultDeclaration: function(node) {
                context.report(node, "Prefer named exports");
            }
        };
    }
};
