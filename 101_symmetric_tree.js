// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

const isSymmetric = (root) => {
  if (!root) return true;

  return isSame(root.left, root.right);
};

const isSame = (leftNode, rightNode) => {
  if (
    (!leftNode && rightNode) ||
    (leftNode && !rightNode) ||
    (leftNode && rightNode && leftNode.val !== rightNode.val)
  )
    return false;
    
  if (leftNode && rightNode)
    return (
      isSame(leftNode.left, rightNode.right) &&
      isSame(leftNode.right, rightNode.left)
    );

  return true;
};
