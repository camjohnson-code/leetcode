// 1004. Max Consecutive Ones III

// Given a binary array nums and an integer k, return the maximum number of consecutive
// 1's in the array if you can flip at most k 0's.

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation:  [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation:  [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

const longestOnes = (nums, k) => {
  let left = 0;
  let right = 0;
  let zeroesFlipped = 0;
  let maxCount = 0;

  while (right < nums.length) {
    if (nums[right] === 0) zeroesFlipped++;

    while (zeroesFlipped > k) {
      if (nums[left] === 0) zeroesFlipped--;
      left++;
    }

    maxCount = Math.max(maxCount, right - left + 1);
    right++;
  }

  return maxCount;
};

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // 10
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
