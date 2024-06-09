/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }

    return checkMirror(root.left, root.right);
};

const checkMirror = (a, b) => {
    if (a === null || b === null) {
        return a === null && b === null;
    }

    if (a.val !== b.val) {
        return false;
    }

    return checkMirror(a.left, b.right) && checkMirror(a.right, b.left);
};
