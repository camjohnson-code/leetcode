// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = (nums) => {
  const halfOccurrences = nums.length / 2;
  const set = {};

  for (const num of nums) {
    set[num] = (set[num] || 0) + 1;
    if (set[num] > halfOccurrences) return num;
  }
};

console.log(majorityElement([3, 2, 3]));
