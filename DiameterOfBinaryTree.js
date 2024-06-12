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
 * @return {number}
 */

// left max depth + right max depth + 1
var diameterOfBinaryTree = function (root) {
    let result = 0;

    function maxDepth(root) {
        if (root === null) return 0;

        let left = maxDepth(root.left);
        let right = maxDepth(root.right);

        result = Math.max(result, left + right);

        return 1 + Math.max(left, right);
    }

    maxDepth(root);
    return result;
};
