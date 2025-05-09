// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:
// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

const findMaxAverage = (nums, k) => {
  let total = 0;
  let maxAverage = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];

    if (i >= k - 1) {
      maxAverage = Math.max(maxAverage, total / k);
      total -= nums[i - k + 1];
    }
  }

  return Number(maxAverage.toFixed(5));
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5.00000
