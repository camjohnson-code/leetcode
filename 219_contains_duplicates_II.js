// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct
// indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

const containsNearbyDuplicate = (nums, k) => {
  const numCount = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numCount.has(nums[i])) {
      let prevIndex = numCount.get(nums[i]);
      if (i - prevIndex <= k) return true;
    }

    numCount.set(nums[i], i);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
