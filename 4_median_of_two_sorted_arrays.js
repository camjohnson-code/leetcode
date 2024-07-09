// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

const findMedianSortedArrays = (nums1, nums2) => {
  const sortedNums = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length || p2 < nums2.length) {
    if (
      nums2[p2] === undefined ||
      (nums1[p1] !== undefined && nums1[p1] < nums2[p2])
    ) {
      sortedNums.push(nums1[p1]);
      p1++;
    } else if (
      nums1[p1] === undefined ||
      (nums2[p2] !== undefined && nums1[p1] > nums2[p2])
    ) {
      sortedNums.push(nums2[p2]);
      p2++;
    } else {
      sortedNums.push(nums1[p1], nums2[p2]);
      p1++;
      p2++;
    }
  }

  let evenLength = sortedNums.length % 2 === 0;

  if (!evenLength) return sortedNums[Math.floor(sortedNums.length / 2)];
  else {
    let startIndex = Math.floor(sortedNums.length / 2) - 1;
    let endIndex = Math.floor(sortedNums.length / 2);

    return (sortedNums[startIndex] + sortedNums[endIndex]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
