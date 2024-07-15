// Given a string s and an integer k, return the maximum
// number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

const maxVowels = (s, k) => {
  const vowels = new Set('aeiou');
  let count = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (i >= k && vowels.has(s[i - k])) count--;

    max = Math.max(max, count);
  }

  return max;
};

console.log(maxVowels('abciiidef', 3));
