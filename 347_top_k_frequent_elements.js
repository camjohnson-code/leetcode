// Given an integer array nums and an integer k,
// return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  const map = new Map();

  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  const sortedNums = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  return sortedNums.slice(0, k).map((num) => num[0]);
};
