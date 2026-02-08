// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
  const map = new Map();
  let start = 0;
  let output = 0;

  for (let end = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);

    while (map.get(s[end]) > 1) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }

    output = Math.max(output, end - start + 1);
  }

  return output;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
