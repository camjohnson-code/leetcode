// 872. Leaf-Similar Trees

// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:
// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

// Example 2:
// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false

const leafSimilar = (root1, root2) => {
  const root1Leaves = [];
  const root2Leaves = [];

  function getLeaves(root, leaves) {
    if (!root.left && !root.right) leaves.push(root.val);

    if (root.left) getLeaves(root.left, leaves);
    if (root.right) getLeaves(root.right, leaves);
  }

  getLeaves(root1, root1Leaves);
  getLeaves(root2, root2Leaves);

  if (root1Leaves.length !== root2Leaves.length) return false;

  for (let i = 0; i < root1Leaves.length; i++) {
    if (root1Leaves[i] !== root2Leaves[i]) return false;
  }

  return true;
};
