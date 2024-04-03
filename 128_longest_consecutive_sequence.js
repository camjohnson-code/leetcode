// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

const longestConsecutive = (nums) => {
  if (!nums.length) return 0;
  if (nums.length === 1) return 1;

  let set = new Set(nums);
  let streak = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currentStreak = 1;

    while (set.has(num + 1)) {
      currentStreak++;
      num++;
    }

    streak = Math.max(streak, currentStreak);
  }

  return streak;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
