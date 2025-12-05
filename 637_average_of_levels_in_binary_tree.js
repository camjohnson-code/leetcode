// 637. Average of Levels in Binary Tree

// Given the root of a binary tree, return the average value of the nodes on each level
// in the form of an array. Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

// Example 2:
// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

const averageOfLevels = (root) => {
  let queue = [root];
  let output = [];

  while (queue.length) {
    let queueLength = queue.length;
    let row = 0;

    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      row += curr.val;

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    output.push(row / queueLength);
  }

  return output;
};
