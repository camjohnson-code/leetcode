// Given an integer array nums, return an array answer such that answer[i] is equal
// to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity?
// (The output array does not count as extra space for space complexity analysis.)

const productExceptSelf = (nums) => {
    const leftProducts = new Array(nums.length).fill(1);
    const rightProducts = new Array(nums.length).fill(1);
    const output = new Array(nums.length);

    for (let i = 1; i < nums.length; i++) {
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }

    return output;
};

console.log(productExceptSelf([1,2,3,4])); // Outputs: [24,12,8,6]
