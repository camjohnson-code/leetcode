// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// SOLUTION 1:
// const isAnagram = (s, t) => {
//   for (const char of t) {
//     if (s.indexOf(char) === -1) return false;
//     else s.replace(char, '');
//   }

//   return true;
// };

// SOLUTION 2:
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sLetters = s.split('').reduce((acc, letter) => {
    acc[letter] = ++acc[letter] || 1;

    return acc;
  }, {});

  for (const char of t) {
    if (!sLetters[char]) return false;
    sLetters[char]--;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
