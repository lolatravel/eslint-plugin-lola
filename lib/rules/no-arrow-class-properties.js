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
                if (node.value.type === "ArrowFunctionExpression" && !node.static) {
                    var classNode = node.parent.parent;
                    var className = classNode.id ? classNode.id.name : '(anonymous class)';
                    var methodName = node.key.name;
                    context.report(node, "Unexpected arrow function '" + methodName + "' on class '" + className + "'");
                }
            }
        };
    }
};
