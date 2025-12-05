// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals, and return an array of the non-overlapping
// intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Example 3:
// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.

function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];

  for (let i = 0; i < intervals.length; i++) {
    if (!mergedIntervals.length) mergedIntervals.push(intervals[i]);

    const lastIndex = mergedIntervals.length - 1;
    if (mergedIntervals[lastIndex][1] >= intervals[i][0])
      mergedIntervals[lastIndex][1] = Math.max(mergedIntervals[lastIndex][1], intervals[i][1]);
    else mergedIntervals.push(intervals[i]);
  }

  return mergedIntervals;
}

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
); // [1, 4]
console.log(merge([[1, 3]])); // [1, 3]
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1, 5]]
console.log(
  merge([
    [4, 7],
    [1, 4],
  ])
); // [[1, 7]]
