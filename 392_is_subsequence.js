// Given two strings s and t, return true if s is
// a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is
// formed from the original string by deleting some (can be none)
// of the characters without disturbing the relative positions of
// the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

const isSubsequence = (s, t) => {
  if (!s.length) return true;
  let p1 = 0;
  let p2 = 0;

  while (p2 < t.length) {
    if (t[p2] === s[p1]) p1++;
    if (p1 === s.length) return true;

    p2++;
  }

  return false;
};

console.log(isSubsequence('bb', 'ahbgdc'));
