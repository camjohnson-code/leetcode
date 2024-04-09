// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

// Example 2:
// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

const findDifference = (nums1, nums2) => {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  return [
    Array.from(nums1Set).filter((num) => !nums2Set.has(num)),
    Array.from(nums2Set).filter((num) => !nums1Set.has(num)),
  ];
};

console.log(
  findDifference(
    [-80, -15, -81, -28, -61, 63, 14, -45, -35, -10],
    [-1, -40, -44, 41, 10, -43, 69, 10, 2]
  )
);
