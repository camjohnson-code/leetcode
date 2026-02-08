// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf
// path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// Example 2:
// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// Example 3:
// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

class Node {
  constructor(val, right = null, left = null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (root.val === targetSum && !root.left && !root.right) return true;

  return (
    hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  );
}

console.log(
  hasPathSum(
    new Node(
      5,
      new Node(8, new Node(13), new Node(4, null, new Node(1))),
      new Node(4, new Node(11, new Node(7), new Node(2))),
    ),
    22,
  ),
); // true
console.log(hasPathSum(new Node(1, new Node(3), new Node(2)), 5)); // false
console.log(hasPathSum(null, 0)); // false
