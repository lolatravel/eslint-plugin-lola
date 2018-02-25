/**
 * @fileoverview Require specific exported names by file name/path
 * @author Kevin LaFlamme
 */
"use strict";
var path = require('path');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Require specific exported names by file name/path",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [{
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    match: {
                        type: 'string'
                    },
                    exports: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    }
                }
            }
        }]
    },

    create: function(context) {

        var exports;
        var requiredExports;

        return {
            "ExportNamedDeclaration": function(node) {
                if (!requiredExports.size) return;

                node.specifiers.forEach(function(specifier) {
                    exports.add(specifier.exported.name);
                });

                if (node.declaration && ['ClassDeclaration', 'FunctionDeclaration'].indexOf(node.declaration.type) !== -1) {
                    exports.add(node.declaration.id.name);
                } else if (node.declaration && node.declaration.type === 'VariableDeclaration') {
                    node.declaration.declarations.forEach(function(decl) {
                        if (decl.id.type === 'Identifier') {
                            exports.add(decl.id.name);
                        } else if (decl.id.type === 'ObjectPattern') {
                            decl.id.properties.forEach(function(property) {
                                if (property.value.type === 'Identifier') {
                                    exports.add(property.value.name);
                                } else {
                                    exports.add(property.key.name);
                                }
                            });
                        }
                    });
                }
            },

            "ExportDefaultDeclaration": function(node) {
                exports.add('default');
            },

            "Program": function(node) {
                exports = new Set();
                requiredExports = new Set();
                var filePath = context.getFilename();
                var ext = path.extname(filePath);
                var file = {
                    dir: path.basename(path.dirname(filePath)),
                    name: path.basename(filePath, ext)
                };
                var options = context.options[0] || [];
                
                options.forEach(function(option) {
                    var match = new RegExp(option.match);
                    if (match.test(filePath)) {
                        option.exports.forEach(function(e) {
                            return requiredExports.add(e.replace(':dir:', file.dir).replace(':file:', file.name));
                        });
                    }
                });
            },

            "Program:exit": function(node) {
                var missing = [];
                requiredExports.forEach(function(exp) {
                    if (!exports.has(exp)) {
                        missing.push(exp);
                    }
                });

                if (missing.length) {
                    var msg = missing.map(function(m) {
                        return "'" + m + "'";
                    }).join(', ')
                    context.report(node, 'Missing required exports: ' + msg);
                }
            }
        };
    }
};
