"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleConsole(path) {
    let hasConsole = false
    path.traverse({
        CallExpression: function (path) {
            path.traverse({
                Identifier: function (path) {
                    if (path.node.name === 'console') {
                        hasConsole = true
                    }
                }
            });
        }
    });
    if(hasConsole){
        path.remove();
    }
}
function default_1() {
    return {
        visitor: {
            enter: function () {
                console.log(111);
            },
            exit: function () {
                console.log(222);
            },
            ExpressionStatement: handleConsole
        }
    };
}
exports.default = default_1;
