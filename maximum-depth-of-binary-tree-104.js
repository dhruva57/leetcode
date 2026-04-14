/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 1. Base Case: If the tree is empty (or we've reached a null child), depth is 0
    if (root === null) {
        return 0;
    }
    
    // 2. Recursively find the depth of the left subtree
    let leftDepth = maxDepth(root.left);
    
    // 3. Recursively find the depth of the right subtree
    let rightDepth = maxDepth(root.right);
    
    // 4. Return the greater of the two depths, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
};