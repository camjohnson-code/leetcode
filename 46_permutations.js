// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

function permute(nums) {
  if (!nums.length) return [];
  const permutations = [];
  const used = new Array(nums.length).fill(false);

  function backtrack(permutation) {
    if (permutation.length === nums.length) {
      permutations.push([...permutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      permutation.push(nums[i]);
      backtrack(permutation);
      permutation.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return permutations;
}

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
