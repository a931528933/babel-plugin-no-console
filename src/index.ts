import type { PluginObj, NodePath, Node } from '@babel/core'
import * as t from '@babel/types'
function handleConsole(path: NodePath<Node>) {
    let hasConsole = false
    path.traverse({
        CallExpression(path) {
            path.traverse({
                Identifier(path) {
                    if (t.isIdentifier(path.node, { name: 'console' })) {
                        hasConsole = true
                    }
                }
            })
        }
    })
    if (hasConsole) {
        path.remove()
    }
}

export default function (): PluginObj {
    return {
        visitor: {
            enter() {
                console.log(111);
            },
            exit() {
                console.log(222);
            },
            ExpressionStatement: handleConsole
        }
    };
}