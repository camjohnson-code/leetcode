// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

// Example 1:
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4

// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]

// Example 2:
// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

const numSubarraysWithSum = (nums, goal) => {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let total = 0;

  for (const num of nums) {
    sum += num;

    if (map.has(sum - goal)) total += map.get(sum - goal);

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return total;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // 4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // 15
